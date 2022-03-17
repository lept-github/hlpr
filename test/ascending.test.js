const { ascending } = require('../index');
const toStr = arr => JSON.stringify(arr);

describe('ascending', () => {
  test('should sort array of integers ASC', () => {
    expect(toStr([2,4,1,3].sort(ascending))).toBe(toStr([1,2,3,4]))
  });
  test('should sort array of strings ASC', () => {
    expect(toStr(['b','a','d','c'].sort(ascending))).toBe(toStr(['a','b','c','d']))
  });
  test('should sort array of objects ASC', () => {
    const obj1 = [{p1:456, p2:'def'}, {p1:789, p2:'ghi'}, {p1:123, p2:'abc'}];
    const obj2 = [{p1:123, p2:'abc'}, {p1:456, p2:'def'}, {p1:789, p2:'ghi'}];
    expect(toStr(obj1.sort(ascending('p1')))).toBe(toStr(obj2))
    expect(toStr(obj1.sort(ascending('p2')))).toBe(toStr(obj2))
  });
});