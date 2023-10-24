const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require('./lib/shapes');

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
        name: 'textColor',
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
        name: 'shapeColor',
    },
];

// Function to import generateMarkdown and run answers through it
function writeToFile(fileName, answers) {
    console.log('writetofile', answers);

    let shape;

    if (answers.shape = 'Circle') {
        console.log('circle', shape);
        shape = new Circle();
    }
    else if (answers.shape = 'Square') {
        console.log('square', shape);
        shape = new Square();
    }
    else if (answers.shape = 'Triangle') {
        console.log('triangle', shape);
        shape = new Triangle();
    }
    else {
        console.log('Invalid or unsupported shape! :(')
    }

    shape.setShapeColor(answers.shapeColor);
    shape.setText(answers.text);
    shape.setTextColor(answers.textColor);

    console.log('shape assigned', JSON.stringify(shape));

// Writes returned svg tag to file and logs ensuing result
    fs.writeFile(fileName, shape, (err) =>
    err ? console.log(err) : console.log('Successfully created gen-logo.svg!')
    );

};

// Function to initialize the questions for user
function init() {
    inquirer
        .prompt (questions)
        .then ((answers) => {
            console.log('init', answers);
            writeToFile('gen-logo.svg', answers);
        });
};

// Function call to initialize app
init();