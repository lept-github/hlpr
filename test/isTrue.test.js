const { isTrue } = require('../src/index');

describe('isTrue', () => {
  test('should be true', () => {
    expect(isTrue(true)).toBe(true);
  });
  test('should be false', () => {
    expect(isTrue(false)).toBe(false);
    expect(isTrue('')).toBe(false);
    expect(isTrue('true')).toBe(false);
    expect(isTrue(123)).toBe(false);
    expect(isTrue(1)).toBe(false);
    expect(isTrue([])).toBe(false);
    expect(isTrue({})).toBe(false);
    expect(isTrue(null)).toBe(false);
    expect(isTrue(undefined)).toBe(false);
    expect(isTrue(new Date())).toBe(false);
    expect(isTrue(()=>{})).toBe(false);
  });
});