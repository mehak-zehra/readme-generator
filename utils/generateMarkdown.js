// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== 'None') {
    return `![License](https://img.shields.io/badge/license-${license}-red.svg)`
  }
  return "";

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return (
    `* [License](#license)`
    )
  }
  return ''
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "None"){
    return `
    Copyright © ${license} . All rights reserved. 
      
    Licensed under the ${license} license.;`
    
  }
  return "";
  }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  const description = `## Description `
  const content = `## Table Of Content `
  const install = `## Installation `
  const usageInfo = `## Usage `
  const liscenseInfo = `## License `
  const contribution = `## Contributor `
  const test = `## Test `
  const questionInfo = `## Questions `
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ${description} \n - - -
  ${data.description}

  ${content} \n - - -
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contributor](#contributor)
  * [Test](#test)
  * [Questions](#questions)

  ${install} \n - - -

  To install dependencies run this command \n
  \`\`\`${data.dependencies}\`\`\`

  ${usageInfo} \n - - -

  Provide instructions for use. \n 
  To begin the question prompts, use command line to run node index.\n Answer all of the following questions, once you're finished with the README.md.\n File will be generated in the dist directory.
  \n To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:\n \n
  \`\`\`![alt text](assets/images/filename)\`\`\`\

  ${liscenseInfo} \n - - -
  ${renderLicenseSection(data.license)}

  ${contribution} \n - - -
  ${data.contributors} ♥ 

  ${test} \n - - -
  \`\`\`${data.test}\`\`\`\

  ${questionInfo} \n  - - -
  For questions about this project, please see my GitHub at [${data.github_user_name}](https://github.com/${data.github_user_name})  (Or) \n
  Contact me at ${data.email}`;
}

module.exports = generateMarkdown;
// ${description} \n
//     ${data.description}

     