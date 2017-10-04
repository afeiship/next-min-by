var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-min-by');

describe('next/minBy', function () {

  it('nx.minBy', function () {
    var objects = [{ 'n': 1 }, { 'n': 2 }];
    var min = nx.minBy(objects, function (_, o) {
      return o.n;
    });

    assert.equal( min.n , 1);
  });

});
