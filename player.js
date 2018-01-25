
'use strict';

function Player(ctx, width, height) {

    var self = this;

    self.size = 50;
    self.ctx = ctx;
    self.gameWidth = width;
    self.gameHeight = height;
    self.x = self.gameWidth / 2;
    self.y = 470;
    self.bullet = null;
    self.lives = 3;
    self.gokuTime;
    self.inmortal = false;
}

Player.prototype.moveRight = function (code) {

    var self = this;

    self.x += 10;
};

Player.prototype.moveLeft = function (code) {

    var self = this;

    self.x -= 10;
};

Player.prototype.update = function () {

    var self = this;
    
    if (self.x > self.gameWidth - self.size) {
        self.x = self.gameWidth - self.size;
    }

    if (self.x < 0) {
        self.x = 0;
    }

    self.gokuTime = new Date();

};

Player.prototype.draw = function () {

    var self = this;

    self.ctx.fillStyle = 'green';
    self.ctx.fillRect(self.x, 470, self.size, self.size);
};

// Player.prototype.untouchable = function () {
    
//     self.inmortal != self.inmortal;

// }
