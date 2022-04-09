const { isUndefined } = require('../index');

describe('isUndefined', () => {
  test('should be true', () => {
    expect(isUndefined(undefined)).toBe(true);
  });
  test('should be false', () => {
    expect(isUndefined([])).toBe(false);
    expect(isUndefined([{}, {}])).toBe(false);
    expect(isUndefined({})).toBe(false);
    expect(isUndefined('')).toBe(false);
    expect(isUndefined('test')).toBe(false);
    expect(isUndefined('undefined')).toBe(false);
    expect(isUndefined([1,2,3])).toBe(false);
    expect(isUndefined(true)).toBe(false);
    expect(isUndefined(false)).toBe(false);
    expect(isUndefined(-1)).toBe(false);
    expect(isUndefined(0)).toBe(false);
    expect(isUndefined(1)).toBe(false);
    expect(isUndefined(1.1)).toBe(false);
    expect(isUndefined(()=>{})).toBe(false);
    expect(isUndefined(function(){})).toBe(false);
    expect(isUndefined({test:123})).toBe(false);
    expect(isUndefined(new Date())).toBe(false);
    expect(isUndefined(null)).toBe(false);
  });
});