const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(gitHub) {  // gitHub username
        this.gitHub = gitHub;

    }
    getGithub();
    getRole() {
        // overridden to return 'engineer'
    }

};