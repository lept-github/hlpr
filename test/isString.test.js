const { isString } = require('../index');

describe('isString', () => {
  test('should be true', () => {
    expect(isString('test')).toBe(true);
  });
  test('should be false', () => {
    expect(isString('')).toBe(false);
    expect(isString(123)).toBe(false);
    expect(isString([])).toBe(false);
    expect(isString({})).toBe(false);
    expect(isString(null)).toBe(false);
  });
  test('should be true - none strict', () => {
    expect(isString('test', false)).toBe(true);
    expect(isString('', false)).toBe(true);
  });
  test('should be false - none strict', () => {
    expect(isString(123, false)).toBe(false);
    expect(isString([], false)).toBe(false);
    expect(isString({}, false)).toBe(false);
    expect(isString(null)).toBe(false);
  });
});