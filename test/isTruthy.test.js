const { isTruthy } = require('../src/index');

describe('isFalsy', () => {
  test('should be true', () => {
    expect(isTruthy(123)).toBe(true);
    expect(isTruthy(123.456)).toBe(true);
    expect(isTruthy('test')).toBe(true);
    expect(isTruthy(()=>{})).toBe(true);
    expect(isTruthy({})).toBe(true);
    expect(isTruthy([])).toBe(true);
    expect(isTruthy(true)).toBe(true);
    expect(isTruthy(new Date())).toBe(true);
  });
  test('should be false', () => {
    expect(isTruthy(false)).toBe(false);
    expect(isTruthy('')).toBe(false);
    expect(isTruthy(null)).toBe(false);
    expect(isTruthy(undefined)).toBe(false);
  });
});