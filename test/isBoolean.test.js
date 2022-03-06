const { isBoolean } = require('../index');

describe('isString', () => {
  test('should be true', () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
  });
  test('should be false', () => {
    expect(isBoolean('true')).toBe(false);
    expect(isBoolean('false')).toBe(false);
    expect(isBoolean('0')).toBe(false);
    expect(isBoolean('1')).toBe(false);
    expect(isBoolean(0)).toBe(false);
    expect(isBoolean(1)).toBe(false);
    expect(isBoolean('')).toBe(false);
    expect(isBoolean(123)).toBe(false);
    expect(isBoolean([])).toBe(false);
    expect(isBoolean({})).toBe(false);
    expect(isBoolean(null)).toBe(false);
  });
});