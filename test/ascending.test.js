const { ascending } = require('../src/index');
const toStr = arr => JSON.stringify(arr);

describe('ascending', () => {
  test('should sort array of integers ASC', () => {
    expect(toStr([2,2,4,1,3].sort(ascending))).toBe(toStr([1,2,2,3,4]));
  });
  test('should sort array of strings ASC', () => {
    expect(toStr(['b','a','d','c','a'].sort(ascending))).toBe(toStr(['a','a','b','c','d']));
  });
  test('should sort array when calling the function', () => {
    expect(toStr([true,false,true].sort(ascending()))).toBe(toStr([true,false,true]));
    expect(toStr([2,2,4,1,3].sort(ascending()))).toBe(toStr([1,2,2,3,4]));
    expect(toStr(['b','a','d','c','a'].sort(ascending()))).toBe(toStr(['a','a','b','c','d']));

    const arr1 = [{p1:null}, {p1:null}, {p1:null}];
    const arr2 = [{p1:null}, {p1:null}, {p1:null}];
    expect(toStr(arr1.sort(ascending('p1')))).toBe(toStr(arr2));
  });
  test('should NOT sort null values', () => {
    const arr1 = [{p1:null},{p1:null},{p1:null}];
    expect(toStr(arr1.sort(ascending))).toBe(toStr(arr1));
  });
  test('should sort array of objects with numeric prop', () => {
    const arr1 = [{p1:456}, {p1:789}, {p1:123}];
    const arr2 = [{p1:123}, {p1:456}, {p1:789}];
    expect(toStr(arr1.sort(ascending('p1')))).toBe(toStr(arr2));
  });
  test('should sort array of objects with string prop', () => {
    const arr1 = [{p1:'456'}, {p1:'789'}, {p1:'123'}];
    const arr2 = [{p1:'123'}, {p1:'456'}, {p1:'789'}];
    expect(toStr(arr1.sort(ascending('p1')))).toBe(toStr(arr2));
  });
});