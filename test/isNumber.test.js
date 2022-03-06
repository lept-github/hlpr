const { isNumber } = require('../index');

describe('isNumber', () => {
  test('should be true', () => {
    expect(isNumber(-1)).toBe(true);
    expect(isNumber(0)).toBe(true);
    expect(isNumber(1)).toBe(true);
    expect(isNumber(1.1)).toBe(true);
  });
  test('should be false', () => {
    expect(isNumber('abc')).toBe(false);
    expect(isNumber('-1')).toBe(false);
    expect(isNumber('0')).toBe(false);
    expect(isNumber('1')).toBe(false);
    expect(isNumber('1.1')).toBe(false);
    expect(isNumber('1,1')).toBe(false);
    expect(isNumber([])).toBe(false);
    expect(isNumber({})).toBe(false);
  });
  test('should be true - non strict', () => {
    expect(isNumber(-1,false)).toBe(true);
    expect(isNumber(0,false)).toBe(true);
    expect(isNumber(1,false)).toBe(true);
    expect(isNumber(1.1,false)).toBe(true);
    expect(isNumber('-1',false)).toBe(true);
    expect(isNumber('0',false)).toBe(true);
    expect(isNumber('1',false)).toBe(true);
    expect(isNumber('1.1',false)).toBe(true);
  });
  test('should be false - non strict', () => {
    expect(isNumber('abc', false)).toBe(false);
    expect(isNumber('', false)).toBe(false);
    expect(isNumber('--111', false)).toBe(false);
    expect(isNumber('1,1',false)).toBe(false);
  });
});