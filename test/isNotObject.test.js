const { isNotObject } = require('../index');

describe('isNotObject', () => {
  test('should be true', () => {
    expect(isNotObject([])).toBe(true);
    expect(isNotObject({})).toBe(true);
    expect(isNotObject('')).toBe(true);
    expect(isNotObject('{}')).toBe(true);
    expect(isNotObject(123)).toBe(true);
    expect(isNotObject(new Date())).toBe(true);
    expect(isNotObject(null)).toBe(true);
    expect(isNotObject(undefined)).toBe(true);
    expect(isNotObject(function(){})).toBe(true);
  });
  test('should be false', () => {
    expect(isNotObject({test1:123, test2:()=>{}, test3:'test3'})).toBe(false);
  });
  test('should be true - non strict', () => {
    expect(isNotObject([], false)).toBe(true);
    expect(isNotObject('', false)).toBe(true);
    expect(isNotObject('{}', false)).toBe(true);
    expect(isNotObject(123, false)).toBe(true);
    expect(isNotObject(new Date(), false)).toBe(true);
    expect(isNotObject(()=>{}, false)).toBe(true);
    expect(isNotObject(null, false)).toBe(true);
    expect(isNotObject(undefined, false)).toBe(true);
    expect(isNotObject(function(){}, false)).toBe(true);
  });
  test('should be false - non strict', () => {
    expect(isNotObject({test1:123, test2:()=>{}, test3:'test3'}, false)).toBe(false);
    expect(isNotObject({}, false)).toBe(false);
  });
});