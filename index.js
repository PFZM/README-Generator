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
  "Does this project accept contributions?",
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
      type: "list",
      name: "contributionProject",
      message: `${questions[5]}`,
      choices: ["Yes", "No"],
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

${license.renderLicenseText(licenseProject)}

## Contributing

Contributions accepted? ${contributionProject}

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.
Please note we have a code of conduct, please follow it in all your interactions with the project.
Contributions follow the [Contributor Convenant](http://contributor-covenant.org/version/1/4/).


## Test

${testProject}

## Questions

[GitHub profile](http://github.com/${GithubUser})

[Contact Me - Email](mailto:${emailUser})`;

const init = () => {
  promptUser()
    .then((answers) =>
      fs.writeFileSync("README-Example.md", generateReadme(answers))
    )
    .then(() => console.log("README created successfully"))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
