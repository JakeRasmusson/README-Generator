//Packages needed to run application
const inquirer = require("./node_modules/inquirer");
const fs = require("fs");
//Importing license choices and the generate markdown function that will create the markdown text
const {generateMarkdown, licenseChoices} = require("./utils/generateMarkdown");

//Array of questions for Inquirer to prompt
const questions = [
  {
    type: "input",
    message: "What is the Title of your Repo?",
    name: "title",
    default: "To be added",
  },
  {
    type: "list",
    name: "license",
    message: "What license do you want for you repo?",
    choices: [...Object.keys(licenseChoices),'NA'],
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
    message: "Provide instrucions and examples of use of this project?",
    default: "To be added",
  },{
    type: "input",
    name: "testcase",
    message: "What did you do to test this project?",
    default: "To be added",
  },{
    type: "input",
    name: "credits",
    message: "Do you have any collaborators to list?",
    default: "To be added",
  },{
    type: "input",
    name: "github",
    message: "What is your github username",
    default: "",
  },{
    type: "input",
    name: "email",
    message: "What is the best email to contact you",
    validate: function(input){
      if (input.includes("@")) {
        return true
      } else {
        return false
      }

    }
  },



  // 'Contribution guidelines?',
  // 'Test instructions?'
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) throw err;
    console.log("File Created");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markDown = generateMarkdown(answers);
    writeToFile("Readmes\\Readme.md", markDown)
  });
//   writeToFile("filename", "data");
}

// Function call to initialize app
init();
