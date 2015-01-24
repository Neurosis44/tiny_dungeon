var levelsList = [{
    id: "L01",
    levelWidth: 6400,
    levelHeight: 768,
    tilemapPath: "assets/tilemap/castleLevel2.json",
    tilesetPath: "assets/tilemap/castle_tileset.png",
    tilemapName: "castleLevel",
    tilesetName: "castle_tileset",
    beginningDoorPosition: 100,
    endingDoorPosition: 6200,
    playerInitPositionX: 170,
    playerInitPositionY: 0,
    firstObstaclePosition: 1000,
    gameplays: ["running"],
    collisionsTiles: [11, 35],
    doorSpriteName : "castleDoor",
    doorSpriteImage: "assets/castleDoorSprite.png",
    doorHeight : 243,
    doorWidth : 169,
    animationOpen: {
        sprites: [5],
        speed: 1
    },
    animationClose: {
        sprites: [4,3,2,1,0],
        speed: 10
    }
}];