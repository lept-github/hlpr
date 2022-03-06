const { isFalse } = require('../index');

describe('isString', () => {
  test('should be true', () => {
    expect(isFalse(false)).toBe(true);
  });
  test('should be false', () => {
    expect(isFalse(true)).toBe(false);
    expect(isFalse('')).toBe(false);
    expect(isFalse(123)).toBe(false);
    expect(isFalse([])).toBe(false);
    expect(isFalse({})).toBe(false);
    expect(isFalse(null)).toBe(false);
  });
});