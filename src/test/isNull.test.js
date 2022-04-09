const { isNull } = require('../index');

describe('isNull', () => {
  test('should be true', () => {
    expect(isNull(null)).toBe(true);
  });
  test('should be false', () => {
    expect(isNull([])).toBe(false);
    expect(isNull({})).toBe(false);
    expect(isNull('')).toBe(false);
    expect(isNull([1,2,3])).toBe(false);
    expect(isNull(true)).toBe(false);
    expect(isNull(false)).toBe(false);
    expect(isNull(-1)).toBe(false);
    expect(isNull(0)).toBe(false);
    expect(isNull(1)).toBe(false);
    expect(isNull(1.1)).toBe(false);
    expect(isNull(()=>{})).toBe(false);
    expect(isNull(function(){})).toBe(false);
    expect(isNull({test:123})).toBe(false);
    expect(isNull('test')).toBe(false);
    expect(isNull('null')).toBe(false);
    expect(isNull(new Date())).toBe(false);
    expect(isNull(undefined)).toBe(false);
  });
});