const { isArray } = require('../index');

describe('isArray', () => {
  test('should be true', () => {
    expect(isArray([1,2,3])).toBe(true);
    expect(isArray([1,{},'test'])).toBe(true);
  });
  test('should be false', () => {
    expect(isArray([])).toBe(false);
    expect(isArray({})).toBe(false);
    expect(isArray('')).toBe(false);
    expect(isArray(123)).toBe(false);
    expect(isArray(new Date())).toBe(false);
  });
  test('should be true - non strict', () => {
    expect(isArray([1,2,3], false)).toBe(true);
    expect(isArray([1,{},'test'], false)).toBe(true);
    expect(isArray([], false)).toBe(true);
  });
  test('should be false - non strict', () => {
    expect(isArray({}, false)).toBe(false);
    expect(isArray('', false)).toBe(false);
    expect(isArray(123, false)).toBe(false);
    expect(isArray(new Date(), false)).toBe(false);
  });
});