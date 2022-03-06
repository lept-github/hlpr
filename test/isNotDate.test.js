const { isNotDate } = require('../index');

describe('isNotDate', () => {
  test('should be true', () => {
    expect(isNotDate('test@@test.com')).toBe(true);
    expect(isNotDate(2)).toBe(true);
    expect(isNotDate(4)).toBe(true);
    expect(isNotDate(6)).toBe(true);
    expect(isNotDate(true)).toBe(true);
    expect(isNotDate(false)).toBe(true);
    expect(isNotDate('')).toBe(true);
    expect(isNotDate([])).toBe(true);
    expect(isNotDate({})).toBe(true);
    expect(isNotDate(null)).toBe(true);
  });
  test('should be false', () => {
    expect(isNotDate(new Date())).toBe(false);
  });
});