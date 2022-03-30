const Intern = require('../lib/Intern');

test('Can instantiate Intern instance', () => {
    const e = new Intern({});
    expect(typeof (e)).toBe("object");
});

test('Can set name via constructor arguements', () => {
    const e = new Intern({ name: "" });
    expect(e.name).toEqual(expect.any(String));
});

test('Can set ID via constructor arguements', () => {
    const e = new Intern({ id: 7 });
    expect(e.id).toEqual(expect.any(Number));
});

test('Can set email via constructor arguements', () => {
    const e = new Intern({ email: '' });
    expect(e.email).toEqual(expect.any(String));
});

test('Can set school name via constructor arguements', () => {
    const e = new Intern({ school: '' });
    expect(e.school).toEqual(expect.any(String));
});

test('Gets name from getName()', () => {
    const e = new Intern({ name: 'Billy Bob' });
    expect(e.getName()).toEqual(expect.any(String));
});

test('Gets ID from getId()', () => {
    const e = new Intern({ id: 7 });
    expect(e.getId()).toEqual(expect.any(Number));
});

test('Gets email from getEmail()', () => {
    const e = new Intern({ email: 'BillyBob@mail.com' });
    expect(e.getEmail()).toEqual(expect.any(String));
});

test('Gets school name from getSchool()', () => {
    const e = new Intern({ school: '' });
    expect(e.getSchool()).toEqual(expect.any(String));
});

test('Gets role from getRole()', () => {
    const e = new Intern({});
    expect(e.getRole()).toEqual(expect.any(String));
});