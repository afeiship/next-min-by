# next-min-by
> This method is like _.min except that it accepts iteratee which is invoked for each element in array to generate the criterion by which the value is ranked.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
yarn add @jswork/next-min-by
```

## usage
```js
import '@jswork/next-min-by';

// given an array of objects
const arr = [
  { name: 'apple', value: 10 },
  { name: 'banana', value: 20 },
  { name: 'orange', value: 15 },
  { name: 'pear', value: 25 }
];

// find the min value by `value` property
const result = nx.minBy(arr, 'value');
// result: { name: 'apple', value: 10 }  

// find the min value by function
const result2 = nx.minBy(arr, (item) =>item.value);
// result: { name: 'apple', value: 10 }  
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-min-by/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-min-by
[version-url]: https://npmjs.org/package/@jswork/next-min-by

[license-image]: https://img.shields.io/npm/l/@jswork/next-min-by
[license-url]: https://github.com/afeiship/next-min-by/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-min-by
[size-url]: https://github.com/afeiship/next-min-by/blob/master/dist/next-min-by.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-min-by
[download-url]: https://www.npmjs.com/package/@jswork/next-min-by
