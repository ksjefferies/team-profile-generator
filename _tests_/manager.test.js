const Manager = require('../lib/Manager');

test('test instantiate Manager instance', () => {
    const testManager = new Manager({});

    expect(typeof (testManager)).toBe('object');
});

describe('Manager', () => {
    const name = 'Habib Rosanni';
    const id = 28;
    const email = 'HabibRosanni@mail.com';
    const officeNumber = 3434;
    const role = 'Manager';

    const testManager = new Manager({ name, id, email, officeNumber });

    it('should return Manager name', () => {
        expect(testManager.getName()).toEqual(name);
    });

    it('should return Manager id', () => {
        expect(testManager.getId()).toEqual(id);
    });

    it('should return Manager email', () => {
        expect(testManager.getEmail()).toEqual(email);
    });

    it('should return Manager Office Number', () => {
        expect(testManager.getOfficeNumber()).toEqual(officeNumber);
    });

    it('should return Manager role', () => {
        expect(testManager.getRole()).toEqual(role);
    });
});