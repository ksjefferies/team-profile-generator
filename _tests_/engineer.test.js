const Engineer = require('../lib/Engineer');

test('Can instantiate Engineer instance', () => {
    const e = new Engineer({});
    expect(typeof (e)).toBe("object");
});

test('Can set name via constructor arguements', () => {
    const e = new Engineer({ name: "" });
    expect(e.name).toEqual(expect.any(String));
});

test('Can set ID via constructor arguements', () => {
    const e = new Engineer({ id: 7 });
    expect(e.id).toEqual(expect.any(Number));
});

test('Can set email via constructor arguements', () => {
    const e = new Engineer({ email: '' });
    expect(e.email).toEqual(expect.any(String));
});

test('Can set GitHub username via constructor arguements', () => {
    const e = new Engineer({ gitHub: '' });
    expect(e.gitHub).toEqual(expect.any(String));
});

test('Gets name from getName()', () => {
    const e = new Engineer({ name: 'Cleetus' });
    expect(e.getName()).toEqual(expect.any(String));
});

test('Gets ID from getId()', () => {
    const e = new Engineer({ id: 7 });
    expect(e.getId()).toEqual(expect.any(Number));
});

test('Gets email from getEmail()', () => {
    const e = new Engineer({ email: 'Cleetus@mail.com' });
    expect(e.getEmail()).toEqual(expect.any(String));
});

test('Gets GitHub usernam from getGitHub()', () => {
    const e = new Engineer({ gitHub: 'CleetusLee' });
    expect(e.getGithub()).toEqual(expect.any(String));
});

test('Gets role from getRole()', () => {
    const e = new Engineer({});
    expect(e.getRole()).toEqual(expect.any(String));
});