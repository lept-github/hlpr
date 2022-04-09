const { isInteger } = require('../index');

describe('isInteger', () => {
  test('should be true', () => {
    expect(isInteger(-1)).toBe(true);
    expect(isInteger(-11)).toBe(true);
    expect(isInteger(-111)).toBe(true);
    expect(isInteger(0)).toBe(true);
    expect(isInteger(1)).toBe(true);
    expect(isInteger(11)).toBe(true);
    expect(isInteger(111)).toBe(true);
  });
  test('should be false', () => {
    expect(isInteger(true)).toBe(false);
    expect(isInteger(false)).toBe(false);
    expect(isInteger('')).toBe(false);
    expect(isInteger('123')).toBe(false);
    expect(isInteger(123.123)).toBe(false);
    expect(isInteger([])).toBe(false);
    expect(isInteger({})).toBe(false);
    expect(isInteger(null)).toBe(false);
    expect(isInteger(undefined)).toBe(false);
    expect(isInteger(()=>{})).toBe(false);
  });
});