// TODO: Create a function to generate markdown for README


function generateMarkdown(data,licenseName) {
  
  return `# ${data.ProjectName}

  ## Description
  ${data.Description}

  ## Table of Contents 
    
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation 
  ${data.Installation}

  ## Usage 
  ${data.Instruction}

  ## Credits

  List your contributers 
  ${data.github}

  ## Badges (${data.license})

    ## License 
  
    ${licenseName}

  ## Contact
  
  *Github  ${data.contactGithub} <br>
  *mail  ${data.mail}


  `;


};

  module.exports = generateMarkdown;



 


