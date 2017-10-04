# next-min-by
> This method is like .min except that it accepts iteratee which is invoked for each element in array to generate the criterion by which the value is ranked.


## usage:
```js
var objects = [{ 'n': 1 }, { 'n': 2 }];
var min = nx.minBy(objects, function (_, o) {
  return o.n;
});

// {n: 1}
```
