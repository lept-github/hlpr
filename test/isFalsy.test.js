const { isFalsy } = require('../src/index');

describe('isFalsy', () => {
  test('should be true', () => {
    expect(isFalsy(false)).toBe(true);
    expect(isFalsy('')).toBe(true);
    expect(isFalsy(null)).toBe(true);
    expect(isFalsy(undefined)).toBe(true);
  });
  test('should be false', () => {
    expect(isFalsy(123)).toBe(false);
    expect(isFalsy(123.456)).toBe(false);
    expect(isFalsy('test')).toBe(false);
    expect(isFalsy(()=>{})).toBe(false);
    expect(isFalsy({})).toBe(false);
    expect(isFalsy([])).toBe(false);
    expect(isFalsy(true)).toBe(false);
    expect(isFalsy(new Date())).toBe(false);
  });
});