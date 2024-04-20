// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log('Success')
  const markDown = `# ${data.title}
  
## Description
  
${data.description}
  
## Installation
  
${data.installation}
  
## Usage

${data.usage}
  
`
  return markDown
  // return `# ${data.title}

;
}

module.exports = generateMarkdown;
