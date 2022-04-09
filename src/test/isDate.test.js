const { isDate } = require('../index');

describe('isDate', () => {
  test('should be true', () => {
    expect(isDate(new Date())).toBe(true);
  });
  test('should be false', () => {
    expect(isDate('test@@test.com')).toBe(false);
    expect(isDate(2)).toBe(false);
    expect(isDate(4)).toBe(false);
    expect(isDate(6)).toBe(false);
    expect(isDate(true)).toBe(false);
    expect(isDate(false)).toBe(false);
    expect(isDate('')).toBe(false);
    expect(isDate([])).toBe(false);
    expect(isDate({})).toBe(false);
    expect(isDate(null)).toBe(false);
    expect(isDate(undefined)).toBe(false);
    expect(isDate(()=>{})).toBe(false);
  });
});