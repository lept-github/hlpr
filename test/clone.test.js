const { clone } = require('../src/index');

describe('clone', () => {
  test('should clone objects', () => {
    const obj = {prop1:'val1', prop2:'val2', func1:()=>{}};
    const cloned = clone(obj);
    expect(cloned.hasOwnProperty('prop1')).toBeTruthy();
    expect(cloned.hasOwnProperty('prop2')).toBeTruthy();
    expect(cloned.hasOwnProperty('func1')).toBeTruthy();
  });

  test('should NOT clone', () => {
    expect(clone(123)).toBeNull();
    expect(clone('test')).toBeNull();
    expect(clone('')).toBeNull();
    expect(clone({})).toBeNull();
    expect(clone([])).toBeNull();
    expect(clone(null)).toBeNull();
    expect(clone(()=>{})).toBeNull();
    expect(clone(undefined)).toBeNull();
  });
});