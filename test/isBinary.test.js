const { isBinary } = require('../index');

describe('isString', () => {
  test('should be true', () => {
    expect(isBinary(true)).toBe(true);
    expect(isBinary(false)).toBe(true);
    expect(isBinary('true')).toBe(true);
    expect(isBinary('false')).toBe(true);
    expect(isBinary('0')).toBe(true);
    expect(isBinary('1')).toBe(true);
    expect(isBinary(0)).toBe(true);
    expect(isBinary(1)).toBe(true);
  });
  test('should be false', () => {
    expect(isBinary('')).toBe(false);
    expect(isBinary(123)).toBe(false);
    expect(isBinary([])).toBe(false);
    expect(isBinary({})).toBe(false);
    expect(isBinary(null)).toBe(false);
  });
});