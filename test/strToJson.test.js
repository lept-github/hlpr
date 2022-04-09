const { strToJson, jsonToStr } = require('../index');


describe('strToJson', () => {
  test('should convert string to json', () => {
    expect(jsonToStr(strToJson('{"test":[1,2,3]}'))).toBe('{"test":[1,2,3]}');
  });

  test('should NOT convert string', () => {
    expect(strToJson("{test:123}")).toBe(null);
    expect(strToJson("{12:123}")).toBe(null);
    expect(strToJson({})).toBe(null);
    expect(strToJson([])).toBe(null);
    expect(strToJson(null)).toBe(null);
    expect(strToJson(123)).toBe(null);
    expect(strToJson('')).toBe(null);
    expect(strToJson('test')).toBe(null);
    expect(strToJson(true)).toBe(null);
    expect(strToJson(()=>{})).toBe(null);
    expect(strToJson(new Date())).toBe(null);
    expect(strToJson(undefined)).toBe(null);
  });
});