const { jsonToStr } = require('../src/index');

describe('jsonToStr', () => {
  test('should convert json to string', () => {
    expect(jsonToStr({test:[1,2,3]})).toBe('{"test":[1,2,3]}');
  });

  test('should NOT convert string', () => {
    expect(jsonToStr({})).toBe(null);
    expect(jsonToStr([])).toBe(null);
    expect(jsonToStr(null)).toBe(null);
    expect(jsonToStr(123)).toBe(null);
    expect(jsonToStr('')).toBe(null);
    expect(jsonToStr('test')).toBe(null);
    expect(jsonToStr(true)).toBe(null);
    expect(jsonToStr(()=>{})).toBe(null);
    expect(jsonToStr(new Date())).toBe(null);
    expect(jsonToStr(undefined)).toBe(null);
  });
});