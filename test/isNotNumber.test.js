const { isNotNumber } = require('../index');

describe('isNotNumber', () => {
  test('should be true', () => {
    expect(isNotNumber('abc')).toBe(true);
    expect(isNotNumber('-1')).toBe(true);
    expect(isNotNumber('0')).toBe(true);
    expect(isNotNumber('1')).toBe(true);
    expect(isNotNumber('1.1')).toBe(true);
    expect(isNotNumber('1,1')).toBe(true);
    expect(isNotNumber([])).toBe(true);
    expect(isNotNumber({})).toBe(true);
  });
  test('should be false', () => {
    expect(isNotNumber(-1)).toBe(false);
    expect(isNotNumber(0)).toBe(false);
    expect(isNotNumber(1)).toBe(false);
    expect(isNotNumber(1.1)).toBe(false);
  });
  test('should be true - none strict', () => {
    expect(isNotNumber('abc', false)).toBe(true);
    expect(isNotNumber('', false)).toBe(true);
    expect(isNotNumber('--111', false)).toBe(true);
    expect(isNotNumber('1,1',false)).toBe(true);
  });
  test('should be false - none strict', () => {
    expect(isNotNumber(-1,false)).toBe(false);
    expect(isNotNumber(0,false)).toBe(false);
    expect(isNotNumber(1,false)).toBe(false);
    expect(isNotNumber(1.1,false)).toBe(false);
    expect(isNotNumber('-1',false)).toBe(false);
    expect(isNotNumber('0',false)).toBe(false);
    expect(isNotNumber('1',false)).toBe(false);
    expect(isNotNumber('1.1',false)).toBe(false);
  });
});