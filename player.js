
'use strict';

function Player(ctx, width, height) {

    var self = this;

    self.size = 150;
    self.ctx = ctx;
    self.gameWidth = width;
    self.gameHeight = height;
    self.x = self.gameWidth / 2 - 70;
    self.y = 450;
    self.bullet = null;
    self.lives = 3;
    self.gokuTime;
    self.inmortal = false;

    self.gokuOne = new Image();
    self.gokuOne.src = './img/playerGoku.png';

}

Player.prototype.moveRight = function (code) {

    var self = this;

    self.x += 15;
};

Player.prototype.moveLeft = function (code) {

    var self = this;

    self.x -= 15;
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
    self.ctx.drawImage(self.gokuOne, self.x, 450, self.size, self.size);
};

// Player.prototype.untouchable = function () {
    
//     self.inmortal != self.inmortal;

// }
