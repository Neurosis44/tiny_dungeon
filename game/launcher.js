//This line instantiates a new Phaser Game with a resolution of 1136x640 (iPhone5 Res), names it 'game', 
//and adds GameState as the default state.
var contexte = new Contexte(obstaclesList);
var game = new Phaser.Game(1248, 768, Phaser.AUTO, 'game');
game.state.add('gameOverState', GameOverState, false);
game.state.add('gameState', GameState, false);
game.state.add('shopState', ShopState, false);
game.state.add('mainMenuState', MainMenuState, true);