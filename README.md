# Team Profile Generator

-------
## Table of Content

- [Description](#description)
- [Objectives](#objectives)
- [Installation](#installation)
- [Usage Information](#usage)
- [Images and Media](#media-and-images)
- [GitHub Repository](#github-repository)
- [Author](#author)  
- [Contributors](#contributors)
- [Technologies Used](#technologies-used) 
- [License](#license)

-------
## Description:  

The Team Profile Generator (TPG) is a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. Testing is key to making code maintainable, so the application contains the ability to perform a unit test for every part of the code and ensure that it passes each test.

-------
## Objectives:
```

- TPG is a command-line application that accepts user input to enter all data.
- When the manager starts the information, they will need to answer the default questions:
    * Name (default)
    * Employee ID (default)
    * Email Address (default)
    * Office Number (Manager question only)
- After answering the previous questions, the manager is given the option to
    * Add an Engineer
    * Add an Intern
    * Finish Building Team
- Selecting Engineer will require all the original default questions plus this additional:
    * GitHub username (Engineer only)
- Selecting Intern will require the default questions plus this additional
    * School name (Intern only)
- Selecting Finish Building Team
    * Will push all data and generate a HTML and exit application
    
```
-----
## Installation

1. Clone the TPG repository off of GitHub. (Link to this repository is below)
2. Install dependencies needed for this application:
    1. right click on the team-profile-generator folder within VS Code and select 'Open in Integrated Terminal'
    2. enter 'npm install'
        - To confirm the install was successful, enter npm test and wait for the testing to complete.  Green means you're good to proceed.

-----
## Usage:

1. Start the integrated terminal within the app folder and enter 'node index.js' and press enter.
2. Follow all the prompts.
3. Once you are finished, you will find the generated HTML file within the 'dist' folder.

-----
## Media and Images:

Test Results:
![Test Results](./assets/images/test-results.jpg)

Generated HTML:
![Screenshot of Team Profile Generator HTML](./assets/images/team-profile-html.jpg)

Video of Team Profile Generator:

- [Media of Team Profile Generator Usage](https://user-images.githubusercontent.com/97249322/160746972-bc2055b5-18e1-4f4b-8be8-ddff1abeca5a.mp4)

----
## Github Repository:

- [Github Repository for Team Profile Generator](https://github.com/ksjefferies/team-profile-generator)

## Author:

- [Kelly Jefferies](https://github.com/ksjefferies)

## Technologies Used:

![html](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![css3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)  
![node](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)

## License:

[![License](https://img.shields.io/badge/License-MIT%20License-Green)](http://choosealicense.com/licenses/mit/)