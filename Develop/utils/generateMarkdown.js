// TODO: Create a function to generate markdown for README


function generateMarkdown(data) {
  
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

  ##Usage 
  ${data.Instruction}

  ## Credits

  List your contributers 
  ${data.github}

  ## Badges

  ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

  Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.



  ## Contact
  
  *Github  ${data.contactGithub}
  *mail  ${data.mail}


  `;


};

  module.exports = generateMarkdown;



 


