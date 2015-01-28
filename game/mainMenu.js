var BUTTON_PLAY_X = 367;
var BUTTON_PLAY_Y = 575;
var BUTTON_OPTIONS_X = 937;
var BUTTON_OPTIONS_Y = 28;
var BUTTON_CHARS_X = 937;
var BUTTON_CHARS_Y = 170;
var BUTTON_QUESTS_X = 937;
var BUTTON_QUESTS_Y = 310;


var MainMenuState = function(game) {};

MainMenuState.prototype.preload = function() {
    //Here you can preload images, audio, spritesheets and so on.
    game.load.spritesheet('AccueilFond', 'assets/AccueilFond.png', stageSize.width, stageSize.height);
    game.load.spritesheet('PlayButton', 'assets/boutonPlaySprite.png', 497, 172);
    game.load.spritesheet('OptionsButton', 'assets/boutonOptionsSprite.png', 300, 112);
    game.load.spritesheet('CharactersButton', 'assets/boutonCharactersSprite.png', 300, 112);
    game.load.spritesheet('QuestsButton', 'assets/boutonQuestsSprite.png', 300, 112);
    game.load.spritesheet('Hero', 'assets/heroRunSprite.png', 160, 160);
};

MainMenuState.prototype.create = function() {
    //Position image fond accueil
    fond = game.add.sprite(stageSize.width, stageSize.height, 'AccueilFond');
    fond.x = 0;
    fond.y = 0;
    
    // Bouton PLAY
    var playButton = 
        game.add.button(BUTTON_PLAY_X, BUTTON_PLAY_Y, 'PlayButton', this.playCallback, this, 0, 0, 1);
    
    // Bouton PLAY
    var optionsButton = 
        game.add.button(BUTTON_OPTIONS_X, BUTTON_OPTIONS_Y, 'OptionsButton', this.playCallback, this, 0, 0, 1);
    
    // Bouton Persos
    var charactersButton = 
        game.add.button(BUTTON_CHARS_X, BUTTON_CHARS_Y, 'CharactersButton', this.playCallback, this, 0, 0, 1);
    
    // Bouton quetes
    var questsButton = 
        game.add.button(BUTTON_QUESTS_X, BUTTON_QUESTS_Y, 'QuestsButton', this.playCallback, this, 0, 0, 1);
    
    var hero = game.add.sprite(470, 90, 'Hero');
    hero.animations.add('run', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 20, true);
    hero.animations.play('run');
    hero.scale.setTo(2);

}

MainMenuState.prototype.update = function() {
    //This method is called every frame.
}

MainMenuState.prototype.render = function() {

}

launchGame = function() {
    game.state.add('gameState', GameState, true);
}

//The first argument to a button callback is the button itself.
MainMenuState.prototype.playCallback = function(btn) {
   game.state.add('gameState', GameState, true);
}