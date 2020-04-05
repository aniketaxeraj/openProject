const obj = {
    _arr: null,
    constructor: function (arr) {
      this._arr = arr;
    },
    forEach: function (callback, index = 0) {
      if (index === this._arr.length) return;
      callback(this._arr[index], index);
      return this.forEach(callback, ++index);
    },
  };
  const o = Object.create(obj);
  
  o.constructor([1, 2, 3, 4, 5, 6]);

  o.forEach((elem, index) => {
    console.log("elements ", elem, "index ", index);
  });