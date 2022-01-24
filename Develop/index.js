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
        const htmlPageContent = generateMarkdown(answers) ;
       
        fs.writeFile('README.md', htmlPageContent, (err) =>
          err ? console.log(err) : console.log('Successfully created index.js!')
        );
      });
  }
  
  init();
  