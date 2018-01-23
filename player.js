'use strict';

function Player(ctx, width, height) {
    var self = this;

    self.size = 50;

    self.ctx = ctx;

    self.gameWidth = width;
    self.gameHeight = height;

    self.x = self.gameWidth / 2;
    self.y = self.gameHeight /2;
    self.direction = null;
}

Player.prototype.setDirection = function (direction) {
    var self = this;

    // @todo not allow to change to opposite direction
    self.direction = direction;
}

Player.prototype.update = function () {
    var self = this;

    switch (self.direction) {
        case 'E':
            self.x += 10;
            break;
        case 'W':
            self.x -= 10;
            break;
        case 'N':
            // self.y -= 10;
            break;
    }

    if (self.x > self.gameWidth) {
        self.x = 0;
    }

    if (self.x < 0) {
        self.x = self.gameWidth;
    }

    if (self.y > self.gameHeight) {
        self.y = 0;
    }

    if (self.y < 0) {
        self.y = self.gameHeight;
    }
}

Player.prototype.draw = function () {
    var self = this;

    self.ctx.fillStyle = 'green';
    self.ctx.fillRect(450, 470, self.size, self.size);
}