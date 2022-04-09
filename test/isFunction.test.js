const { isFunction } = require('../src/index');

describe('isFunction', () => {
  test('should be true', () => {
    const myFunction = () => {};
    expect(isFunction(myFunction)).toBe(true);
    expect(isFunction(() => {})).toBe(true);
    expect(isFunction(function(){})).toBe(true);
  });
  test('should be false', () => {
    expect(isFunction('test@@test.com')).toBe(false);
    expect(isFunction(2)).toBe(false);
    expect(isFunction(4)).toBe(false);
    expect(isFunction(6)).toBe(false);
    expect(isFunction(true)).toBe(false);
    expect(isFunction(false)).toBe(false);
    expect(isFunction('')).toBe(false);
    expect(isFunction('function(){}')).toBe(false);
    expect(isFunction([])).toBe(false);
    expect(isFunction({})).toBe(false);
    expect(isFunction(null)).toBe(false);
    expect(isFunction(undefined)).toBe(false);
  });
});