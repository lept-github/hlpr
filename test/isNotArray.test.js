const { isNotArray } = require('../index');

describe('isNotArray', () => {
  test('should be true', () => {
    expect(isNotArray([])).toBe(true);
    expect(isNotArray({})).toBe(true);
    expect(isNotArray('')).toBe(true);
    expect(isNotArray(123)).toBe(true);
    expect(isNotArray(new Date())).toBe(true);
    expect(isNotArray(null)).toBe(true);
    expect(isNotArray(undefined)).toBe(true);
    expect(isNotArray(()=>{})).toBe(true);
  });
  test('should be false', () => {
    expect(isNotArray([1,2,3])).toBe(false);
    expect(isNotArray([1,{},'test'])).toBe(false);
  });
  test('should be true - non strict', () => {
    expect(isNotArray({}, false)).toBe(true);
    expect(isNotArray('', false)).toBe(true);
    expect(isNotArray(123, false)).toBe(true);
    expect(isNotArray(new Date(), false)).toBe(true);
    expect(isNotArray(null, false)).toBe(true);
    expect(isNotArray(undefined, false)).toBe(true);
    expect(isNotArray(()=>{}, false)).toBe(true);
  });
  test('should be false - non strict', () => {
    expect(isNotArray([1,2,3], false)).toBe(false);
    expect(isNotArray([1,{},'test'], false)).toBe(false);
    expect(isNotArray([], false)).toBe(false);
  });
});