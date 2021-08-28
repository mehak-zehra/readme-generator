// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = 
[
    
    {
        type: 'input',
        name: 'github_user_name',
        message: 'What is your github username?',
        

    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',

    },

    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
        
    },

    {
        type: 'input',
        name: 'description',
        message: 'Describe your project?',
    },

    {
        type: 'list',
        name: 'license',
        message: 'what license your project have?',
        choices: ['MIT', 'LGPL','GPL3.0', 'BDS2', 'BDS3.0', 'APACHE2.0', 'None']
    },

    {
        type: 'input',
        name: 'dependencies',
        message: 'To install dependencies run command',
        default: 'npm install inquirer'
    },

    {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?",
        default: "npm run test"
    },

    {
        type: "input",
        name: "usage",
        message: "What does the usage of this tool?",
    },

    {
        type: "input",
        name: "contributors",
        message: "Who are the contributors of this repo?",
        default: 'Mehak Zehra'
    }

    
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then((answers) => {
    console.log("Generating readme...." );
    writeToFile('./dist/README.md',generateMarkdown(answers))
    console.log("Please check your readme in dist folder on root directory!")

  });
}

// Function call to initialize app
init();
