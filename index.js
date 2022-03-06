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
const isBinary = val => {
  if( isTrue(val) || isFalse(val) ){
    return true
  }
  if( isString(val) && ['true','false'].includes(val.toLowerCase()) ){
    return true;
  }
  return [0,1,'0','1'].includes(val) === true;
};
const isBoolean = val => (isTrue(val) || isFalse(val));
const isNotBoolean = val => !isBoolean(val, strictMode);
const isNumber = (val, strictMode = true) => {
  strictMode = (strictMode === true);

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
  if( isNotNumber(val) ){
    return false;
  }
  return val % 2 === 0
};
const isOdd = val => !isEven(val);
const isObject = (val, strictMode = true) => {
  strictMode = (strictMode === true);

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
const isFunction = val => (typeof val === 'function');
const isNotFunction = (val, strictMode = true) => !isFunction(val, strictMode);
const isDate = val => (val instanceof Date);
const isNotDate = (val, strictMode = true) => !isDate(val, strictMode);
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
  if( isJson(val) ){ return 'json'; }
  return '';
};

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
  isJson,
  isNotJson,
  isType,
};