const { isJson } = require('../index');

describe('isJson', () => {
  test('should be true', () => {
    expect(isJson([1,2,3])).toBe(true);
    expect(isJson({test:[1,2,3]})).toBe(true);
    expect(isJson('{"test":[1,2,3]}')).toBe(true);
  });
  test('should be false', () => {
    expect(isJson('')).toBe(false);
    expect(isJson('{test:1234}')).toBe(false);
    expect(isJson('{"test:1234}')).toBe(false);
    expect(isJson('{{test:1234}')).toBe(false);
    expect(isJson(true)).toBe(false);
    expect(isJson(false)).toBe(false);
    expect(isJson(-1)).toBe(false);
    expect(isJson(0)).toBe(false);
    expect(isJson(1)).toBe(false);
    expect(isJson(1.1)).toBe(false);
    expect(isJson(()=>{})).toBe(false);
    expect(isJson(function(){})).toBe(false);
    expect(isJson('test')).toBe(false);
    expect(isJson(new Date())).toBe(false);
    expect(isJson([])).toBe(false);
    expect(isJson({})).toBe(false);
    expect(isJson('')).toBe(false);
    expect(isJson(null)).toBe(false);
    expect(isJson(undefined)).toBe(false);
  });
  test('should be true - non strict', () => {
    expect(isJson([1,2,3], false)).toBe(true);
    expect(isJson({test:[1,2,3]}, false)).toBe(true);
    expect(isJson('{"test":[1,2,3]}', false)).toBe(true);
    expect(isJson([], false)).toBe(true);
    expect(isJson({}, false)).toBe(true);
  });
  test('should be false - non strict', () => {
    expect(isJson('', false)).toBe(false);
    expect(isJson('{test:1234}', false)).toBe(false);
    expect(isJson('{"test:1234}', false)).toBe(false);
    expect(isJson('{{test:1234}', false)).toBe(false);
    expect(isJson(true, false)).toBe(false);
    expect(isJson(false, false)).toBe(false);
    expect(isJson(-1, false)).toBe(false);
    expect(isJson(0, false)).toBe(false);
    expect(isJson(1, false)).toBe(false);
    expect(isJson(1.1, false)).toBe(false);
    expect(isJson(()=>{}, false)).toBe(false);
    expect(isJson(function(){}, false)).toBe(false);
    expect(isJson('test', false)).toBe(false);
    expect(isJson(new Date(), false)).toBe(false);
    expect(isJson('', false)).toBe(false);
    expect(isJson(null, false)).toBe(false);
    expect(isJson(undefined, false)).toBe(false);
  });
});