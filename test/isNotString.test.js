const { isNotString } = require('../index');

describe('isNotString', () => {
  test('should be true', () => {
    expect(isNotString('')).toBe(true);
    expect(isNotString(123)).toBe(true);
    expect(isNotString([])).toBe(true);
    expect(isNotString({})).toBe(true);
    expect(isNotString(null)).toBe(true);
  });
  test('should be false', () => {
    expect(isNotString('test')).toBe(false);
  });
  test('should be true - none strict', () => {
    expect(isNotString(123, false)).toBe(true);
    expect(isNotString([], false)).toBe(true);
    expect(isNotString({}, false)).toBe(true);
    expect(isNotString(null, false)).toBe(true);
  });
  test('should be false - none strict', () => {
    expect(isNotString('test', false)).toBe(false);
  });
});