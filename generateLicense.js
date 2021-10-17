// License Markdown

// Function to render licence badge selected
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache 2.0":
      return "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
    case "ISC":
      return "https://img.shields.io/badge/License-ISC-blue.svg";
    case "MIT":
      return "https://img.shields.io/badge/License-MIT-yellow.svg";
    case "Mozilla 2.0":
      return "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg";
    case "GNU GPLv3":
      return "https://img.shields.io/badge/License-LGPL%20v3-blue.svg";
    case "Unlicense":
      return "https://img.shields.io/badge/license-Unlicense-blue.svg";
    default:
      return "";
  }
}

// Function to render lecense link
function renderLicenseLink(license) {
  switch (license) {
    case "Apache 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "ISC":
      return "https://opensource.org/licenses/ISC";
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "Mozilla 2.0":
      return "https://opensource.org/licenses/MPL-2.0";
    case "GNU GPLv3":
      return "https://www.gnu.org/licenses/gpl-3.0";
    case "Unlicense":
      return "http://unlicense.org/";
    default:
      return "";
  }
}

function renderLicenseText(licence) {
  if (licence === "Unlicense") {
    return "This project is unlicensed";
  } else {
    return `This project is covered under the ${licence} license.`;
  }
}

// export functions to index.js
module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseText,
};
