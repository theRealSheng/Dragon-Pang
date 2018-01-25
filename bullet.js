
'use strict';

function Bullet(ctx, width, height, playerX, bulletY, rockArray) {
    var self = this;

    self.ctx = ctx;
    self.width = width;
    self.height = height;
    self.x = playerX + 20;
    self.y = bulletY;
    self.bulletHeight = 0;
    self.bulletWidth = 10;
    self.dy = 10;
    self.rockArray = rockArray;
    self.startTime = new Date();
    self.timeLapse;
    self.totalTime;
};


Bullet.prototype.draw = function () {

    var self = this;

    self.ctx.fillStyle = 'red';
    self.ctx.fillRect(self.x, self.y, self.bulletWidth, self.bulletHeight);
};

Bullet.prototype.update = function () {

    var self = this;

    self.timeLapse = new Date();

    self.bulletHeight -= self.dy;

    if (self.bulletHeight < -440 ){
        self.bulletHeight = -440;
    }

    self.totalTime = self.timeLapse - self.startTime;
};
