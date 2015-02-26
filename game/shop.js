var BUTTON_PLAY_X = 367;
var BUTTON_PLAY_Y = 575;
var BUTTON_OPTIONS_X = 937;
var BUTTON_OPTIONS_Y = 28;
var BUTTON_CHARS_X = 937;
var BUTTON_CHARS_Y = 170;
var BUTTON_QUESTS_X = 937;
var BUTTON_QUESTS_Y = 310;


var ShopState = function(game) {};

ShopState.prototype.preload = function() {
    //Here you can preload images, audio, spritesheets and so on.
    game.load.spritesheet('Hero', 'assets/heroRunSprite.png', 160, 160);
};

ShopState.prototype.create = function() {
    //Position image fond accueil
    
    var hero = game.add.sprite(470, 90, 'Hero');
    hero.animations.add('run', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 20, true);
    hero.animations.play('run');
    hero.scale.setTo(2);

}

ShopState.prototype.update = function() {
    //This method is called every frame.
}

ShopState.prototype.render = function() {

}

launchGame = function() {
    game.state.add('gameState', GameState, true);
}

//The first argument to a button callback is the button itself.
ShopState.prototype.playCallback = function(btn) {
   game.state.add('gameState', GameState, true);
}