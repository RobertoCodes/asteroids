
var sum = function () {
  var args = Array.prototype.slice.call(arguments);
  var sum = 0;
  args.forEach(function (el) {
    sum += el;
  });
  return sum;
};

Function.prototype.myBind = function (context) {
  var args = Array.prototype.slice.call(arguments, 1);
  var fn = this;
  return function (arguments) {
    return fn.apply(context, args);
  };
};

var curriedSum = function (numArgs) {
  debugger;
  var numbers = [];
  var _curriedSum = function (num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      var sum = 0;
      numbers.forEach(function (el) {
        sum += el;
      })
       return sum;
    }
    else {
      return _curriedSum;
    }
  };
  return _curriedSum;
};

Function.prototype.curry = function (numArgs) {
  var fn = this;
  var args = [];
  var _curried = function (arg) {
    args.push(arg);
    if (args.length === numArgs){
      return fn.apply(fn, args);
    }
    else {
      return _curried;
    }
  }
  return _curried;
};

var sum = function () {
  var args = Array.prototype.slice.call(arguments);

  var sum = 0
  args.forEach(function (el) {
    sum += el
  });
  return sum;
};

function Animal (name) {
  this.name = name;
}

Animal.prototype.sayHello = function () {
  console.log("Hello, my name is " + this.name);
};

function Dog (name, coatColor) {
  Animal.call(this, name);
  this.coatColor = coatColor;
};

Function.prototype.inherits = function (SuperClass) {
  var Surrogate = function () {};
  Surrogate.prototype = SuperClass.prototype;
  this.prototype = new Surrogate ();
  this.prototype.constructor = this;
};

Dog.inherits(Animal);

Dog.prototype.bark = function () {
  console.log("Bark!");
};

// Function.prototype.inherits = function (SuperClass) {
//   var Surrogate = function () {};
//   Surrogate.prototype = SuperClass.prototype;
//   this.prototype = new Surrogate ();
//   this.prototype.constructor = this;
// };
