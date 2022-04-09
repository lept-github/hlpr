const { isEmpty } = require('../index');

describe('isEmpty', () => {
  test('should be true', () => {
    expect(isEmpty('')).toBe(true);
  });
  test('should be false', () => {
    expect(isEmpty('abc')).toBe(false);
    expect(isEmpty('0')).toBe(false);
    expect(isEmpty(123)).toBe(false);
    expect(isEmpty(new Date())).toBe(false);
    expect(isEmpty([])).toBe(false);
    expect(isEmpty(null)).toBe(false);
    expect(isEmpty(undefined)).toBe(false);
    expect(isEmpty(()=>{})).toBe(false);
  });
});