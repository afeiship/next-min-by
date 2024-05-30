import nx from '@jswork/next';

nx.minBy = function(inArrayLike, inKey, inOptions) {
  const iterator = typeof inKey === 'function' ? inKey : (x) => x[inKey];
  let min = Infinity;
  let minItem = null;
  for (let i = 0; i < inArrayLike.length; i++) {
    const item = inArrayLike[i];
    const value = iterator(item, i, inArrayLike);
    if (value < min) {
      min = value;
      minItem = item;
    }
  }
  return minItem;
};

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.minBy;
}

export default nx.minBy;
