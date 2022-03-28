const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');

const html = '';
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
        name: 'extension',
        message: 'Please enter your office extension: ',
    }],
    engineer: [{
        type: 'input',
        message: 'What is the employees GitHub username? ',
        name: 'github',
    }],
    intern: [{
        type: 'input',
        name: 'school',
        message: 'Please enter the name of your school: ',
    }]
}

const prompt = async (employeeType) => {
    let response = await inquirer.prompt([...questions.employee, ...questions[employeeType]]);
    team.push({ ...response, type: employeeType });

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