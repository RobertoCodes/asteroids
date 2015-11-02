var Asteroids = window.Asteroids = window.Asteroids || {};

Asteroids.Ship = function (pos, game) {
  this.vel = [0,0];
  this.RADIUS = 25;
  this.COLOR = "#FF0";
  this.pos = pos;
  this.game = game;
  Asteroids.MovingObject.call(this, {color: this.COLOR, radius: this.RADIUS, pos: pos, vel: this.vel});

}

Asteroids.inherits(Asteroids.Ship, Asteroids.MovingObject);

Asteroids.Ship.prototype.relocate = function () {

  this.pos = this.game.randomPosition();
  this.vel = [0,0];

};

Asteroids.Ship.prototype.power = function (impulse) {
  this.vel[0] += impulse[0];
  this.vel[1] += impulse[1];
}

Asteroids.Ship.prototype.calculateImpulse = function (keys) {

  var impulse = [0,0];
  if (keys.indexOf(37) != -1) {
    impulse[0] -= 1
  }
  if (keys.indexOf(38) != -1) {
    impulse[1] -= 1
  }
  if (keys.indexOf(39) != -1) {
    impulse[0] += 1
  }
  if (keys.indexOf(40) != -1) {
    impulse[1] += 1
  }
  return impulse;
}

Asteroids.Ship.prototype.fireBullet = function () {
  var bullet = new Asteroids.Bullet(this.pos, this.vel, this.game);
  this.game.add(bullet);
}
