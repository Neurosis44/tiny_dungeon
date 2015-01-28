var GameState = function(game) {};

GameState.prototype.preload = function() {
    //We're preloading all the assets for the game to avoid any potential load-lag later.
    game.load.spritesheet('player', 'assets/heroRunSprite.png', 160, 160);
    game.load.spritesheet('castleDoor', 'assets/castleDoorSprite.png', 169, 243);
    game.load.tilemap('castleLevel', 'assets/tilemap/castleLevel.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('castle_tileset', 'assets/tilemap/castle_tileset.png');
    //game.load.image('mines_128', 'assets/tilemap/mines_tileset.png');
    game.load.image('bloc1x1', 'assets/bloc1x1.png');
    game.load.image('bloc1x2', 'assets/bloc1x2.png');
    game.load.image('bloc3x3', 'assets/bloc3x3.png');
    game.load.image('verticalSlider1', 'assets/verticalSlider1.png');
    game.load.image('verticalSlider2', 'assets/verticalSlider2.png');
    game.load.image('verticalSlider3', 'assets/verticalSlider3.png');
    game.load.spritesheet('sawSprite', 'assets/sawSprite.png', 128, 128);
    game.load.image('bloc1x1reversed', 'assets/bloc1x1reversed.png');
};

GameState.prototype.create = function() {
    //This is c-alled immediately after preloading.
    // On recupère les données d'un level
    var levelData = getLevelData();
    // On initialise le level
    currentLevel = new Level(game, levelData);
    
    // TODO initialiser ça en fonction du gameplay
    game.physics.arcade.gravity.y = 1000;
  
    //Here we add an Player object to the stage. This is constructed using a prototype as defined below.
    player = new Player(game, currentLevel.playerInitPositionX, worldSize.height - FLOORSIZE - 200, currentLevel.layerCollision)
    game.add.existing(player);
    
    mask = null;
    /**************************************************************/
    // CODE POUR BLIND LEVEL     
    //	A mask is a Graphics object
    /*mask = game.add.graphics(0, 0);
    //	Shapes drawn to the Graphics object must be filled.
    mask.beginFill(0xffffff);
    //	Here we'll draw a circle
    mask.drawCircle(0, 0, 1200);
    //	And apply it to the Sprite
    layerFond.mask = mask;*/
    //layerCollision.mask = mask;
    /***************************************************************/

    // Generation des premiers obstacles
    this.game.obstacleGroup = this.game.add.group();
    // Position X du prochain template sur la map
    this.game.nextTemplatePosition = currentLevel.firstObstaclePosition;
    // On intialiser l'espace entre les templates
    this.game.obstacleGroup.spaceRequired = 0;

    while(this.game.nextTemplatePosition < currentLevel.endingDoorPosition){
        // On crée 4 templates avant le début de partie
        GenerateNextObstacle(this.game, player, mask);
    }
    this.game.world.bringToTop(player);

}

GameState.prototype.update = function() {
    //This method is called every frame.
    
    //On met à jour les obstacles

    //Update des obstacles
    this.game.obstacleGroup.callAll("update");
    
    // Update du player
    player.update();
    
    // Si le joueur atteint la porte de fin 
    if(player.x >= currentLevel.endingDoorPosition + currentLevel.doorWidth/2){
        game.state.add('gameState', GameState, true);
    }
    
    if(mask) moveMask(mask, player);

}

GameState.prototype.render = function() {
    //This method is called every frame.
    player.render();
    currentLevel.render();
    this.game.obstacleGroup.callAll("render");
    //game.debug.cameraInfo(game.camera, 32, 32)
}

function moveMask(mask, player) {  
    if(mask){
        mask.x = player.x;
        mask.y = player.y;
    }
}