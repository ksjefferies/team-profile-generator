const Engineer = require('../lib/Engineer');

test('test instantiate Engineer instance', () => {
    const testEngineer = new Engineer({});

    expect(typeof (testEngineer)).toBe('object');
});

describe('Engineer', () => {
    const name = 'Habib Rosanni';
    const id = 28;
    const email = 'HabibRosanni@mail.com';
    const gitHub = 'hRosanni';
    const role = 'Engineer';

    const testEngineer = new Engineer({ name, id, email, gitHub });

    it('should return Engineer name', () => {
        expect(testEngineer.getName()).toEqual(name);
    });

    it('should return Engineer id', () => {
        expect(testEngineer.getId()).toEqual(id);
    });

    it('should return Engineer email', () => {
        expect(testEngineer.getEmail()).toEqual(email);
    });

    it('should return Engineer gitHub', () => {
        expect(testEngineer.getGithub()).toEqual(gitHub);
    });

    it('should return Engineer role', () => {
        expect(testEngineer.getRole()).toEqual(role);
    });
});