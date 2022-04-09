const { isNotString } = require('../src/index');

describe('isNotString', () => {
  test('should be true', () => {
    expect(isNotString('')).toBe(true);
    expect(isNotString(123)).toBe(true);
    expect(isNotString([])).toBe(true);
    expect(isNotString({})).toBe(true);
    expect(isNotString(null)).toBe(true);
    expect(isNotString(undefined)).toBe(true);
    expect(isNotString(()=>{})).toBe(true);
    expect(isNotString(true)).toBe(true);
    expect(isNotString(false)).toBe(true);
  });
  test('should be false', () => {
    expect(isNotString('test')).toBe(false);
  });
  test('should be true - non strict', () => {
    expect(isNotString(123, false)).toBe(true);
    expect(isNotString([], false)).toBe(true);
    expect(isNotString({}, false)).toBe(true);
    expect(isNotString(null, false)).toBe(true);
    expect(isNotString(undefined, false)).toBe(true);
    expect(isNotString(()=>{}, false)).toBe(true);
    expect(isNotString(true, false)).toBe(true);
    expect(isNotString(false, false)).toBe(true);
  });
  test('should be false - non strict', () => {
    expect(isNotString('test', false)).toBe(false);
  });
});