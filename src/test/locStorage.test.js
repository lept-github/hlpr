const { locStorage, locStorageClear } = require('../index');
const toStr = v => JSON.stringify(v);
class storageMock {
  constructor() { this.store = {}; }
  getItem(key) { return this.store[key] || null; }
  setItem(key, value) { this.store[key] = String(value); }
  clear() { this.store = {}; }
  removeItem(key){ delete this.store[key]; }
}
global.localStorage = new storageMock();

describe('locStorage', () => {
  test('should get numbers from session storage', () => {
    locStorage('test',123);
    expect(locStorage('test')).toBe(123);
  });
  test('should get strings from session storage', () => {
    locStorage('test','testing');
    expect(locStorage('test')).toBe('testing');
  });
  test('should get arrays from session storage', () => {
    const arr = [1,2,3];
    locStorage('test',arr);
    expect(toStr(locStorage('test'))).toBe(toStr(arr));
  });
  test('should get objects from session storage', () => {
    const obj = {prop: [1,2,3]};
    locStorage('test',obj);
    expect(toStr(locStorage('test'))).toBe(toStr(obj));
  });
  test('should get TRUE from session storage', () => {
    locStorage('test',true);
    expect(locStorage('test')).toBe(true);
  });
  test('should get FALSE from session storage', () => {
    locStorage('test',false);
    expect(locStorage('test')).toBe(false);
  });
  test('should get NULL from session storage', () => {
    locStorage('test',null);
    expect(locStorage('test')).toBe(null);
  });
});

describe('locStorageClear', () => {
  test('should clear specific item from local storage', () => {
    locStorage('test',123);
    expect(locStorage('test')).toBe(123);
    locStorageClear('test');
    expect(locStorage('test')).toBe(null);
  });
  test('should clear all items from local storage', () => {
    locStorage('test1',123);
    locStorage('test2',456);
    expect(locStorage('test1')).toBe(123);
    expect(locStorage('test2')).toBe(456);
    locStorageClear();
    expect(locStorage('test1')).toBe(null);
    expect(locStorage('test2')).toBe(null);
  });
});