//Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const license = require("./generateLicense.js");

// Array of questions for user input
const questions = [
  "Project name:",
  "Description of the project",
  "Installations instructions:",
  "Usage information:",
  "License:",
  "Contribution guidelines:",
  "Test instructions:",
  "Github user:",
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
      choices: [
        "Apache 2.0",
        "ISC",
        "MIT",
        "Mozilla 2.0",
        "GNU GPLv3",
        "Unlicense",
      ],
    },
    {
      type: "input",
      name: "contributionProject",
      message: `${questions[5]}`,
    },
    {
      type: "input",
      name: "testProject",
      message: `${questions[6]}`,
    },
    {
      type: "input",
      name: "GithubUser",
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

const generateReadme = ({
  projectName,
  descriptionProject,
  installationProject,
  usageProject,
  licenseProject,
  contributionProject,
  testProject,
  GithubUser,
  emailUser,
}) =>
  `# ${projectName}

## License Badge

[![License: ${licenseProject}](${license.renderLicenseBadge(
    licenseProject
  )})](${license.renderLicenseLink(licenseProject)})

## Description

${descriptionProject}

## Table of contents:

1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Test](test)
6. [Questions](#questions)

## Installation

${installationProject}

## Usage

${usageProject}

## License

${licenseProject}

## Contributing

${contributionProject}

## Test

${testProject}

## Questions

[GitHub profile](http://github.com/${GithubUser})

[Contact Me](mailto:${emailUser})`;

const init = () => {
  promptUser()
    .then((answers) => fs.writeFileSync("README.MD", generateReadme(answers)))
    .then(() => console.log("README created successfully"))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
