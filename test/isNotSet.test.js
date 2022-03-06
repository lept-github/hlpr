const { isNotSet } = require('../index');

describe('isNotSet', () => {
  test('should be true', () => {
    expect(isNotSet([])).toBe(true);
    expect(isNotSet({})).toBe(true);
    expect(isNotSet('')).toBe(true);
    expect(isNotSet(null)).toBe(true);
    expect(isNotSet(undefined)).toBe(true);
  });
  test('should be false', () => {
    expect(isNotSet([1,2,3])).toBe(false);
    expect(isNotSet(true)).toBe(false);
    expect(isNotSet(false)).toBe(false);
    expect(isNotSet(-1)).toBe(false);
    expect(isNotSet(0)).toBe(false);
    expect(isNotSet(1)).toBe(false);
    expect(isNotSet(1.1)).toBe(false);
    expect(isNotSet(()=>{})).toBe(false);
    expect(isNotSet(function(){})).toBe(false);
    expect(isNotSet(()=>{})).toBe(false);
    expect(isNotSet({test:123})).toBe(false);
    expect(isNotSet('test')).toBe(false);
    expect(isNotSet(new Date())).toBe(false);
  });
});