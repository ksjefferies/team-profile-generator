const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');

const Manager = require('./lib/manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let team = [];

const questions = {
    employee: [{
        type: 'input',
        message: 'What is the employee name? ',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the employee ID? ',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is the employees email address? ',
        name: 'email',
    }],
    manager: [{
        type: 'input',
        name: 'officeNumber',
        message: 'Please enter your office extension: ',
    }],
    engineer: [{
        type: 'input',
        message: 'What is the employees GitHub username? ',
        name: 'gitHub',
    }],
    intern: [{
        type: 'input',
        name: 'school',
        message: 'Please enter the name of your school: ',
    }]
}

const prompt = async (employeeType) => {
    let user = '';
    let response = await inquirer.prompt([...questions.employee, ...questions[employeeType]]);
    switch (employeeType) {
        case 'manager':
            user = new Manager(response);
            break;
        case 'engineer':
            user = new Engineer(response);
            break;
        case 'intern':
            user = new Intern(response);
            break;
        default:
            return;
    }
    team.push(user);

    const addRole = await inquirer.prompt([{
        type: 'list',
        name: 'role',
        message: 'Would you like to enter another role or build your team? ',
        choices: ['engineer', 'intern', 'build team'],
    }]);

    if (addRole.role == 'build team') {
        // console.log(team)
        return;
    } else {
        await prompt(addRole.role);
    }
}

prompt('manager');

let html = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <link rel="stylesheet" href="./dist/style.css" />
    <title>Team Profile Generator</title>
</head>

<body>

    <header>
        <h1></h1>
    </header>

    <div class="container">
        <div class="row">
            ${team.map((member) => (
    `<div class="col-md-4">
    <div class="widget-container">
        <div class="widget">
            <div class="profile-card">
                <div class="card-header">
                    <div class="header-avatar">
                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="andy">
                    </div>
                    <div class="header-name">
                    ${member.getName()}
                    </div>
                </div>
                <div class="card-body bg-warning">
                    <div class="body-description">
                        <ul>
                            <li>Roles ${member.getRole()}</li>
                            <li>ID ${member.getId()}</li>
                            <li>Email ${member.getEmail()}</li>
                            ${member.getOfficeNumber() != undefined 
                                ?  `<li>Office Number ${member.getOfficeNumber()}</li>`
                                : ""
                            }
                            ${member.getGitHub() != undefined
                                ? `<li> GitHub ${member.getGitHub()}</li>`
                            : ""
                            }
                            ${member.getSchool() != undefined
                            ? `<li> School ${member.getSchool()}</li>`
                            : ""
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>     `
))}
        </div>
    </div>

</body>

</html>
`


// process flow
/* 
1 -  Manager Registers

2 Add new user of type prompt If yes call create new user prompt. If no exit

3  Create new user prompt grabs the user type. Comparitevely looks up specific questions in an object

4. Go to 2

minimum Two functions, add new user prompt. Add person Prompt.  Store all questions in an object
let questions = {
    employee: [{...}]
    manager: [{...}]
    ... etc
}

add employee function takes a param, equal to a question object property, Merge properties of question object from function input 
    (type) => [...questions.employee, ...questions[type]]

1. addEmployeePrompt('manager')

2. addAnotherPromp() to ask if the user would like to add an employee
    if yes then if yes then prompt again for the employee type. If no exit loop. 

3. call addEmployeePrompt() with function parameter of selected employee type
    i.e addEmployeePrompt("Intern")
        
4. Call addAnotherPrompt()


*/