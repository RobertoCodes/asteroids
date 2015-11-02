var gObj = window.Asteroids = window.Asteroids || {};

gObj.GameView = function (game) {
  this.game = game;
}

gObj.GameView.prototype.start = function (canvasEl) {
  var ctx = canvasEl.getContext("2d");
  this.ctx = ctx;
  var img = new Image();
  img.src = 'image/bg.jpg';
  img.onload = function () {
    ctx.drawImage(img, 0, 0);
  };

  window.setInterval((function () {
    this.game.step();
    this.game.draw(ctx, img);
    console.log(key.getPressedKeyCodes())

    var pressedKeys = key.getPressedKeyCodes();
    this.game.ship.power(this.game.ship.calculateImpulse(pressedKeys))
    if (pressedKeys.indexOf(32) != -1) {
      this.game.ship.fireBullet();
    }
  }).bind(this), 40);

};
