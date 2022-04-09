const { isNotBoolean } = require('../src/index');

describe('isNotBoolean', () => {
  test('should be true', () => {
    expect(isNotBoolean('true')).toBe(true);
    expect(isNotBoolean('false')).toBe(true);
    expect(isNotBoolean('0')).toBe(true);
    expect(isNotBoolean('1')).toBe(true);
    expect(isNotBoolean(0)).toBe(true);
    expect(isNotBoolean(1)).toBe(true);
    expect(isNotBoolean('')).toBe(true);
    expect(isNotBoolean(123)).toBe(true);
    expect(isNotBoolean([])).toBe(true);
    expect(isNotBoolean({})).toBe(true);
    expect(isNotBoolean(new Date())).toBe(true);
    expect(isNotBoolean(null)).toBe(true);
    expect(isNotBoolean(undefined)).toBe(true);
    expect(isNotBoolean(()=>{})).toBe(true);
  });
  test('should be false', () => {
    expect(isNotBoolean(true)).toBe(false);
    expect(isNotBoolean(false)).toBe(false);
  });
});