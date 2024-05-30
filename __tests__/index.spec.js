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

  test('min key is dot.path', () => {
    const objects = [
      { name: 'John', age: 25, address: { height: 180, city: 'New York' } },
      { name: 'Jane', age: 30, address: { height: 170, city: 'Los Angeles' } },
      { name: 'Bob', age: 20, address: { height: 160, city: 'Chicago' } }
    ];
    const res = nx.minBy(objects, 'address.height');
    expect(res).toEqual({ name: 'Bob', age: 20, address: { height: 160, city: 'Chicago' } });
  });

  test('min value has null or undefined', () => {
    const objects = [
      { name: 'John', age: 25, address: { height: 180, city: 'New York' } },
      { name: 'Jane', age: 30, address: { height: 170, city: 'Los Angeles' } },
      { name: 'jay', age: 10, address: { height: 140, city: 'Chicago' } },
      { name: 'Bob', age: 20, address: { height: null, city: 'Chicago' } },
      { name: 'Alice', age: 20, address: null }
    ];
    const res = nx.minBy(objects, 'address.height');
    expect(res).toEqual({ name: 'jay', age: 10, address: { height: 140, city: 'Chicago' } });
  });
});
