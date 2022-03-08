# hlprJS

hlprJS is a collection of javascript functions and utilities to help developers code faster, bigger and better apps. It does not have dependencies, it is written entirely in vanilla javascript, so it will not install unnecessary packages and libraries increasing your project's bundle size.

## Installation

`npm install hlpr`

or

`yarn add hlpr`

## Import or Require

```
const hlpr = require('hlpr');
console.log(hlpr.isArray([1,2,3])); // true
```

or

```
import { isArray } from 'hlpr';
console.log(isArray([1,2,3])); // true
```

### isArray

It determines if the given value is an array.

### isEmpty

It determines if the given value is an empty/blank string.

### isString

It determines if the given value is a string.

### isEmail

It determines if the given value is an email.

### isTrue

It determines if the given value is TRUE.

### isFalse

It determines if the given value is FALSE.

### isBinary

It determines if the given value is one of the following: true|false|0|1.

### isBoolean

It determines if the given value is boolean.

### isNumber

It determines if the given value is numeric.

### isInteger

It determines if the given value is integer.

### isDecimal

It determines if the given value is decimal or float.

### isEven

It determines if the given value is an even number.

### isOdd

It determines if the given value is an odd number.

### isObject

It determines if the given value is an object.

### isFunction

It determines if the given value is a function.

### isDate

It determines if the given value is a date.

### isSet

It determines if the given value has been set as a string, number, date, array, object, etc.

### isNull

It determines if the given value is NULL.

### isUndefined

It determines if the given value UNDEFINED.

### isJson

It determines if the given value is a valid JSON.

### isType

It returns the data type of the given value, number, string, array, etc.
