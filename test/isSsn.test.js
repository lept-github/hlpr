const { isSsn } = require('../index');

describe('isSsn', () => {
  test('should be true', () => {
    expect(isSsn('111-11-1111')).toBe(true);
    expect(isSsn('222-22-2222')).toBe(true);
  });
  test('should be false', () => {
    expect(isSsn('11-1-11-1111')).toBe(false);
    expect(isSsn('222-2-2222')).toBe(false);
    expect(isSsn('222-2-22')).toBe(false);
    expect(isSsn(2.1)).toBe(false);
    expect(isSsn(6)).toBe(false);
    expect(isSsn(true)).toBe(false);
    expect(isSsn(false)).toBe(false);
    expect(isSsn('')).toBe(false);
    expect(isSsn([])).toBe(false);
    expect(isSsn({})).toBe(false);
    expect(isSsn(null)).toBe(false);
    expect(isSsn(undefined)).toBe(false);
    expect(isSsn(()=>{})).toBe(false);
  });
});