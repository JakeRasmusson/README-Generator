// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = ''
  if (license == 'NA') { return ''} else { 
  if (license == 'Apache License 2.0') {
    licenseBadge = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
  } else if (license == 'GNU General Public License v3.0') {
    licenseBadge = 'https://img.shields.io/badge/License-GPLv3-blue.svg';
  } else if (license == 'MIT License') {
    licenseBadge =  'https://img.shields.io/badge/License-MIT-yellow.svg';
  } else if (license == 'BSD 2-Clause "Simplified" License') {
    licenseBadge =  'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg';
  } else if (license == 'BSD 3-Clause "New" or "Revised" License') {
    licenseBadge =  'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg';
  } else if (license == 'Boost Software License 1.0') {
    licenseBadge =  'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg';
  } else if (license == 'Creative Commons Zero v1.0 Universal') {
    licenseBadge =  'https://licensebuttons.net/l/zero/1.0/80x15.png';
  } else if (license == 'Eclipse Public License 2.0') {
    licenseBadge =  'https://img.shields.io/badge/License-EPL_2.0-red.svg';
  } else if (license == 'GNU Lesser General Public License v3.0') {
    licenseBadge =  'https://img.shields.io/badge/License-LGPL_v3-blue.svg';
  } else if (license == 'Mozilla Public License 2.0') {
    licenseBadge =  'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg';
  } else {
    licenseBadge =  'https://img.shields.io/badge/license-Unlicense-blue.svg';
  } return `[![License](${licenseBadge})](${renderLicenseLink(license)})`}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'Apache License 2.0') {
    return 'https://opensource.org/licenses/Apache-2.0';
  } else if (license == 'GNU General Public License v3.0') {
    return 'https://www.gnu.org/licenses/gpl-3.0';
  } else if (license == 'MIT License') {
    return 'https://opensource.org/licenses/MIT';
  } else if (license == 'BSD 2-Clause "Simplified" License') {
    return 'https://opensource.org/licenses/BSD-2-Clause';
  } else if (license == 'BSD 3-Clause "New" or "Revised" License') {
    return 'https://opensource.org/licenses/BSD-3-Clause';
  } else if (license == 'Boost Software License 1.0') {
    return 'https://www.boost.org/LICENSE_1_0.txt';
  } else if (license == 'Creative Commons Zero v1.0 Universal') {
    return 'http://creativecommons.org/publicdomain/zero/1.0/';
  } else if (license == 'Eclipse Public License 2.0') {
    return 'https://opensource.org/license/EPL-2.0';
  } else if (license == 'GNU Lesser General Public License v3.0') {
    return 'https://www.gnu.org/licenses/lgpl-3.0';
  } else if (license == 'Mozilla Public License 2.0') {
    return 'https://opensource.org/licenses/MPL-2.0';
  } else {
    return 'http://unlicense.org/';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "NA") {
    return "";
  } else {
    // const licenseLink = renderLicenseLink(license);
    // const licenseBadge = renderLicenseBadge(license);
    const licenseSection = `
  ## License

  This project has the ${license} applied to it
  `;
    return licenseSection;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("Success");
  const markDown = `# ${data.title}
  
${renderLicenseBadge(data.license)}
## Description
  
${data.description}

## Table of Contents


- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Questions](#questions)

## Installation
  
${data.installation}
  
## Usage

${data.usage}

## Credits

${data.credits}

${renderLicenseSection(data.license)}

## Questions

If you have any questions please contact me below.

[Github](https://github.com/${data.github})

[Email](${data.email})
`;
  return markDown;
  // return `# ${data.title}
}

module.exports = generateMarkdown;
