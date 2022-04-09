const { isFalse } = require('../index');

describe('isFalse', () => {
  test('should be true', () => {
    expect(isFalse(false)).toBe(true);
  });
  test('should be false', () => {
    expect(isFalse(true)).toBe(false);
    expect(isFalse('')).toBe(false);
    expect(isFalse('false')).toBe(false);
    expect(isFalse(123)).toBe(false);
    expect(isFalse([])).toBe(false);
    expect(isFalse({})).toBe(false);
    expect(isFalse(null)).toBe(false);
    expect(isFalse(undefined)).toBe(false);
    expect(isFalse(()=>{})).toBe(false);
    expect(isFalse(new Date())).toBe(false);
  });
});