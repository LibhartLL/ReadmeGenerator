// node modules
const inquirer = require('inquirer');
const fs = require('fs-extra');
const generateMarkdown = require('./lib/generateMarkdown.js');


// array of questions for user input.  create and put the questions as objects in array
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
    },
    {
        type: 'input',
        name: 'general',
        message: 'What is the project description?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the project installation instructions?',
    },
    {
        type: 'input',
        name: 'dependencies',
        message: 'What command should be run to install (npm install, nodeJS)?'
    },
    {
        type: 'input',
        name: 'technologies',
        message: 'What technologies were used to make this project?',
    },
    {   
        type: 'input',
        name: 'credits',
        message: 'What tools or links did you use to help you with the project?',
    },
    {
        type: 'input',
        name: 'screenshots',
        message: 'What are the paths of your screenshots or video files?',
    },
    {
        type: 'input',
        name: 'liveURL',
        message: 'What is the path to your projects live page?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is the license you want to create?',
        choices: ['MIT', 'GNU GPL v3'],
    },
    {
        type: 'input',
        name: 'footer',
        message: 'Who is the developer of this project?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    { 
        type: 'input',
        name: 'projectGitHub',
        message: 'What is the GitHub repository for this project?',
    },
    {
        type: 'input',
        name: 'personalGitHub',
        message: 'What is your GitHub account?',
    }

];


// function to initialize app, 
function init() {
    inquirer.prompt(questions)
        .then(function(answers) {
            console.log(answers);
            const mark = generateMarkdown(answers);
            fs.writeFile('README.md', mark, function(err) {
                if (err) {
                    console.log('Could not save file')
                } else {
                    console.log('Saved file, New README.md file generated inside the current folder')
                }
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }

// function to run app.
init();

module.exports = questions;


