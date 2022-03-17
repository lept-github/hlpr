const { descending } = require('../index');
const toStr = arr => JSON.stringify(arr);

describe('descending', () => {
  test('should sort array of integers DESC', () => {
    expect(toStr([2,4,1,3].sort(descending))).toBe(toStr([4,3,2,1]))
  });
  test('should sort array of strings DESC', () => {
    expect(toStr(['b','a','d','c'].sort(descending))).toBe(toStr(['d','c','b','a',]))
  });
  test('should sort array of objects DESC', () => {
    const obj1 = [{p1:456, p2:'def'}, {p1:789, p2:'ghi'}, {p1:123, p2:'abc'}];
    const obj2 = [{p1:789, p2:'ghi'}, {p1:456, p2:'def'}, {p1:123, p2:'abc'}];
    expect(toStr(obj1.sort(descending('p1')))).toBe(toStr(obj2))
    expect(toStr(obj1.sort(descending('p2')))).toBe(toStr(obj2))
  });
});