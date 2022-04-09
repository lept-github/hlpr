const { isEmail } = require('../src/index');

describe('isEmail', () => {
  test('should be true', () => {
    expect(isEmail('test@test.com')).toBe(true);
  });
  test('should be false', () => {
    expect(isEmail('testtest.com')).toBe(false);
    expect(isEmail('test@testcom')).toBe(false);
    expect(isEmail('test@test.ccomm')).toBe(false);
    expect(isEmail('test@test.com.net.test1')).toBe(false);
    expect(isEmail('test@@test.com')).toBe(false);
    expect(isEmail(2)).toBe(false);
    expect(isEmail(4)).toBe(false);
    expect(isEmail(6)).toBe(false);
    expect(isEmail(true)).toBe(false);
    expect(isEmail(false)).toBe(false);
    expect(isEmail('')).toBe(false);
    expect(isEmail([])).toBe(false);
    expect(isEmail({})).toBe(false);
    expect(isEmail(null)).toBe(false);
    expect(isEmail(undefined)).toBe(false);
    expect(isEmail(()=>{})).toBe(false);
  });
});