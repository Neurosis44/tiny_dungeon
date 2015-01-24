var GameOverState = function(game) {};

GameOverState.prototype.preload = function() {
    //Here you can preload images, audio, spritesheets and so on.
    game.load.spritesheet('fond', 'assets/Ground1.png', 128, 128);
};

GameOverState.prototype.create = function() {
    //This is called immediately after preloading.
    fond = game.add.sprite(128, 128, 'fond');
    fond.x = 0;
    fond.y = 0;

    this.Perdu = this.game.add.text(
        20, 20, '', {
            font: '32px Arial',
            fill: '#ffffff'
        }
    );

}

GameOverState.prototype.update = function() {
    //This method is called every frame.
    if (this.Perdu !== "Perdu") {
        this.Perdu.setText("Perdu");
    }

    game.input.onDown.addOnce(newGame, this);
}

GameOverState.prototype.render = function() {

}

function newGame() {
    game.state.add('gameState', GameState, true);
}