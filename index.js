//Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const badge = require("./utils/generateBadge")

// Array of questions for user input
const questions = [
    "Project name:",
    "Description of the project",
    "Installations instructions:",
    "Usage information:",
    "License:",
    "Contribution guidelines:",
    "Test intructions:",
    "Githihib user:",
    "Email:"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() => {}

// Function call to initialize app
init();
