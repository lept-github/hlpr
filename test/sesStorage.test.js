const { sesStorage, sesStorageClear } = require('../src/index');
const toStr = v => JSON.stringify(v);
class storageMock {
  constructor() { this.store = {}; }
  getItem(key) { return this.store[key] || null; }
  setItem(key, value) { this.store[key] = String(value); }
  clear() { this.store = {}; }
  removeItem(key){ delete this.store[key]; }
}
global.sessionStorage = new storageMock();

describe('sesStorage', () => {
  test('should get numbers from session storage', () => {
    sesStorage('test',123);
    expect(sesStorage('test')).toBe(123);
  });
  test('should get strings from session storage', () => {
    sesStorage('test','testing');
    expect(sesStorage('test')).toBe('testing');
  });
  test('should get arrays from session storage', () => {
    const arr = [1,2,3];
    sesStorage('test',arr);
    expect(toStr(sesStorage('test'))).toBe(toStr(arr));
  });
  test('should get objects from session storage', () => {
    const obj = {prop: [1,2,3]};
    sesStorage('test',obj);
    expect(toStr(sesStorage('test'))).toBe(toStr(obj));
  });
  test('should get TRUE from session storage', () => {
    sesStorage('test',true);
    expect(sesStorage('test')).toBe(true);
  });
  test('should get FALSE from session storage', () => {
    sesStorage('test',false);
    expect(sesStorage('test')).toBe(false);
  });
  test('should get NULL from session storage', () => {
    sesStorage('test',null);
    expect(sesStorage('test')).toBe(null);
  });
});

describe('sesStorageClear', () => {
  test('should clear specific item from session storage', () => {
    sesStorage('test',123);
    expect(sesStorage('test')).toBe(123);
    sesStorageClear('test');
    expect(sesStorage('test')).toBe(null);
  });
  test('should clear all items from session storage', () => {
    sesStorage('test1',123);
    sesStorage('test2',456);
    expect(sesStorage('test1')).toBe(123);
    expect(sesStorage('test2')).toBe(456);
    sesStorageClear();
    expect(sesStorage('test1')).toBe(null);
    expect(sesStorage('test2')).toBe(null);
  });
});