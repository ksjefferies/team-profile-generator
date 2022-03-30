const Employee = require('./Employee');

class Engineer extends Employee {
    // I changed this and will explain later
    constructor({name, id, email, gitHub}) {  // gitHub username
        super(name, id, email);
        this.gitHub = gitHub;
    };

    getGithub() {
        return this.gitHub;
    };
    
    getRole() {
        return 'Engineer';
    };
};

module.exports = Engineer;