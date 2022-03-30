const Intern = require('../lib/Intern');

test('test instantiate Intern instance', () => {
    const testIntern = new Intern({});

    expect(typeof (testIntern)).toBe('object');
});

describe('Intern', () => {
    const name = 'Habib Rosanni';
    const id = 28;
    const email = 'HabibRosanni@mail.com';
    const school = 'Northeastern';
    const role = 'Intern';

    const testIntern = new Intern({ name, id, email, school });

    it('should return Intern name', () => {
        expect(testIntern.getName()).toEqual(name);
    });

    it('should return Intern id', () => {
        expect(testIntern.getId()).toEqual(id);
    });

    it('should return Intern email', () => {
        expect(testIntern.getEmail()).toEqual(email);
    });

    it('should return Intern School', () => {
        expect(testIntern.getSchool()).toEqual(school);
    });

    it('should return Intern role', () => {
        expect(testIntern.getRole()).toEqual(role);
    });
});