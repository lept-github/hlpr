const { isEven } = require('../index');

describe('isEven', () => {
  test('should be true', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(4)).toBe(true);
    expect(isEven(6)).toBe(true);
    expect(isEven(8)).toBe(true);
  });
  test('should be false', () => {
    expect(isEven(1)).toBe(false);
    expect(isEven(3)).toBe(false);
    expect(isEven(5)).toBe(false);
    expect(isEven(true)).toBe(false);
    expect(isEven(false)).toBe(false);
    expect(isEven('')).toBe(false);
    expect(isEven(123.123)).toBe(false);
    expect(isEven([])).toBe(false);
    expect(isEven({})).toBe(false);
    expect(isEven(null)).toBe(false);
    expect(isEven(undefined)).toBe(false);
    expect(isEven(()=>{})).toBe(false);
    expect(isEven(new Date())).toBe(false);
  });
});