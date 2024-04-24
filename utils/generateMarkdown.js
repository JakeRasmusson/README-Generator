// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

//Dictionary storing license url links
const licenseChoices = {
  "Apache License 2.0": {
      licenseBadge : 'https://img.shields.io/badge/License-Apache_2.0-blue.svg' ,
      licenseLink : 'https://opensource.org/licenses/Apache-2.0'
  } , 
  "GNU General Public License v3.0" : {
      licenseBadge : 'https://img.shields.io/badge/License-GPLv3-blue.svg' ,
      licenseLink : 'https://www.gnu.org/licenses/gpl-3.0'
  },
  'MIT License' : {
      licenseBadge : 'https://img.shields.io/badge/License-MIT-yellow.svg',
      licenseLink : 'https://opensource.org/licenses/MIT'
  },  
  'BSD 2-Clause "Simplified" License' : {
      licenseBadge : 'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg',
      licenseLink : 'https://opensource.org/licenses/BSD-2-Clause'
  },  
  'BSD 3-Clause "New" or "Revised" License' : {
      licenseBadge : 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg',
      licenseLink : 'https://opensource.org/licenses/BSD-3-Clause'
  },
  'Boost Software License 1.0' : {
      licenseBadge : 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg',
      licenseLink : 'https://www.boost.org/LICENSE_1_0.txt'
  },
  'Creative Commons Zero v1.0 Universal' : {
      licenseBadge : 'https://licensebuttons.net/l/zero/1.0/80x15.png',
      licenseLink : 'http://creativecommons.org/publicdomain/zero/1.0/'
  },
  'Eclipse Public License 2.0' : {
      licenseBadge : 'https://img.shields.io/badge/License-EPL_2.0-red.svg',
      licenseLink : 'https://opensource.org/license/EPL-2.0'
  },
  'GNU Lesser General Public License v3.0' : {
      licenseBadge : 'https://img.shields.io/badge/License-LGPL_v3-blue.svg',
      licenseLink : 'https://www.gnu.org/licenses/lgpl-3.0'
  },
  'Mozilla Public License 2.0' : {
      licenseBadge : 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg',
      licenseLink : 'https://opensource.org/licenses/MPL-2.0'
  },
  'The Unlicense' : {
      licenseBadge : 'https://img.shields.io/badge/license-Unlicense-blue.svg',
      licenseLink : 'http://unlicense.org/'
  },
}
function renderLicenseBadge(license) {
  return license in licenseChoices 
  ?`[![License](${licenseChoices[license].licenseBadge})](${licenseChoices[license].licenseLink})`
  : ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license !== 'NA') {
  return `- [License](#license)`
}
return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "NA") {
    return "";
  } else {
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
  const {
    title,
    license,
    description,
    installation,
    usage,
    testcase,
    credits,
    github,
    email }
    = data

  const markDown = `
  # ${title}
  
${renderLicenseBadge(license)}
## Description
  
${description}

## Table of Contents


- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Questions](#questions)
${renderLicenseLink(license)}

## Installation
  
${installation}
  
## Usage

${usage}

## Credits

${credits}

${renderLicenseSection(license)}

## Test

${testcase}

## Questions

If you have any questions please contact me below.

[Github](https://github.com/${github})

[Email](${email})
`;
return markDown;
}

module.exports = {generateMarkdown, licenseChoices};
