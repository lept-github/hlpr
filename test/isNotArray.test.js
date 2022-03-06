const { isNotArray } = require('../index');

describe('isNotArray', () => {
  test('should be true', () => {
    expect(isNotArray([])).toBe(true);
    expect(isNotArray({})).toBe(true);
    expect(isNotArray('')).toBe(true);
    expect(isNotArray(123)).toBe(true);
    expect(isNotArray(new Date())).toBe(true);
  });
  test('should be false', () => {
    expect(isNotArray([1,2,3])).toBe(false);
    expect(isNotArray([1,{},'test'])).toBe(false);
  });
  test('should be true - none strict', () => {
    expect(isNotArray({}, false)).toBe(true);
    expect(isNotArray('', false)).toBe(true);
    expect(isNotArray(123, false)).toBe(true);
    expect(isNotArray(new Date(), false)).toBe(true);
  });
  test('should be false - none strict', () => {
    expect(isNotArray([1,2,3], false)).toBe(false);
    expect(isNotArray([1,{},'test'], false)).toBe(false);
    expect(isNotArray([], false)).toBe(false);
  });
});