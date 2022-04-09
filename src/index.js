// validation functions
const isEmpty = val => (val === '');
const isString = (val, strictMode = true) => {
  strictMode = (strictMode === true);

  if( typeof val !== 'string' ){
    return false;
  }

  return !(strictMode === true && isEmpty(val));
};
const isNotString = (val, strictMode = true) => !isString(val, strictMode);
const isArray = (val, strictMode = true) => {
  strictMode = (strictMode === true);

  if( Array.isArray(val) === false ){
    return false;
  }

  return !(strictMode === true && val.length === 0);
};
const isNotArray = (val, strictMode = true) => !isArray(val, strictMode);
const isTrue = val => (val === true);
const isFalse = val => (val === false);
const isBoolean = val => (isTrue(val) || isFalse(val));
const isBinary = val => {
  if( isTrue(val) || isFalse(val) ){
    return true
  }
  if( isString(val) && ['true','false'].includes(val.toLowerCase()) ){
    return true;
  }
  return [0,1,'0','1'].includes(val) === true;
};
const isNotBoolean = val => !isBoolean(val);
const isNumber = (val, strictMode = true) => {
  strictMode = (strictMode === true);

  if( isDate(val) ){ return false; }
  if( isNull(val) ){ return false; }
  if( isEmpty(val) ){ return false; }

  if( typeof val === 'number' ){
    return true;
  }

  return (strictMode === false && isNaN(val) === false);
};
const isNotNumber = (val, strictMode = true) => !isNumber(val, strictMode);
const isInteger = val => {
  if( isNotNumber(val) ){
    return false;
  }
  return !(val.toString().lastIndexOf('.') !== -1);
};
const isDecimal = val => {
  if( isNotNumber(val) ){
    return false;
  }
  return val.toString().lastIndexOf('.') !== -1;
};
const isEven = val => {
  if( isNumber(val) ){
    return val % 2 === 0
  }
  return false;
};
const isOdd = val => {
  if( isNumber(val) ){
    return val % 2 !== 0
  }
  return false;
};
const isObject = (val, strictMode = true) => {
  strictMode = (strictMode === true);

  if( isArray(val, false) ){ return false; }
  if( isDate(val) ){ return false; }
  if( isNull(val) ){ return false; }
  if( strictMode === false && typeof val === 'object' ){
    return true;
  }
  if( strictMode === true && typeof val === 'object' ){
    return (isArray(Object.keys(val)) === true);
  }

  return false;
};
const isNotObject = (val, strictMode = true) => !isObject(val, strictMode);
const isEmail = val => {
  if( isNotString(val) ){
    return false;
  }
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(val);
}
const isSsn = val => {
  if( isNotString(val) ){
    return false;
  }
  return /^\d{3}-?\d{2}-?\d{4}$/.test(val);
};
const isFunction = val => (typeof val === 'function');
const isNotFunction = val => !isFunction(val);
const isDate = val => (val instanceof Date);
const isNotDate = val => !isDate(val);
const isSet = val => {
  if( isArray(val) ){ return true; }
  if( isBoolean(val) ){ return true; }
  if( isNumber(val) ){ return true; }
  if( isFunction(val) ){ return true; }
  if( isObject(val) ){ return true; }
  if( isString(val) ){ return true; }
  return isDate(val);
};
const isNotSet = val => !isSet(val);
const isNull = val => (val === null);
const isNotNull = val => !isNull(val);
const isUndefined = val => (typeof val === 'undefined');
const isNotUndefined = val => !isUndefined(val);
const isJson = (val, strictMode = true) => {
  strictMode = (strictMode === true);
  try{
    if( isString(val,strictMode) ){
      return !!JSON.parse(val)
    }
    if( isObject(val,strictMode) ){
      return !!JSON.stringify(val)
    }
    if( isArray(val,strictMode) ){
      return !!JSON.stringify(val)
    }
  }
  catch( err ){}
  return false;
};
const isNotJson = (val, strictMode = true) => !isJson(val, strictMode);
const isType = val => {
  if( isArray(val,false) ){ return 'array'; }
  if( isObject(val,false) ){ return 'object'; }
  if( isString(val,false) ){ return 'string'; }
  if( isDate(val) ){ return 'date'; }
  if( isFunction(val) ){ return 'function'; }
  if( isNumber(val) ){ return 'number'; }
  if( isBoolean(val) ){ return 'boolean'; }
  return '';
};
// TODO: documentation
const isFalsy = val => {
  if( isFalse(val) ){ return true; }
  if( isEmpty(val) ){ return true; }
  if( isNull(val) ){ return true; }
  return isUndefined(val);
};
const isTruthy = val => !isFalsy(val);

