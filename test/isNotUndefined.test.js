const { isNotUndefined } = require('../index');

describe('isNotUndefined', () => {
  test('should be true', () => {
    expect(isNotUndefined([])).toBe(true);
    expect(isNotUndefined({})).toBe(true);
    expect(isNotUndefined('')).toBe(true);
    expect(isNotUndefined([1,2,3])).toBe(true);
    expect(isNotUndefined(true)).toBe(true);
    expect(isNotUndefined(false)).toBe(true);
    expect(isNotUndefined(-1)).toBe(true);
    expect(isNotUndefined(0)).toBe(true);
    expect(isNotUndefined(1)).toBe(true);
    expect(isNotUndefined(1.1)).toBe(true);
    expect(isNotUndefined(()=>{})).toBe(true);
    expect(isNotUndefined(function(){})).toBe(true);
    expect(isNotUndefined({test:123})).toBe(true);
    expect(isNotUndefined('test')).toBe(true);
    expect(isNotUndefined('undefined')).toBe(true);
    expect(isNotUndefined(new Date())).toBe(true);
    expect(isNotUndefined(null)).toBe(true);
  });
  test('should be false', () => {
    expect(isNotUndefined(undefined)).toBe(false);
  });
});