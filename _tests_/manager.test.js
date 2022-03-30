const Manager = require('../lib/Manager');

test('Can instantiate Manager instance', () => {
    const e = new Manager({});
    expect(typeof (e)).toBe("object");
});

test('Can set name via constructor arguements', () => {
    const e = new Manager({name: ""});
    expect(e.name).toEqual(expect.any(String));
});

test('Can set ID via constructor arguements', () => {
    const e = new Manager({id: 7});
    expect(e.id).toEqual(expect.any(Number));
});

test('Can set email via constructor arguements', () => {
    const e = new Manager({email: ''});
    expect(e.email).toEqual(expect.any(String));
});

test('Can set office Number via constructor arguements', () => {
    const e = new Manager({officeNumber: 7});
    expect(e.officeNumber).toEqual(expect.any(Number));
});

test('Gets name from getName()', () => {
    const e = new Manager({name: 'Sally Joe'});
    expect(e.getName()).toEqual(expect.any(String));
});

test('Gets ID from getId()', () => {
    const e = new Manager({id: 7});
    expect(e.getId()).toEqual(expect.any(Number));
});

test('Gets email from getEmail()', () => {
    const e = new Manager({email: 'SallyJoe@mail.com'});
    expect(e.getEmail()).toEqual(expect.any(String));
});

test('Gets officeNumber from getOfficeNumber()', () => {
    const e = new Manager({officeNumber: 2304});
    expect(e.getOfficeNumber()).toEqual(expect.any(Number));
});

test('Gets role from getRole()', () => {
    const e = new Manager({});
    expect(e.getRole()).toEqual(expect.any(String));
});