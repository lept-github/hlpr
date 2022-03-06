const { isNotJson } = require('../index');

describe('isNotJson', () => {
  test('should be true', () => {
    expect(isNotJson('{test:1234}')).toBe(true);
    expect(isNotJson('{"test:1234}')).toBe(true);
    expect(isNotJson('{{test:1234}')).toBe(true);
    expect(isNotJson(true)).toBe(true);
    expect(isNotJson(false)).toBe(true);
    expect(isNotJson(-1)).toBe(true);
    expect(isNotJson(0)).toBe(true);
    expect(isNotJson(1)).toBe(true);
    expect(isNotJson(1.1)).toBe(true);
    expect(isNotJson(()=>{})).toBe(true);
    expect(isNotJson(function(){})).toBe(true);
    expect(isNotJson('test')).toBe(true);
    expect(isNotJson(new Date())).toBe(true);
    expect(isNotJson([])).toBe(true);
    expect(isNotJson({})).toBe(true);
    expect(isNotJson('')).toBe(true);
    expect(isNotJson(null)).toBe(true);
    expect(isNotJson(undefined)).toBe(true);
  });
  test('should be false', () => {
    expect(isNotJson([1,2,3])).toBe(false);
    expect(isNotJson({test:[1,2,3]})).toBe(false);
    expect(isNotJson('{"test":[1,2,3]}')).toBe(false);
  });
  test('should be true - non strict', () => {
    expect(isNotJson('{test:1234}', false)).toBe(true);
    expect(isNotJson('{"test:1234}', false)).toBe(true);
    expect(isNotJson('{{test:1234}', false)).toBe(true);
    expect(isNotJson(true, false)).toBe(true);
    expect(isNotJson(false, false)).toBe(true);
    expect(isNotJson(-1, false)).toBe(true);
    expect(isNotJson(0, false)).toBe(true);
    expect(isNotJson(1, false)).toBe(true);
    expect(isNotJson(1.1, false)).toBe(true);
    expect(isNotJson(()=>{}, false)).toBe(true);
    expect(isNotJson(function(){}, false)).toBe(true);
    expect(isNotJson('test', false)).toBe(true);
    expect(isNotJson(new Date(), false)).toBe(true);
    expect(isNotJson('', false)).toBe(true);
    expect(isNotJson(null, false)).toBe(true);
    expect(isNotJson(undefined, false)).toBe(true);
  });
  test('should be false - non strict', () => {
    expect(isNotJson([1,2,3], false)).toBe(false);
    expect(isNotJson({test:[1,2,3]}, false)).toBe(false);
    expect(isNotJson('{"test":[1,2,3]}', false)).toBe(false);
    expect(isNotJson([], false)).toBe(false);
    expect(isNotJson({}, false)).toBe(false);
  });
});