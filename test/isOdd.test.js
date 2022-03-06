const { isOdd } = require('../index');

describe('isOdd', () => {
  test('should be true', () => {
    expect(isOdd(1)).toBe(true);
    expect(isOdd(3)).toBe(true);
    expect(isOdd(5)).toBe(true);
  });
  test('should be false', () => {
    expect(isOdd(2)).toBe(false);
    expect(isOdd(4)).toBe(false);
    expect(isOdd(6)).toBe(false);
    expect(isOdd(true)).toBe(false);
    expect(isOdd(false)).toBe(false);
    expect(isOdd('')).toBe(false);
    expect(isOdd([])).toBe(false);
    expect(isOdd({})).toBe(false);
    expect(isOdd(null)).toBe(false);
  });
});