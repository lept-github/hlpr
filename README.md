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