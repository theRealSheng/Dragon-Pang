
'use strict';

function Game(mainElement) {
    
    var self = this;

    self.mainElement = mainElement;

    self.finished = false;
    self.score = 0;
    self.width = 900;
    self.height = 600;
    self.rockStartPositionX = 450;
    self.rockStartPositionY = 180;
    self.rockWidth;
    self.rockHeight; 
    self.bullet;
    self.bulletY = 520;
    self.onEnd;
    self.rockArray = [];
    self.stage = 1;
    self.lives; 
    self.changeSize = 2;
    self.rock = new Rock(self.ctx, self.width, self.height, self.rockStartPositionX, self.rockStartPositionY, self.rockWidth = 100, self.rockHeight = 100, true, self.rockArray);

    // create dom elements'
    self.canvasElement = document.createElement('canvas');
    self.canvasElement.width = self.width;
    self.canvasElement.height = self.height;
    mainElement.appendChild(self.canvasElement);

    self.ctx = self.canvasElement.getContext('2d');

    self.player = new Player(self.ctx, self.width, self.height);

    self.lives = self.player.lives;

    self.rock = new Rock(self.ctx, self.width, self.height, self.rockStartPositionX, self.rockStartPositionY, self.rockWidth, self.rockHeight, true, self.rockArray)
    self.rockArray.push(self.rock);
    
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

            self.bullet = new Bullet(self.ctx, self.width, self.height, self.player.x, self.bulletY);
        }
    });

    function collionDetection(bullet, rock) {

        self.rockArray.forEach(rock => {

            if (bullet.x < rock.rockX + rock.rockWidth &&
                bullet.x + bullet.bulletWidth > rock.rockX &&
                bullet.y > rock.rockY + rock.rockHeight &&
                bullet.bulletHeight + bullet.y < rock.rockY) {

                    self.bullet = undefined;

                if (rock.rockWidth > 20 && rock.rockHeight > 20 ){
                    self.rockArray.splice(self.rockArray.indexOf(rock), 1);

                    self.score += rock.rockWidth;
                    self.changeSize = 2;

                    self.rock1 = new Rock(self.ctx, self.width, self.height, rock.rockX + 2 * (rock.rockWidth / self.changeSize), rock.rockY, rock.rockWidth / self.changeSize, rock.rockWidth / self.changeSize, true, self.rockArray);
                    self.rock2 = new Rock(self.ctx, self.width, self.height, rock.rockX - 2 * (rock.rockWidth / self.changeSize), rock.rockY, rock.rockWidth / self.changeSize, rock.rockWidth / self.changeSize, false, self.rockArray);

                    self.rockArray.push(self.rock1);
                    self.rockArray.push(self.rock2);

                } 
                else{
                    self.rockArray.splice(self.rockArray.indexOf(rock), 1);
                }

                if (self.rockArray.length === 0){
                    self.onEnd();
                }
            }
        });
    };

    function rockCollidesGoku(rock, player){

        self.rockArray.forEach(rock => {
            if (player.x < rock.rockX + rock.rockWidth &&
                player.x + player.size > rock.rockX &&
                player.y < rock.rockY + rock.rockHeight &&
                player.size + player.y > rock.rockY) {
                self.startHitTime = new Date();

                player.lives -= 1;    

                if (player.lives < 1){
                    self.onEnd();
                }
            }
        });
    };

    function shotTimeLapse() {

        var self = this;

        self.bullet = undefined;

    };

    function freeHitTime() {

    }

    function doFrame() { 

        // logic
        // @todo update self.score;

        if(self.bullet !== undefined){
            collionDetection(self.bullet, self.rock);
        }

        
        self.rockArray.forEach(rock => rockCollidesGoku(rock, self.player));

        self.player.update();

        self.rockArray.forEach(rock => rock.update());

        if (self.bullet !== undefined){
            self.bullet.update()

            if (self.bullet.totalTime > 2000) {
                self.bullet = undefined;
            }
        }

        // drawing
        self.ctx.clearRect(0, 0, self.width, self.height);

        backgroundScreen(self.ctx, self.score, self.stage, self.lives)

        self.player.draw();
        self.rockArray.forEach(rock => rock.draw());

        // self.rockArray.forEach((rock)=>{
        //     if(rock.x === rock)
        // })

        if (self.bullet !== undefined){
            self.bullet.draw();
        }

        if (!self.finished) {
            window.requestAnimationFrame(doFrame);
        }
    }

    function backgroundScreen(ctx, score, stage, lives) {

        //***** Drawing 
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, 900, 80);

        // Lives
        ctx.font = "20px Comic Sans MS";
        ctx.fillStyle = "green";
        ctx.fillText("Lives: " + lives, 20, 50);

        // Stage
        ctx.font = "20px Comic Sans MS";
        ctx.fillStyle = "green";
        ctx.fillText("Stage: " + stage, 250, 50);

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
        ctx.fillRect(0, 80, 900, 450);

        // walking area
        ctx.fillStyle = "brown";
        ctx.fillRect(0, 520, 900, 80);
    };

    window.requestAnimationFrame(doFrame);
};

Game.prototype.destroy = function () {
    var self = this;
    self.finished = true;

    self.canvasElement.remove();

    document.removeEventListener('keydown', self.handleKeyDown);
};

Game.prototype.onGameOver = function (callBack) {
    
    var self = this;

    self.onEnd = callBack;
}
