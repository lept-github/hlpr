const { shuffle } = require('../src/index');
const toStr = v => JSON.stringify(v);

describe('shuffle', () => {
  test('should not be the same array', () => {
    const arr1 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    const arr2 = toStr(arr1);
    expect(toStr(arr1.sort(shuffle))).not.toBe(arr2);
  });
});