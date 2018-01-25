
'use strict'

function Rock(ctx, width, height, startPositionX, startPositionY, rockWidth, rockHeight, goRight) {

    var self = this;

    self.ctx = ctx;
    self.width = width;
    self.height = height;
    self.rockX = startPositionX;
    self.rockY = startPositionY;
    self.rockWidth = rockWidth;
    self.rockHeight = rockHeight;
    self.dx = goRight ? 3 : -3;
    self.dy = 3;
}

Rock.prototype.update = function () {

    var self = this;

    self.rockX += self.dx;
    self.rockY += self.dy;

    if (self.rockX + self.rockWidth > self.width ||
        self.rockX < 0) {
        self.dx = -self.dx;
    }

    if (self.rockY + self.rockHeight > self.height - 80 ||
        self.rockY < 80) {
        self.dy = -self.dy;
    }
};

Rock.prototype.draw = function () {

    var self = this;

    self.ctx.fillStyle = 'blue';
    self.ctx.fillRect(self.rockX, self.rockY, self.rockWidth, self.rockHeight);
};
