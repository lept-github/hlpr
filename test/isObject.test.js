const { isObject } = require('../index');

describe('isObject', () => {
  test('should be true', () => {
    expect(isObject({test1:123, test2:()=>{}, test3:'test3'})).toBe(true);
  });
  test('should be false', () => {
    expect(isObject([])).toBe(false);
    expect(isObject({})).toBe(false);
    expect(isObject('')).toBe(false);
    expect(isObject(123)).toBe(false);
    expect(isObject(new Date())).toBe(false);
    expect(isObject(null)).toBe(false);
    expect(isObject(undefined)).toBe(false);
    expect(isObject(()=>{})).toBe(false);
  });
  test('should be true - non strict', () => {
    expect(isObject({test1:123, test2:()=>{}, test3:'test3'}, false)).toBe(true);
    expect(isObject({}, false)).toBe(true);
  });
  test('should be false - non strict', () => {
    expect(isObject([], false)).toBe(false);
    expect(isObject('', false)).toBe(false);
    expect(isObject(123, false)).toBe(false);
    expect(isObject(new Date(), false)).toBe(false);
    expect(isObject(null, false)).toBe(false);
    expect(isObject(undefined, false)).toBe(false);
    expect(isObject(()=>{}, false)).toBe(false);
  });
});