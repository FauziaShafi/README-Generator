const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

const init = () => {
    inquirer
    .prompt([{
        type: 'input',
        name: 'ProjectName',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Provide a short description explaining your project.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license did you used?',
        choices: [
            { name: "MIT license", value: "MIT" },
            { name: "Apache License 2.0", value: "Apache" },
            { name: 'BSD 3-Clause "New" or "Revised" license', value: "BSD3" },
            { name: "GNU General Public License (GPL)", value: "GPL" },
          ],
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'Instruction',
        message: 'Provide instructions and examples for use',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter GitHub Username of your collaborators',
    },
    {
        type: 'input',
        name: 'contactGithub',
        message: 'Enter your github userName',
    },
    {
        type: 'input',
        name: 'mail',
        message: 'Enter your email address',
    },
      ])
      .then((answers) => {
        let badge;
        switch (answers.license) {
          case "MIT":
            badge =
              "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
            break;
          case "Apache":
            badge =
              "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
            break;
          case "BSD3":
            badge =
              "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
            break;
          case "GPL":
            badge =
              "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
            break;
    
          default:
            throw new Error(`Invalid license ${answers.license}`);
        }
        const htmlPageContent = generateMarkdown(answers,badge) ;
       
        fs.writeFile('README.md', htmlPageContent, (err) =>
          err ? console.log(err) : console.log('Successfully created index.js!')
        );
      });
  }
  
  init();
  