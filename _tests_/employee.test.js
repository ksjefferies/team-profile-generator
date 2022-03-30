const Employee = require('../lib/Employee');

test('Can instantiate Employee instance', () => {
    const e = new Employee();
    expect(typeof (e)).toBe("object");
});

test('Can set name via constructor arguements', () => {
    const e = new Employee('Joe Bob');
    expect(e.name).toEqual(expect.any(String));
});

test('Can set ID via constructor arguements', () => {
    const e = new Employee('', 7);
    expect(e.id).toEqual(expect.any(Number));
});

test('Can set email via constructor arguements', () => {
    const e = new Employee('', 7, 'JoeBob@mail.com');
    expect(e.email).toEqual(expect.any(String));
});

test('Gets name from getName()', () => {
    const e = new Employee('');
    expect(e.getName()).toEqual(expect.any(String));
});

test('Gets ID from getId()', () => {
    const e = new Employee('', 7);
    expect(e.getId()).toEqual(expect.any(Number));
});

test('Gets email from getEmail()', () => {
    const e = new Employee('', 7, 'SallyJoe@mail.com');
    expect(e.getEmail()).toEqual(expect.any(String));
});

test('Gets role from getRole()', () => {
    const e = new Employee();
    expect(e.getRole()).toEqual(expect.any(String));
});