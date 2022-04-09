const { randomInt } = require('../src/index');

describe('randomInt', () => {
  test('should be between 1 and 0', () => {
    const int = randomInt(0,1);
    expect([0,1].includes(int)).toBe(true);
  });
  test('should be between 0 and 10', () => {
    const int = randomInt(0,10);
    expect([0,1,2,3,4,5,6,7,8,9,10].includes(int)).toBe(true);
  });
  test('should be between 11 and 20', () => {
    const int = randomInt(11,20);
    expect([11,12,13,14,15,16,17,18,19,20].includes(int)).toBe(true);
  });
  test('should be between 21 and 30', () => {
    const int = randomInt(21,30);
    expect([21,22,23,24,25,26,27,28,29,30].includes(int)).toBe(true);
  });
  test('should be between 1 and 30', () => {
    const int = randomInt(21,30);
    expect([21,22,23,24,25,26,27,28,29,30].includes(int)).toBe(true);
  });
  test('should be between 1 and 10000', () => {
    const int = randomInt(0,10000);
    const arr = [];
    for(let i=0; i <= 10000; i++){ arr.push(i); }
    expect(arr.includes(int)).toBe(true);
  });
  test('should return null - missing min', () => {
    const int = randomInt(null,100);
    expect(int).toBe(null);
  });
  test('should return null - missing max', () => {
    const int = randomInt(0,null);
    expect(int).toBe(null);
  });
  test('should return null - if min > max', () => {
    const int = randomInt(100,0);
    expect(int).toBe(null);
  });
});