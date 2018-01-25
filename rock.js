
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
    self.dx = goRight ? 2 : -2;
    self.dy = 3;

    self.rock = new Image();
    self.rock.src = './img/shinyBall.png';
}

Rock.prototype.update = function () {

    var self = this;

    self.rockX += self.dx;
    self.rockY += self.dy;

    if (self.rockX + self.rockWidth > self.width ||
        self.rockX < 0) {
        self.dx = -self.dx;
    }

    if (self.rockY + self.rockHeight > self.height - 30 ||
        self.rockY < 80) {
        self.dy = -self.dy;
    }
};

Rock.prototype.draw = function () {

    var self = this;

    self.ctx.fillStyle = 'blue';
    self.ctx.drawImage(self.rock, self.rockX, self.rockY, self.rockWidth, self.rockHeight);
};