// array functions
const sortString = (v1, v2) => {
  const a = v1.toLowerCase();
  const b = v2.toLowerCase();
  if( a < b ){ return -1; }
  if( a > b ){ return 1; }
  return 0;
};
const sortNumber = (v1, v2) => v1 - v2;
const ascending = (prop, prop2) => {
  if( prop && prop2 ){
    if( isString(prop) && isString(prop2) ){
      return sortString(prop, prop2);
    }
    if( isNumber(prop) && isNumber(prop2) ){
      return sortNumber(prop, prop2);
    }
    return 0;
  }
  if( prop ){
    return (a, b) => {
      if( isString(a[prop]) && isString(b[prop]) ){
        return sortString(a[prop], b[prop]);
      }
      if( isNumber(a[prop]) && isNumber(b[prop]) ){
        return sortNumber(a[prop], b[prop]);
      }
      return 0;
    };
  }
  return (a, b) => {
    if( isString(a) && isString(b) ){
      return sortString(a, b);
    }
    if( isNumber(a) && isNumber(b) ){
      return sortNumber(a, b);
    }
    return 0;
  };
};
const descending = (prop, prop2) => {
  if( prop && prop2 ){
    if( isString(prop) && isString(prop2) ){
      return sortString(prop2, prop);
    }
    if( isNumber(prop) && isNumber(prop2) ){
      return sortNumber(prop2, prop);
    }
    return 0;
  }
  if( prop ){
    return (a, b) => {
      if( isString(a[prop]) && isString(b[prop]) ){
        return sortString(b[prop], a[prop]);
      }
      if( isNumber(a[prop]) && isNumber(b[prop]) ){
        return sortNumber(b[prop], a[prop]);
      }
      return 0;
    };
  }
  return (a, b) => {
    if( isString(a) && isString(b) ){
      return sortString(b, a);
    }
    if( isNumber(a) && isNumber(b) ){
      return sortNumber(b, a);
    }
    return 0;
  };
};
// TODO: documentation
const shuffle = () => 0.5 - Math.random();

// misc functions
// TODO: documentation
const jsonToStr = obj => {
  if( isObject(obj) ){
    return JSON.stringify(obj);
  }
  return null;
};
const strToJson = str => {
  if( isString(str) ){
    try{
      return JSON.parse(str);
    }
    catch( err ){
      return null;
    }
  }
  return null;
};
const copy = val => {
  if( isSet(val) ){
    try{
      return JSON.parse(JSON.stringify(val));
    }
    catch( err ){
      return null;
    }
  }
  return null;
};
const clone = obj => {
  if( isObject(obj) ){
    return Object.assign({}, obj);
  }
  return null;
};
const merge = (val1, val2) => {
  if( isArray(val1, false) && isArray(val2, false) ){
    return [].concat(val1, val2);
  }
  if( isObject(val1, false) && isObject(val2, false) ){
    return Object.assign({}, val1, val2);
  }
  return null;
};
const randomInt = (min, max) => {
  if( isNotNumber(min) ){ return null; }
  if( isNotNumber(max) ){ return null; }
  if( min > max ){ return null; }
  return Math.floor(Math.random() * (max - min +1) + min);
};

// session and local storage functions
const browserStorage = (storage, key, value) => {
  if( key && (value || [false,null,''].includes(value)) ){
    if( isString(value,false) ){
      storage.setItem(key,value);
    } else {
      storage.setItem(key,JSON.stringify(value));
    }
    return storage;
  }

  const item = storage.getItem(key);
  try{ return JSON.parse(item); }
  catch( err ){ return item; }
};
const browserStorageClear = (storage, key) => {
  if( key ){
    storage.removeItem(key);
  } else {
    storage.clear();
  }
};
// TODO: documentation
const sesStorage = (key, value) => browserStorage(sessionStorage, key, value);
const sesStorageClear = key => browserStorageClear(sessionStorage, key);
const locStorage = (key, value) => browserStorage(localStorage, key, value);
const locStorageClear = key => browserStorageClear(localStorage, key);

module.exports = {
  isEmpty,
  isString,
  isNotString,
  isArray,
  isNotArray,
  isTrue,
  isFalse,
  isBinary,
  isBoolean,
  isNotBoolean,
  isNumber,
  isNotNumber,
  isInteger,
  isDecimal,
  isEven,
  isOdd,
  isObject,
  isNotObject,
  isEmail,
  isSsn,
  isFunction,
  isNotFunction,
  isDate,
  isNotDate,
  isSet,
  isNotSet,
  isNull,
  isNotNull,
  isUndefined,
  isNotUndefined,
  isFalsy,
  isTruthy,
  isJson,
  isNotJson,
  isType,
  ascending,
  descending,
  shuffle,
  jsonToStr,
  strToJson,
  copy,
  clone,
  merge,
  randomInt,
  sesStorage,
  sesStorageClear,
  locStorage,
  locStorageClear,
};