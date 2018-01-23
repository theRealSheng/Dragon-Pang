
'use strict';

function Game(mainElement) {

    var self = this;

    self.mainElement = mainElement;

    self.finished = false;
    self.score = 0;
    self.width = 900;
    self.height = 600;
    self.rockStartingPositionX = 450;
    self.rockStartingPositionY = 180;
    self.rockRadius = 100;

    // create dom elements'
    self.canvasElement = document.createElement('canvas');
    self.canvasElement.width = self.width;
    self.canvasElement.height = self.height;
    mainElement.appendChild(self.canvasElement);

    self.ctx = self.canvasElement.getContext('2d');

    self.player = new Player(self.ctx, self.width, self.height);
    self.rock = new Rock(self.ctx, self.width, self.height, self.rockStartingPositionX, self.rockStartingPositionY, self.rockRadius);
    self.bullet = new Bullet(self.ctx, self.width, self.height, self.player.x, self.player.y, self.player.size)

    document.addEventListener('keydown', function(event){

        var code = event.keyCode;
        if (code === 68 || code === 39) {
            self.player.moveRight();
        }

        if (code === 65 || code === 37) {
            self.player.moveLeft();
        }

        // Code for shooting
        if (code === 87 || code === 38 || code === 32){
            self.bullet.draw();
        }
    });

    function doFrame() {

        // logic
        // @todo update self.score;

        self.player.update();
        self.rock.update();
        self.bullet.update();

        // drawing
        self.ctx.clearRect(0, 0, self.width, self.height);

        backgroundScreen(self.ctx, self.score)

        self.player.draw();
        self.rock.draw();
        self.bullet.draw();

        if (!self.finished) {
            window.requestAnimationFrame(doFrame);
        }
    }

    function backgroundScreen(ctx, score) {

        //***** Drawing 
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, 900, 80);

        // Lives
        ctx.font = "20px Comic Sans MS";
        ctx.fillStyle = "green";
        ctx.fillText("Lives: ", 20, 50);

        // Stage
        ctx.font = "20px Comic Sans MS";
        ctx.fillStyle = "green";
        ctx.fillText("Stage: ", 250, 50);

        // Time Remaining text
        ctx.font = "20px Comic Sans MS";
        ctx.fillStyle = "red";
        ctx.fillText("Time Remaining: ", 450, 50);

        // Position title
        ctx.font = '20px Arial, sans-serif';
        ctx.fillStyle = "red";
        ctx.fillText("Points: " + score, 750, 50);

        // sky area
        ctx.fillStyle = "lightblue";
        ctx.fillRect(0, 80, 900, window.innerHeight - 150);

        // walking area
        ctx.fillStyle = "brown";
        ctx.fillRect(0, 520, 900, 80);
    };

    window.requestAnimationFrame(doFrame);
}

Game.prototype.destroy = function () {
    
    var self = this;
    self.finished = true;

    self.canvasElement.remove();

    document.removeEventListener('keydown', self.handleKeyDown);
};
