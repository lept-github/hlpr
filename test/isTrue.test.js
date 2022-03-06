const { isTrue } = require('../index');

describe('isString', () => {
  test('should be true', () => {
    expect(isTrue(true)).toBe(true);
  });
  test('should be false', () => {
    expect(isTrue(false)).toBe(false);
    expect(isTrue('')).toBe(false);
    expect(isTrue(123)).toBe(false);
    expect(isTrue([])).toBe(false);
    expect(isTrue({})).toBe(false);
    expect(isTrue(null)).toBe(false);
  });
});