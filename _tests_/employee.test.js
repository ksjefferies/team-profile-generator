const Employee = require('../lib/Employee');

describe('getters', () => {
    const name = 'John Wilson';
    const id = 25;
    const email = 'JohnWilson@mail.com';
    const role = 'Employee';

    const testEmployee = new Employee(name, id, email);

    it('should return Employee name', () => {
        expect(testEmployee.getName()).toEqual(name);
    });

    it('should return Employee id', () => {
        expect(testEmployee.getId()).toEqual(id);
    });

    it('should return Employee email', () => {
        expect(testEmployee.getEmail()).toEqual(email);
    });

    it('should return Employee role', () => {
        expect(testEmployee.getRole()).toEqual(role);
    });
});