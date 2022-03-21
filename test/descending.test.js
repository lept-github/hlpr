const { descending } = require('../index');
const toStr = arr => JSON.stringify(arr);

describe('descending', () => {
  test('should sort array of integers DESC', () => {
    expect(toStr([2,4,1,3].sort(descending))).toBe(toStr([4,3,2,1]));
  });
  test('should sort array of strings DESC', () => {
    expect(toStr(['b','a','d','c','a'].sort(descending))).toBe(toStr(['d','c','b','a','a']));
  });
  test('should sort array when calling the function', () => {
    expect(toStr([true,false,true].sort(descending()))).toBe(toStr([true,false,true]));
    expect(toStr([2,2,4,1,3].sort(descending()))).toBe(toStr([4,3,2,2,1]));
    expect(toStr(['b','a','d','c','a'].sort(descending()))).toBe(toStr(['d','c','b','a','a']));

    const arr1 = [{p1:null}, {p1:null}, {p1:null}];
    const arr2 = [{p1:null}, {p1:null}, {p1:null}];
    expect(toStr(arr1.sort(descending('p1')))).toBe(toStr(arr2));
  });
  test('should NOT sort null values', () => {
    const arr1 = [{p1:null},{p1:null},{p1:null}];
    expect(toStr(arr1.sort(descending))).toBe(toStr(arr1));
  });
  test('should sort array of objects with numeric prop', () => {
    const arr1 = [{p1:456}, {p1:789}, {p1:123}];
    const arr2 = [{p1:789}, {p1:456}, {p1:123}];
    expect(toStr(arr1.sort(descending('p1')))).toBe(toStr(arr2));
  });
  test('should sort array of objects with string prop', () => {
    const arr1 = [{p1:'456'}, {p1:'789'}, {p1:'123'}];
    const arr2 = [{p1:'789'}, {p1:'456'}, {p1:'123'}];
    expect(toStr(arr1.sort(descending('p1')))).toBe(toStr(arr2));
  });
});