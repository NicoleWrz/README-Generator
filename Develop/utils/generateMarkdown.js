// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return "https://img.shields.io/static/v1?label=License&message=MIT&color=blue&?style=plastic&link=" + renderLicenseLink(license);
  } else if (license === 'GPL') {
    return "https://img.shields.io/static/v1?label=License&message=GPL&color=purple&?style=plastic&link=" + renderLicenseLink(license);
  } else if (license === 'Apache') {
    return "https://img.shields.io/static/v1?label=License&message=Apache&color=green&?style=plastic&link=" + renderLicenseLink(license);
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return "https://choosealicense.com/licenses/mit/";
  } else if (license === 'GPL') {
    return "https://choosealicense.com/licenses/gpl-3.0/";
  } else if (license === 'Apache') {
    return "https://choosealicense.com/licenses/apache-2.0/";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `# License

  ## We used [${license}](${renderLicenseLink(license)}) 
 
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

[![License Badge](${renderLicenseBadge(data.license)})](${renderLicenseLink(data.license)})

  ## Description
  ${data.description}

  ## Table of Contents
  - Description
  - Installation
  - Usage


`;
}

module.exports = generateMarkdown;
