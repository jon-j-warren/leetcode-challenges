import fetch from 'node-fetch';
import fs from 'fs';

import challenges from './challenges.json';

for (let i=0; i<challenges.length; i++) {
    const folderName = `#${challenges[i].id.toString().padStart(4, '0')} - ${challenges[i].title}`.replace(/\//g, '-').replace(/\?/g, 'Question Mark').replace(/:/g, ' -');
    if (!fs.existsSync(`../challenges/todo/${folderName}`) && !fs.existsSync(`../challenges/complete/${folderName}`)) {
        try {
            const question = (await (await fetch("https://leetcode.com/graphql", {
                headers: {
                    "accept": "*/*",
                    "accept-language": "en-US,en;q=0.9",
                    "content-type": "application/json",
                },
                body: `{\"operationName\":\"questionData\",\"variables\":{\"titleSlug\":\"${challenges[i].slug}\"},\"query\":\"query questionData($titleSlug: String!) {\\n  question(titleSlug: $titleSlug) {\\n    questionId\\n    questionFrontendId\\n    title\\n    titleSlug\\n    content\\n    codeSnippets {\\n      lang\\n      langSlug\\n      code\\n      __typename\\n    }\\n      }\\n}\\n\"}`,
                method: "POST",
                mode: "cors"
            })).json()).data.question;

            fs.mkdirSync(`../challenges/todo/${folderName}`);
            fs.writeFileSync(`../challenges/todo/${folderName}/package.json`, JSON.stringify({
                name: `challenge-${question.questionFrontendId}`,
                homepage: `https://leetcode.com/problems/${question.titleSlug}`,
                version: "1.0.0",
                description: question.title,
                main: "solution.js",
                scripts: {
                    test: "jest"
                },
                author: "Jon Warren",
                license: "ISC",
                devDependencies: {
                    "jest-cli": "^26.4.2"
                }
            }, null, 4));
            fs.writeFileSync(`../challenges/todo/${folderName}/README.md`, `# \\#${question.questionFrontendId} - ${question.title}\n${question.content}`);
            fs.writeFileSync(`../challenges/todo/${folderName}/solution.js`, question.codeSnippets.find(snippet => snippet.langSlug === 'javascript').code + '\n');
            fs.writeFileSync(`../challenges/todo/${folderName}/solution.test.js`, `const { _PLACEHOLDER_ } = require('./solution');

describe("${question.title}", () => {
    // Example 1
    test("it should pass Example 1", () => {
        const input = [
            
        ];
        const output = '';
        expect(_PLACEHOLDER_(...input)).toEqual(output);
    });

    // Example 2
    test("it should pass Example 2", () => {
        const input = [
            
        ];
        const output = '';
        expect(_PLACEHOLDER_(...input)).toEqual(output);
    });

    // Example 3
    test("it should pass Example 3", () => {
        const input = [
            
        ];
        const output = '';
        expect(_PLACEHOLDER_(...input)).toEqual(output);
    });
});
            `);
            fs.writeFileSync(`../challenges/todo/${folderName}/template.js`, question.codeSnippets.find(snippet => snippet.langSlug === 'javascript').code + '\n');
        } catch (err) {
            console.log(err);
        }
    }
}
