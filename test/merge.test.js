const { merge } = require('../index');
const toStr = v => JSON.stringify(v);

describe('isFalsy', () => {
  const obj1 = {p1:1, p2:2};
  const obj2 = {p3:3, p4:4};
  const arr1 = [1,2,3];
  const arr2 = [4,5,6];

  test('should merge 2 objects', () => {
    expect(toStr(merge(obj1, obj2))).toBe(toStr(merge(obj1, obj2)));
  });
  test('should merge 2 objects - one is empty', () => {
    expect(toStr(merge(obj1, {}))).toBe(toStr(merge(obj1, {})));
  });
  test('should merge 2 arrays', () => {
    expect(toStr(merge(arr1, arr2))).toBe(toStr(merge(arr1, arr2)));
  });
  test('should merge 2 arrays - one is empty', () => {
    expect(toStr(merge(arr1, []))).toBe(toStr(merge(arr1, [])));
  });
  test('should NOT merge when 1 param is missing', () => {
    expect(toStr(merge(arr1))).toBe(toStr(null));
    expect(toStr(merge(obj1))).toBe(toStr(null));
  });
  test('should NOT merge anything other than arrays or objects', () => {
    expect(toStr(merge(true, true))).toBe(toStr(null));
    expect(toStr(merge(false, false))).toBe(toStr(null));
    expect(toStr(merge(123, 456))).toBe(toStr(null));
    expect(toStr(merge('123', '456'))).toBe(toStr(null));
    expect(toStr(merge('', ''))).toBe(toStr(null));
    expect(toStr(merge(null, null))).toBe(toStr(null));
    expect(toStr(merge(undefined, undefined))).toBe(toStr(null));
    expect(toStr(merge(new Date(), new Date()))).toBe(toStr(null));
    expect(toStr(merge(()=>{}, ()=>{}))).toBe(toStr(null));
  });
});