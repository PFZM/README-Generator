//Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// const badge = require("./utils/generateBadge");

// Array of questions for user input
const questions = [
  "Project name:",
  "Description of the project",
  "Installations instructions:",
  "Usage information:",
  "License:",
  "Contribution guidelines:",
  "Test instructions:",
  "Githihub user:",
  "Email:",
];

// Get inputs from user
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: `${questions[0]}`,
    },
    {
      type: "input",
      name: "descriptionProject",
      message: `${questions[1]}`,
    },
    {
      type: "input",
      name: "installationProject",
      message: `${questions[2]}`,
    },
    {
      type: "input",
      name: "usageProject",
      message: `${questions[3]}`,
    },
    {
      type: "list",
      name: "licenseProject",
      message: `${questions[4]}`,
      choices: ["MIT", "GNU GPLv3"],
    },
    {
      type: "input",
      name: "ContributionProject",
      message: `${questions[5]}`,
    },
    {
      type: "input",
      name: "testProject",
      message: `${questions[6]}`,
    },
    {
      type: "input",
      name: "githubUser",
      message: `${questions[7]}`,
    },
    {
      type: "input",
      name: "emailUser",
      message: `${questions[8]}`,
    },
  ]);
};

// Generate the README file

const generateReadme = ({ projectName, descriptionProject }) =>
  `README ${projectName}
Pdpdpd ${descriptionProject}`;

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

const init = () => {
  promptUser()
    .then((answers) => fs.writeFileSync("README.MD", generateReadme(answers)))
    .then(() => console.log("README created successfully"))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
