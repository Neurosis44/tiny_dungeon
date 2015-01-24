var Level = function(game, data) {

    // données du level
    this.beginningDoorPosition = data.beginningDoorPosition;
    this.endingDoorPosition = data.endingDoorPosition;
    this.playerInitPositionX = data.playerInitPositionX;
    this.firstObstaclePosition = data.firstObstaclePosition;
    this.doorHeight = data.doorHeight;
    this.doorWidth = data.doorWidth;
    this.animationClose = data.animationClose;
    this.animationOpen = data.animationOpen;
    
    // Création de la map
    this.map = game.add.tilemap(data.tilemapName);
    game.physics.arcade.enable(this.map);
    this.map.addTilesetImage(data.tilesetName);
    
    this.layerFond = this.map.createLayer('fond');
    this.layerFond.resizeWorld();
    this.layerCollision = this.map.createLayer('sol');
    this.layerCollision.resizeWorld(); // Sets the world size to match the size of this layer.
    this.map.setCollision(data.collisionsTiles, true, this.layerCollision, true);
    
    // On affiches les portes : 
    this.beginningDoor = game.add.sprite(this.beginningDoorPosition, worldSize.height - FLOORSIZE - this.doorHeight, 'castleDoor');
    this.beginningDoor.animations.add('close', this.animationClose.sprites, this.animationClose.speed, false);
    this.beginningDoor.animations.play('close');
    this.endingDoor = game.add.sprite(this.endingDoorPosition, worldSize.height - FLOORSIZE - this.doorHeight, 'castleDoor');
    
}

Level.prototype.constructor = Level;
Level.prototype.update = function() {

}

Level.prototype.render = function() {
    //game.debug.body(this);
}


function getLevelData(id){
    return contexte.levelsList[Math.floor(Math.random()*contexte.levelsList.length)];
};