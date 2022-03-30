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

prompt('manager').then(() => fs.writeFile('./dist/index.html', html(), () => console.log('Finished') ) )

const pictures = {
    manager: '',
    engineer: '',
    intern: ''
}


let html = () => (`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <link rel="stylesheet" href="./style.css" />
    <title>Team Profile Generator</title>
</head>

<body>

    <header>
        <h1></h1>
    </header>

    <div class="container">
        <div class="row">
            ${team.map((member) => (
    `<div class="col-md-3">
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
                            <li>Role: ${member.getRole()}</li>
                            <li>ID: ${member.getId()}</li>
                            <li>Email: ${member.getEmail()}</li>
                            ${
                            member.getOfficeNumber != undefined 
                                ?  `<li>Office Number: ${member.getOfficeNumber()}</li>`
                                : "" ||
                            
                            member.getGithub != undefined
                                ? `<li> GitHub Username: ${member.getGithub()}</li>`
                            : "" ||
                            
                            member.getSchool != undefined
                            ? `<li> School: ${member.getSchool()}</li>`
                            : ""                            
                        }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>     `
)).join('')}
        </div>
    </div>

</body>

</html>
`);