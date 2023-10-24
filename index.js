const inquirer = require('inquirer');
const fs = require('fs');

// Question array
const questions = [
    {
        type: 'input',
        message: 'Enter up to three characters for your logo: ',
        name: 'text',
    },
    {
        type: 'input',
        message: 'Enter a text color keyword or hexadecimal (ie blue or 0000FF):',
        name: 'text-color',
    },
    {
        type: 'list',
        message: 'Please choose a background shape:',
        name: 'shape',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        type: 'input',
        message: 'Please enter a shape color keyword or hexadecimal: ',
        name: 'shape-color',
    },
];

// Function to import generateMarkdown and run answers through it
function writeToFile(fileName, answers) {
    // console.log('writetofile', answers);
    const markdownContent = genMarkdown.generateMarkdown(answers);
    // console.log('markdown', markdownContent);

// Writes markdowncontent to file and logs necessary result
    fs.writeFile(fileName, markdownContent, (err) =>
    err ? console.log(err) : console.log('Successfully generated genREADME.md!')
    );
};

// Function to initialize the questions for user
function init() {
    inquirer
        .prompt (questions)
        .then ((answers) => {
            console.log('init', answers);
            // writeToFile('genREADME.md', answers);
        });
};

// Function call to initialize app
init();