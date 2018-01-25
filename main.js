
'use strict';

function main() {

    var mainElement = document.querySelector('#site-main');
    var stage;
    var game;
    var dragonBallSong = new Audio('./sounds/DragonBallISong.mp3');
    // -- SPLASH

    var splashElement;
    var startGameButton;
    var handleStartClick = function () {
        destroySplash();
        buildGame();
    };

    function buildSplash() {
        stage = 'splash';

        // create dom elements
        splashElement = document.createElement('div');
        splashElement.setAttribute('id', 'splash');

        // create tittle
        // var title = document.createElement('h1');
        // title.innerText = 'TH3 G4M3';
        // splashElement.appendChild(title);

        // create button
        startGameButton = document.createElement('button');
        startGameButton.innerText = 'Start';
        splashElement.appendChild(startGameButton);

        // apppend to site-main
        mainElement.appendChild(splashElement);

        // bind click on start play button
        startGameButton.addEventListener('click', handleStartClick);

        dragonBallSong.play();
    }

    function destroySplash() {
        // unbind click on start play button
        startGameButton.removeEventListener('click', handleStartClick);
        // remove splash from dom
        splashElement.remove();
    }

    // -- GAME

    function buildGame() {
        stage = '1';
        game = new Game(mainElement);

        game.onGameOver(function () {
            destroyGame();
            buildGameOver(game.score);
        });   
    }

    function destroyGame() {
        game.destroy();
    }

    // -- GAME OVER

    var gameOverElement;
    var playAgainButton;

    var handlePlayAgainClick = function () {
        destroyGameOver();
        buildGame();
    };

    function buildGameOver(score) {
        stage = 'gameOver';

        // create dom elements
        gameOverElement = document.createElement('div');
        gameOverElement.setAttribute('id', 'game-over');

        var title = document.createElement('h1');
        title.innerText = 'Game Over';
        gameOverElement.appendChild(title);

        var yourScore = document.createElement('h2');
        yourScore.innerText = 'Your score: ' + score;
        gameOverElement.appendChild(yourScore);

        playAgainButton = document.createElement('button');
        playAgainButton.innerText = 'Play Again';
        gameOverElement.appendChild(playAgainButton);

        // apppend to site-main
        mainElement.appendChild(gameOverElement);

        // bind click on start play button
        playAgainButton.addEventListener('click', handlePlayAgainClick);
    }

    function destroyGameOver() {
        // unbind click on start play button
        playAgainButton.removeEventListener('click', handlePlayAgainClick);
        // remove gameOver from dom
        gameOverElement.remove();
    }

    buildSplash();

}

window.onload = main;
