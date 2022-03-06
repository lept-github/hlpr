const { isEmpty } = require('../index');

describe('isEmpty', () => {
  test('should be true', () => {
    expect(isEmpty('')).toBe(true);
  });
  test('should be false', () => {
    expect(isEmpty('abc')).toBe(false);
    expect(isEmpty('0')).toBe(false);
    expect(isEmpty([])).toBe(false);
  });
});