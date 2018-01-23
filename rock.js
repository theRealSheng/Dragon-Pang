
'use strict'

function Rock(ctx, width, height, startingPositionX, startingPositionY, radius) {
    var self = this;

    self.ctx = ctx;
    self.width = width;
    self.height = height;
    self.rockStartingPositionX = startingPositionX;
    self.rockStartingPositionY = startingPositionY;
    self.rockRadius = radius;
    self.dx = 1;
    self.dy = 1;
    
    self.update = function () {
        var self = this;

        self.rockStartingPositionX += self.dx;
        self.rockStartingPositionY += self.dy;

        if (self.rockStartingPositionX + self.rockRadius > self.width ||
            self.rockStartingPositionX < 0 + self.rockRadius) {
            self.dx = -self.dx;
        }

        if (self.rockStartingPositionY + self.rockRadius > self.height - 80 ||
            self.rockStartingPositionY < 80 + self.rockRadius) {
            self.dy = -self.dy;
        } 
    };

    self.draw = function () {
        var self = this;

        self.ctx.beginPath();
        self.ctx.arc(self.rockStartingPositionX, self.rockStartingPositionY, self.rockRadius, 0, Math.PI * 2, false);
        self.ctx.fillStyle = 'blue';
        self.ctx.fill();            
        self.ctx.stroke();

    };
}

// Other way to write it

// Rock.prototype.update = function () {
//     var self = this;

//     self.x += self.dx;
//     self.y += self.dy;

//     if (self.x + self.radius > self.width ||
//         self.x < 0 + self.radius) {
//         self.dx = -self.dx;
//     }

//     if (self.y + self.radius > self.height - 80 ||
//         self.y < 80 + self.radius) {
//         self.dy = -self.dy;
//     }

// };

// Rock.prototype.draw = function () {
//     var self = this;

//     self.ctx.beginPath();
//     self.ctx.arc(self.rockStartingPositionX, self.rockStartingPositionY, self.rockRadius, 0, Math.PI * 2, false);
//     self.ctx.fillStyle = 'blue';
//     self.ctx.fill();
//     self.ctx.stroke();

//     self.rockStartingPositionX += self.dx;
//     self.rockStartingPositionY += self.dy;
// };