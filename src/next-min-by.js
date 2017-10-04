(function () {

    var global = global || this || self || window;
    var nx = global.nx || require('next-js-core2');

    nx.minBy = function (inArray, inCallback) {
      var items = nx.map(inArray, inCallback);
      var minValue = Math.min.apply( null, items );
      var minIndex = items.indexOf(minValue);
      return inArray[ minIndex ];
    };


    if (typeof module !== 'undefined' && module.exports) {
      module.exports = nx.minBy;
    }

  }());
