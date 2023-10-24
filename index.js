// Importing necessary files
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
        name: 'logoShape',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        type: 'input',
        message: 'Please enter a shape color keyword or hexadecimal: ',
        name: 'shapeColor',
    },
];

// Function to take user answers and distribute it to selected logo components
function writeToFile(fileName, answers) {
    // console.log('writetofile', answers);

    let shape;

    if (answers.logoShape === 'Circle') {
        shape = new Circle();
        // console.log('circle', shape);
    }
    else if (answers.logoShape === 'Square') {
        shape = new Square();
        // console.log('square', shape);
    }
    else if (answers.logoShape === 'Triangle') {
        shape = new Triangle();
        // console.log('triangle', shape);
    }
    else {
        console.log('Invalid or unsupported shape! :(')
    }

    shape.setShapeColor(answers.shapeColor);
    shape.setText(answers.text);
    shape.setTextColor(answers.textColor);

    const svg = shape.render();
    // console.log('svg string', svg);

// Writes returned svg tag to file and logs ensuing result
    fs.writeFile(fileName, svg, (err) =>
    err ? console.log(err) : console.log('Successfully created gen-logo.svg!')
    );

};

// Function to initialize the questions for user
function init() {
    inquirer
        .prompt (questions)
        .then ((answers) => {
            // console.log('init', answers);
            writeToFile('gen-logo.svg', answers);
        });
};

// Function call to initialize app
init();