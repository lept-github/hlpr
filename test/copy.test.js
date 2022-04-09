const { copy } = require('../src/index');

describe('copy', () => {
  test('should copy strings', () => {
    expect(copy('test<>')).toBe('test<>');
  });

  test('should copy numbers', () => {
    expect(copy(123)).toBe(123);
    expect(copy(-123)).toBe(-123);
    expect(copy(123.456)).toBe(123.456);
    expect(copy(0)).toBe(0);
  });

  test('should copy booleans', () => {
    expect(copy(true)).toBe(true);
    expect(copy(false)).toBe(false);
  });

  test('should copy objects', () => {
    const obj = {prop1:'val1', prop2:'val2', func1:()=>{}};
    const copied = copy(obj);
    expect(copied.hasOwnProperty('prop1')).toBe(true);
    expect(copied.hasOwnProperty('prop2')).toBe(true);
    expect(copied.hasOwnProperty('func1')).toBe(false);
  });

  test('should copy arrays', () => {
    const obj = [1,2,3];
    const copied = copy(obj);
    expect(copied.join('')).toBe('123');
  });

  test('should copy dates', () => {
    const obj = new Date(2020,0,1);
    const copied = copy(obj);
    expect(copied).toBe('2020-01-01T05:00:00.000Z');
  });

  test('should NOT copy', () => {
    expect(copy({})).toBe(null);
    expect(copy([])).toBe(null);
    expect(copy(null)).toBe(null);
    expect(copy('')).toBe(null);
    expect(copy(()=>{})).toBe(null);
    expect(copy(undefined)).toBe(null);
  });
});