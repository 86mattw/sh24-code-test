import * as validation from '../src/utils/validation';

describe('the customer name validation', () => {
  it('returns false for input less than 2 characters', () => {
    const isValid = validation.isValidName('a');

    expect(isValid).toBe(false);
  });

  it('returns false for input over 25 characters', () => {
    const isValid = validation.isValidName('aaaaaaaaaaaaaaaaaaaaaaaaaa');

    expect(isValid).toBe(false);
  });

  it('returns true for input with 2 and 25 characters', () => {
    const isValid = validation.isValidName('test');

    expect(isValid).toBe(true);
  });

  it('returns true for input with spaces', () => {
    const isValid = validation.isValidName('test name');

    expect(isValid).toBe(true);
  });

  it('returns false for input with special characters', () => {
    const isValid = validation.isValidName('test n@me');

    expect(isValid).toBe(false);
  });

  it('returns false for input with numbers', () => {
    const isValid = validation.isValidName('test nam3');

    expect(isValid).toBe(false);
  });
});

describe('the customer email validation', () => {
  test.each([
    ['aaa', false],
    ['123', false],
    ['@@@', false],
    ['aaa@', false],
    ['aaa@@123', false],
    ['aaa@test', false],
    ['aaa@test.com', true],
    ['aaa@test.co.uk', true],
    ['aaa_aaa@test.com', true],
    ['aaa_aaa@test.co.uk', true],
    ['123@test.com', true],
    ['123@test.co.uk', true],
    ['aaa@test.org', true],
    ['aaa@test.co.de', true],
  ])('"%s" should return %s', (email, expected) => {
    const isValid = validation.isValidEmail(email);

    expect(isValid).toBe(expected);
  });
});

describe('the service validation', () => {
  it('returns false if empty', () => {
    const isValid = validation.isValidService('');

    expect(isValid).toBe(false);
  });

  it('returns true if not empty', () => {
    const isValid = validation.isValidService('contraception');

    expect(isValid).toBe(true);
  });
});
