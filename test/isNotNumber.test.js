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
    expect(isNotNumber(null)).toBe(true);
    expect(isNotNumber(undefined)).toBe(true);
    expect(isNotNumber(new Date())).toBe(true);
    expect(isNotNumber(()=>{})).toBe(true);
  });
  test('should be false', () => {
    expect(isNotNumber(-1)).toBe(false);
    expect(isNotNumber(0)).toBe(false);
    expect(isNotNumber(1)).toBe(false);
    expect(isNotNumber(1.1)).toBe(false);
  });
  test('should be true - non strict', () => {
    expect(isNotNumber('abc', false)).toBe(true);
    expect(isNotNumber('', false)).toBe(true);
    expect(isNotNumber('--111', false)).toBe(true);
    expect(isNotNumber('1,1',false)).toBe(true);
    expect(isNotNumber(null, false)).toBe(true);
    expect(isNotNumber(undefined, false)).toBe(true);
    expect(isNotNumber(new Date(), false)).toBe(true);
    expect(isNotNumber(()=>{}, false)).toBe(true);
  });
  test('should be false - non strict', () => {
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