'use strict';

function Game(mainElement) {
    var self = this;

    self.mainElement = mainElement;

    self.finished = false;
    self.score = 0;
    self.width = 900;
    self.height = 600;

    // create dom elements'
    self.canvasElement = document.createElement('canvas');
    self.canvasElement.width = self.width;
    self.canvasElement.height = self.height;
    mainElement.appendChild(self.canvasElement);

    self.ctx = self.canvasElement.getContext('2d');

    self.player = new Player(self.ctx, self.width, self.height);
    // create array of enemies



    self.handleKeyDown = function (event) {
        var key = event.key.toLowerCase();
        switch (key) {
            case 'a':
                self.player.setDirection('W');
                break;
            case 'd':
                self.player.setDirection('E');
                break;
            case 's':
                self.player.setDirection('S');
                break;
            case 'w':
                self.player.setDirection('N');
                break;
        }

    };

    document.addEventListener('keydown', self.handleKeyDown);

    function doFrame() {

        // logic
        self.score;
        self.player.update();

        // drawing
        self.ctx.clearRect(0, 0, self.width, self.height);


        //***** Drawing 
        self.ctx.fillStyle = "black";
        self.ctx.fillRect(0, 0, 900, 80);

        // Lives
        self.ctx.font = "20px Comic Sans MS";
        self.ctx.fillStyle = "green";
        self.ctx.fillText("Lives: ", 20, 50);

        // Stage
        self.ctx.font = "20px Comic Sans MS";
        self.ctx.fillStyle = "green";
        self.ctx.fillText("Stage: ", 250, 50);

        // Time Remaining text
        self.ctx.font = "20px Comic Sans MS";
        self.ctx.fillStyle = "red";
        self.ctx.fillText("Time Remaining: ", 450, 50);

        // Position title
        self.ctx.font = '20px Arial, sans-serif';
        self.ctx.fillStyle = "red";
        self.ctx.fillText("Points: " + self.score, 750, 50);

        // sky area
        self.ctx.fillStyle = "lightblue";
        self.ctx.fillRect(0, 80, 900, window.innerHeight - 150);

        // walking are
        self.ctx.fillStyle = "brown";
        self.ctx.fillRect(0, 520, 900, 80);

        self.player.draw();

        // Rock

        self.ctx.arc(450, 400, 90, 0 , Math.PI * 2, false);
        self.ctx.fillStyle = 'blue';
        self.ctx.fill();
        self.ctx.stroke();

        if (!self.finished) {
            window.requestAnimationFrame(doFrame);
        }
    }

    window.requestAnimationFrame(doFrame);
}

Game.prototype.destroy = function () {
    var self = this;
    self.finished = true;

    self.canvasElement.remove();

    document.removeEventListener('keydown', self.handleKeyDown);
};