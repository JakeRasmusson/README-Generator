// TODO: Include packages needed for this application
const inquirer = require("./node_modules/inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the Title of your Repo?",
    name: "title",
    default: "I do not know yet.",
  },
  {
    type: "list",
    name: "license",
    message: "What license do you want for you repo?",
    choices: [
      "Apache License 2.0",
      "GNU General Public License v3.0",
      "MIT License",
      'BSD 2-Clause "Simplified" License',
      'BSD 3-Clause "New" or "Revised" License',
      "Boost Software License 1.0",
      "Creative Commons Zero v1.0 Universal",
      "Eclipse Public License 2.0",
      "GNU Lesser General Public License v2.1",
      "Mozilla Public License 2.0",
      "The Unlicense",
      'NA'
    ],
    default: "None",
  },
  {
    type: "input",
    name: "description",
    message:
      "Provide a short description explaining the what, why and how of this project",
    default: "To be added",
  },
  {
    type: "input",
    name: "installation",
    message:
      "Provide a step by step instruction on how to install this project",
    default: "To be added",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instrucions and examples of use of this project",
    default: "To be added",
  },

  // 'Contribution guidelines?',
  // 'Test instructions?'
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.appendFile(fileName, data, function (err) {
    if (err) throw err;
    console.log("File Created");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markDown = generateMarkdown(answers);
    writeToFile("Readme.md", markDown)
  });
//   writeToFile("filename", "data");
}

// Function call to initialize app
init();
