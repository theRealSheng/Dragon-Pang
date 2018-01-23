
'use strict';

function Bullet(ctx, width, height, playerX, playerY, selfSize) {
    var self = this;

    self.ctx = ctx;
    self.x = playerX;
    self.y = playerY;
    self.width = width;
    self.height = height;
    self.bulletHeight = selfSize;

};


Bullet.prototype.draw = function () {
    var self = this;

    self.ctx.fillStyle = 'red';
    self.ctx.fillRect(self.x, self.y, self.size / 2, self.bulletHeight);
};

Bullet.prototype.update = function () {

    self.bulletHeight += 20;

    if (self.bulletHeight > self.height) {
        self.bulletHeight = self.height;
    }
}
