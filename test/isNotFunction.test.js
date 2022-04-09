const { isNotFunction } = require('../src/index');

describe('isNotFunction', () => {
  test('should be true', () => {
    expect(isNotFunction('test@@test.com')).toBe(true);
    expect(isNotFunction(2)).toBe(true);
    expect(isNotFunction(4)).toBe(true);
    expect(isNotFunction(6)).toBe(true);
    expect(isNotFunction(true)).toBe(true);
    expect(isNotFunction(false)).toBe(true);
    expect(isNotFunction('')).toBe(true);
    expect(isNotFunction([])).toBe(true);
    expect(isNotFunction({})).toBe(true);
    expect(isNotFunction(null)).toBe(true);
    expect(isNotFunction(undefined)).toBe(true);
    expect(isNotFunction(new Date())).toBe(true);
  });
  test('should be false', () => {
    const myFunction = () => {};
    expect(isNotFunction(myFunction)).toBe(false);
    expect(isNotFunction(() => {})).toBe(false);
    expect(isNotFunction(function(){})).toBe(false);
  });
});