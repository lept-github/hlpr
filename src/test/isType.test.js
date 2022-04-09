const { isType } = require('../index');

describe('isType', () => {
  test('should return type', () => {
    expect(isType([])).toBe('array');
    expect(isType([{}, {}])).toBe('array');
    expect(isType([1,2,3])).toBe('array');
    expect(isType({})).toBe('object');
    expect(isType({test:123})).toBe('object');
    expect(isType('')).toBe('string');
    expect(isType('{"here":"test", "foo":[ "bar", 123 ]}')).toBe('string');
    expect(isType('test')).toBe('string');
    expect(isType(new Date())).toBe('date');
    expect(isType(()=>{})).toBe('function');
    expect(isType(function(){})).toBe('function');
    expect(isType(-1)).toBe('number');
    expect(isType(0)).toBe('number');
    expect(isType(1)).toBe('number');
    expect(isType(1.1)).toBe('number');
    expect(isType(true)).toBe('boolean');
    expect(isType(false)).toBe('boolean');
  });
  test('should NOT return type', () => {
    expect(isType(null)).toBe('');
    expect(isType(undefined)).toBe('');
  });
});