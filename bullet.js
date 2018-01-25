
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
    self.hit = new Audio('./sounds/dragon_ball_z_scream_9-RA_The_Sun_God-952538986.mp3');
};

Bullet.prototype.update = function () {

    var self = this;

    self.timeLapse = new Date();

    self.bulletHeight -= self.dy;

    if (self.bulletHeight < -490 ){
        self.bulletHeight = -490;
    }

    self.totalTime = self.timeLapse - self.startTime;
};

Bullet.prototype.draw = function () {

    var self = this;

    self.ctx.fillStyle = 'red';
    self.ctx.fillRect(self.x + 30, self.height - 30, self.bulletWidth, self.bulletHeight);
};

// Bullet.prototype.hitting = function () {
//     var self = this;

//     // function play() {
//     //     self.hit;
//     //     if (audio.paused) {
//     //         audio.play();
//     //     } else {
//     //         audio.currentTime = 0
//     //     }
//     // }

//     self.hit.play();

// }
