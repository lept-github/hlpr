const { isSet } = require('../index');

describe('isSet', () => {
  test('should be true', () => {
    expect(isSet([1,2,3])).toBe(true);
    expect(isSet(true)).toBe(true);
    expect(isSet(false)).toBe(true);
    expect(isSet(-1)).toBe(true);
    expect(isSet(0)).toBe(true);
    expect(isSet(1)).toBe(true);
    expect(isSet(1.1)).toBe(true);
    expect(isSet(()=>{})).toBe(true);
    expect(isSet(function(){})).toBe(true);
    expect(isSet({test:123})).toBe(true);
    expect(isSet('test')).toBe(true);
    expect(isSet('true')).toBe(true);
    expect(isSet('false')).toBe(true);
    expect(isSet(new Date())).toBe(true);
  });
  test('should be false', () => {
    expect(isSet([])).toBe(false);
    expect(isSet({})).toBe(false);
    expect(isSet('')).toBe(false);
    expect(isSet(null)).toBe(false);
    expect(isSet(undefined)).toBe(false);
  });
});