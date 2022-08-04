const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index.js');


function renderLicenseBadge(license) { //function for getting the license badge based on which license it is passed to
    let badges = '';
    if (license === 'GPL') {
      badges = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    } else if (license === 'MIT') {
      badges = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    }
    return badges;
}

function renderLicenseLink(license) {  //function for getting the license link based on which license it is passed to
    let licenseLink = '';
    if (license === 'GNU') {
      licenseLink = 'https://choosealicense.com/licenses/gpl-3.0/'
    }  else if (license === 'MIT') {
      licenseLink = 'https://choosealicense.com/licenses/mit/' 
    }
    
    return licenseLink;
}

function renderLicenseSection(license) {  // function for getting the license section on the readme.md file to show the selected license.
    let licenseSection = '';
    if(license === ''){
      licenseSection = 'No license selected.'
    }  else {
      licenseSection = `License for this project is ${license}`
    }
    return licenseSection;
    
}

function generateMarkdown(answers) { //function to generate the markdown for the readme.md file.
    return`
# ${answers.title}

${renderLicenseBadge(answers.license)}

## Table of Contents:
* [General Information](#general)
* [Installation Instructions](#installation)
* [Technologies](#technologies)
* [Credits](#credits)
* [Screenshots or Video Files](#screenshots)
* [Project Live Page](#liveURL)
* [License](#license)

### General Information:
${answers.general}

### Installation Instructions:
In order to install the application to make your README.md file.  Open your console and run the following command:
${answers.installation}

### Technologies:
${answers.technologies}

### Credits:
${answers.credits}

### Screenshots or Video Files:
${answers.screenshots}

### Project Live Page:
${answers.liveURL}

### License
This project is licensed under:
${renderLicenseSection(answers.license)}

#### Footer:
This project was developed by:
${answers.footer}
${answers.email}

This projects GitHub Repository is:
${answers.projectGitHub}

The Developers GitHub is:
${answers.personalGitHub}`
  
};


module.exports = generateMarkdown;
