helperJS is a collection of javascript functions and utilities to help developers code faster, bigger and better apps. It does not have dependencies, it is written entirely in vanilla javascript, so it will not install unnecessary packages and libraries increasing your project's bundle size.

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

## Validation Functions

### isArray

It determines if the given value is an array.

`isArray(val, strictMode)`

| Parameter  | Description                                                                                       |
|------------|---------------------------------------------------------------------------------------------------|
| val        | Required. The value to be tested.                                                                 |
| strictMode | Optional. Defaults to true. Validation strategy, it determines if an empty array is valid or not. |

### isBinary

It determines if the given value is one of the following: `true|false|0|1`.

`isBinary(val)`

| Parameter | Description                       |
|-----------|-----------------------------------|
| val       | Required. The value to be tested. |

### isBoolean

It determines if the given value is boolean.

`isBoolean(val)`

| Parameter | Description                       |
|-----------|-----------------------------------|
| val       | Required. The value to be tested. |

### isDate

It determines if the given value is a date.

`isDate(val)`

| Parameter | Description                       |
|-----------|-----------------------------------|
| val       | Required. The value to be tested. |

### isDecimal

It determines if the given value is decimal or float.

`isDecimal(val)`

| Parameter | Description                       |
|-----------|-----------------------------------|
| val       | Required. The value to be tested. |

### isEmail

It determines if the given value is an email.

`isEmail(val)`

| Parameter | Description                       |
|-----------|-----------------------------------|
| val       | Required. The value to be tested. |

### isEmpty

It determines if the given value is an empty/blank string.

`isEmpty(val)`

| Parameter | Description                       |
|-----------|-----------------------------------|
| val       | Required. The value to be tested. |

### isEven

It determines if the given value is an even number.

`isEven(val)`

| Parameter | Description                       |
|-----------|-----------------------------------|
| val       | Required. The value to be tested. |

### isFalse

It determines if the given value is FALSE.

`isFalse(val)`

| Parameter | Description                       |
|-----------|-----------------------------------|
| val       | Required. The value to be tested. |

### isFunction

It determines if the given value is a function.

`isFunction(val)`

| Parameter | Description                       |
|-----------|-----------------------------------|
| val       | Required. The value to be tested. |

### isInteger

It determines if the given value is integer.

`isInteger(val)`

| Parameter | Description                       |
|-----------|-----------------------------------|
| val       | Required. The value to be tested. |

### isJson

It determines if the given value is a valid JSON.

`isJson(val, strictMode)`

| Parameter        | Description                                                                                             |
|------------------|---------------------------------------------------------------------------------------------------------|
| val              | Required. The value to be tested.                                                                       |
| strictMode       | Optional. Defaults to true. Validation strategy, it determines if an empty JSON object is valid or not. |

### isNull

It determines if the given value is NULL.

`isNull(val)`

| Parameter | Description                       |
|-----------|-----------------------------------|
| val       | Required. The value to be tested. |

### isNumber

It determines if the given value is numeric.

`isNumber(val, strictMode)`

| Parameter  | Description                                                                                            |
|------------|--------------------------------------------------------------------------------------------------------|
| val        | Required. The value to be tested.                                                                      |
| strictMode | Optional. Defaults to true. Validation strategy, it determines if numbers as strings are valid or not. |

### isObject

It determines if the given value is an object. It will return false for `Array` and `Date`.

`isObject(val, strictMode)`

| Parameter  | Description                                                                                        |
|------------|----------------------------------------------------------------------------------------------------|
| val        | Required. The value to be tested.                                                                  |
| strictMode | Optional. Defaults to true. Validation strategy, it determines if an empty object is valid or not. |

### isOdd

It determines if the given value is an odd number.

`isOdd(val)`

| Parameter | Description                       |
|-----------|-----------------------------------|
| val       | Required. The value to be tested. |

### isSet

It determines if the given value has been set/declare as a string, number, date, array, object, etc.

`isSet(val)`

| Parameter | Description                       |
|-----------|-----------------------------------|
| val       | Required. The value to be tested. |

### isSsn

It determines if the given value is a valid format social security number. `000-00-0000`.

`isSsn(val)`

| Parameter | Description                       |
|-----------|-----------------------------------|
| val       | Required. The value to be tested. |

### isString

It determines if the given value is a string.

`isString(val, strictMode)`

| Parameter        | Description                                                                                        |
|------------------|----------------------------------------------------------------------------------------------------|
| val              | Required. The value to be tested.                                                                  |
| strictMode       | Optional. Defaults to true. Validation strategy, it determines if an empty string is valid or not. |

### isTrue

It determines if the given value is TRUE.

`isTrue(val)`

| Parameter | Description                       |
|-----------|-----------------------------------|
| val       | Required. The value to be tested. |

### isType

It returns the data type of the given value, number, string, array, etc.

`isType(val)`

| Parameter | Description                       |
|-----------|-----------------------------------|
| val       | Required. The value to be tested. |

### isUndefined

It determines if the given value UNDEFINED.

`isUndefined(val)`

| Parameter | Description                       |
|-----------|-----------------------------------|
| val       | Required. The value to be tested. |

## Other Validation Functions

### isNotArray
### isNotBoolean
### isNotDate
### isNotFunction
### isNotJson
### isNotNull
### isNotNumber
### isNotObject
### isNotSet
### isNotString
### isNotUndefined

## Array Sorting Functions

### ascending

It sorts arrays ascendingly.

- `[1,3,4,2].sort(ascending) // [1,2,3,4]`

- `['c','d','a','b'].sort(ascending) // ['a','b','c','d']`

It also sorts array of objects, but it requires the property name to be sorted by.

`[{p:3}, {p:1}, {p:2}].sort(ascending('p')) // [{p:1}, {p:2}, {p:3}]`

### descending

It sorts arrays descendingly.

- `[1,3,4,2].sort(descending) // [4,3,2,1]`

- `['c','d','a','b'].sort(descending) // ['d','c','b','a']`

It also sorts array of objects, but it requires the property name to be sorted by.

`[{p:3}, {p:1}, {p:2}].sort(ascending('p')) // [{p:3}, {p:2}, {p:1}]`