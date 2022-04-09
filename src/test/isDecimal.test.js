const { isDecimal } = require('../index');

describe('isDecimal', () => {
  test('should be true', () => {
    expect(isDecimal(-0.001)).toBe(true);
    expect(isDecimal(-0.1)).toBe(true);
    expect(isDecimal(1.1)).toBe(true);
    expect(isDecimal(11.11)).toBe(true);
    expect(isDecimal(111.111)).toBe(true);
  });
  test('should be false', () => {
    expect(isDecimal(false)).toBe(false);
    expect(isDecimal('')).toBe(false);
    expect(isDecimal(123)).toBe(false);
    expect(isDecimal([])).toBe(false);
    expect(isDecimal({})).toBe(false);
    expect(isDecimal(null)).toBe(false);
    expect(isDecimal(undefined)).toBe(false);
    expect(isDecimal(()=>{})).toBe(false);
  });
});