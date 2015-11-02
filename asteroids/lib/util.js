var util = window.Asteroids = window.Asteroids || {};

util.inherits = function (ChildClass,ParentClass) {
  var Surrogate = function () {};
  Surrogate.prototype = ParentClass.prototype;
  ChildClass.prototype = new Surrogate ();
  ChildClass.prototype.constructor = ChildClass;
};

util.randomVec = function (length) {
  var x = Math.random() * length;
  var xMult = [-1,1][Math.floor(Math.random() * 2)]
  var yMult = [-1,1][Math.floor(Math.random() * 2)]
  var y = Math.sqrt(Math.pow(length,2) - Math.pow(x,2));
  return [x * xMult, y * yMult];
};

util.dist = function (pos1, pos2) {
  return Math.sqrt((Math.pow((pos1[0] - pos2[0]), 2) + (Math.pow((pos1[1] - pos2[1]), 2))));

};

util.scaleVector = function (vector, scale) {
  var slope = vector[1] / vector[0]

  return [(vector[0] + (scale * slope) ), (vector[1] + (scale * slope))]
};
