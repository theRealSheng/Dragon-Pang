
'use strict';

function Bullet(ctx, width, height, playerX, playerY, selfSize) {
    var self = this;

    self.ctx = ctx;
    self.x = playerX;
    self.y = playerY;
    self.width = width;
    self.height = height;
    self.bulletHeight = selfSize;
    self.dateCreator = new Date();
};


Bullet.prototype.draw = function () {

    var self = this;

    self.ctx.fillStyle = 'red';
    self.ctx.fillRect(self.x +15 , self.y, 20, self.bulletHeight);
};

Bullet.prototype.update = function () {

    var self = this;

    self.bulletHeight -= 20;

    if (self.bulletHeight > self.height + 80) {
        self.bulletHeight = self.height + 80;
    }

    // if (self.dateCreator.getSecond() - self.player.datenow.getSecond() > 5) {
    //     self.ctx.clear();
    // }
}

