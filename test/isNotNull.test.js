const { isNotNull } = require('../index');

describe('isNotNull', () => {
  test('should be true', () => {
    expect(isNotNull([])).toBe(true);
    expect(isNotNull({})).toBe(true);
    expect(isNotNull('')).toBe(true);
    expect(isNotNull([1,2,3])).toBe(true);
    expect(isNotNull(true)).toBe(true);
    expect(isNotNull(false)).toBe(true);
    expect(isNotNull(-1)).toBe(true);
    expect(isNotNull(0)).toBe(true);
    expect(isNotNull(1)).toBe(true);
    expect(isNotNull(1.1)).toBe(true);
    expect(isNotNull(()=>{})).toBe(true);
    expect(isNotNull(function(){})).toBe(true);
    expect(isNotNull({test:123})).toBe(true);
    expect(isNotNull('test')).toBe(true);
    expect(isNotNull(new Date())).toBe(true);
    expect(isNotNull(undefined)).toBe(true);
  });
  test('should be false', () => {
    expect(isNotNull(null)).toBe(false);
  });
});