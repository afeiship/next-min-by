require('../src');

describe('api.basic test', () => {
  test('min by value', () => {
    const objects = [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 },
      { name: 'Bob', age: 20 }
    ];
    const res = nx.minBy(objects, 'age');
    expect(res).toEqual({ name: 'Bob', age: 20 });
  });

  test('min by function', () => {
    const objects = [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 },
      { name: 'Bob', age: 20 }
    ];
    const res = nx.minBy(objects, (o) => o.age);
    expect(res).toEqual({ name: 'Bob', age: 20 });
  });
});
