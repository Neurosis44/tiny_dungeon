/********** CLASSE OBSTACLE ***********/
// params : 
// - game : contexte du jeu en cours
// - player : le joueur en cours
// - mask : mask à afficher (peut etre null)
// - data : les données de l'obstacle depuis obstacles.js
// - x : la position X de l'objet dans le template qui le contient
// - y : la position Y de l'objet dans le template qui le contient 
// - mapX : la position du template sur la map
//*****************
// Remarque : la position de l'objet est alors : 
//      mapX (position du template) + x (position relatif de l'objet dans le template)
/**************************************/
var Obstacle = function(game, player, mask, data, x , y, position, mapX) {

    // On conserve certaine données
    this.hauteur = data.height;
    this.largeur = data.width;
    this.killingSide = data.killingSide;
    this.bodyPresence = data.body;
    this.topSawPosition = data.topSawPosition;
    this.bottomSawPosition = data.bottomSawPosition;
    this.yMovement = data.yMovement;
    
    
    Phaser.Sprite.call(this, game, x, y, data.name);
    
    // on calcule la position de l'objet
    this.x = x + mapX;
    this.y = y - this.hauteur;
    //console.log("[Obstacle - Constructeur] placement dun objet en X:"+this.x);
    
    if(position=="floor"){
        // placement de l'obstacle sur la map (hauteur map - marge bas (taille sol) - taille de l'objet)
        this.y = stageSize.height - FLOORSIZE - this.hauteur;
    } else if(position =="roof"){
        this.y = ROOFSIZE;
    } else if(position =="random" && this.yMovement == true){
        this.y = Math.floor(Math.random() * this.bottomSawPosition + this.topSawPosition) - (this.hauteur/2);
    } else if(position == "none"){
        this.y = y;
    }
    
    if(data.animations){
        console.log("create animations "+data.animations[0].name);
        this.animations.add(data.animations[0].name, data.animations[0].sprites, data.animations[0].speed, true);
        this.animations.play('default');
    }
    
    // Ajout du player pour pouvoir gérer les collisions
    this.player = player;
    
    // Ajout du layer de collision pour les collisions du terrain
    this.layerCollision = game.layerCollision;
    
    // Gestion du masque
    this.mask = mask;

    // Enable Arcade Physics for the sprite
    
    game.physics.enable(this, Phaser.Physics.ARCADE);
    // TODO gérer la taille du body dans les cas particulier   
    game.physics.arcade.enableBody(this);
    this.body.setSize(this.largeur, this.hauteur, 0, 0);
    this.anchor.setTo(0, 0)
    this.scale.setTo(1);
    this.body.immovable = data.immovable; 
    this.body.moves = data.moves;
    // Gestion des mouvements
    this.yVelocity = data.yVelocity;
    this.yCurrentVelocity =  this.yVelocity;
    this.xCurrentVelocity =  this.xVelocity;

    //console.log("spawn at : x=" + this.x + "; y=" + this.y + " - player : x=" + this.player.x + ";y=" + this.player.y);

}

Obstacle.prototype = Object.create(Phaser.Sprite.prototype);
Obstacle.prototype.constructor = Obstacle;

Obstacle.prototype.update = function() {

    //game.physics.arcade.collide(player, this, this.CollisionPlayerHandler);
    
    // Si on est en mouvement et qu'on atteint le bout, on change de sens
    if(this.yMovement && this.y < this.topSawPosition){
        //console.log("Y: "+this.y+" | "+this.firstYPosition+"_"+this.lastYPosition);
        this.yCurrentVelocity = this.yVelocity * -1;
    }
    if(this.yMovement && this.y > this.bottomSawPosition){
        this.yCurrentVelocity = this.yVelocity;
    }
    
    // On met à jour les vitesses
    this.body.velocity.y = this.yCurrentVelocity;
    this.body.velocity.x = this.xCurrentVelocity;
    
    // Gestion des collisions.
    if(this.bodyPresence==true){
        // On collisionne avec le joueur en fonction des propriétés de l'objet
        game.physics.arcade.collide(this, this.player, this.playerCollisionHandler);
    }
    game.physics.arcade.collide(this, this.layerCollision);
    
    //checkWorldBounds(this, this.player);
    
    moveMask(this.mask, this.player);

}

Obstacle.prototype.render = function() {
    //game.debug.body(this);
}

// Appelé quand le joueur touche un obstacle
Obstacle.prototype.playerCollisionHandler = function(obstacle, player) {
    player.canJump = true;
    player.jumpNumber = 0;
    checkDeathCollision(obstacle, player);
}

// Appelé quand le joueur touche un obstacle
function checkDeathCollision(obstacle, player) {
    if(obstacle.body.touching.left == true && obstacle.killingSide == "left"){
        game.state.start('gameOverState');
    }
    if((obstacle.body.touching.left ||
       obstacle.body.touching.down ||
       obstacle.body.touching.right ||
       obstacle.body.touching.up)
       && obstacle.killingSide == "all"){
        game.state.start('gameOverState');
    }
}

// Detecte si on doit faire disparaitre l'obstacle (hors de l'écran et dépassé par le joueur)
// (TODO : le fait de supprimer un obstacle ne doit PAS GENERER UN TEMPLATE ENTIER.
//  il faut recréer un template quand le nombre d'item du template précedent à bien été supprimé)
function checkWorldBounds(obstacle, player) {  
      if(!obstacle.inWorld && player.x > obstacle.x) {
            obstacle.destroy();
            GenerateNextObstacle(game, player, mask);
      }
}

// Génère le prochain obstacle
// ATTENTION : incoming algo de gros bourrin
function GenerateNextObstacle(game, player, mask) {
    // On récupère un templates au hasard
    // (TODO : récupérer le template en fonction de la map et de la difficulté)
    var obstTemplate = null;
    // On récupère un template au hasard
    var obstTemplate = contexte.obstaclesTemplatesList[Math.floor(Math.random()*contexte.obstaclesTemplatesList.length)];
    
    // On génère chaque obstacle en fonction du template
    var obstacleID = "0";
    var obstacleData = null;
    var x = 0;
    var y = 0;
    // On boucle sur les ID du template
    if(obstTemplate != null){
        for(var indexObst = 0; indexObst < obstTemplate.obstaclesList.length; indexObst++){

            // On récupère l'id en cours, ainsi que les positions (relatives) de l'objet dans le template
            obstacleID = obstTemplate.obstaclesList[indexObst].obstacleId;
            // position x de l'objet dans le template
            x = obstTemplate.obstaclesList[indexObst].x;
            // position y de l'objet dans le template
            y = obstTemplate.obstaclesList[indexObst].y;
            position = obstTemplate.obstaclesList[indexObst].position;
            
            // On récupère les données de l'objet en cours
            obstacleData = GetObstacleByID(obstacleID);
            obstacleData.topSawPosition = obstTemplate.topSawPosition;
            obstacleData.bottomSawPosition = obstTemplate.bottomSawPosition;

            // On crée l'objet
            var obstacle = this.game.add.existing(
                new Obstacle(game, player, mask, obstacleData, x, y, position, this.game.nextTemplatePosition)
            );
            
            // On récupère la premiere position Y pour les obstacles mouvants (TODO: a faire plus tard pour le X)
            if(indexObst == 0){
                firstYPosition = obstacle.y;
                lastYPosition = obstacle.y + obstTemplate.height;
            } 

            // On l'ajout au groupe d'obstacles
            this.game.obstacleGroup.add(obstacle);
        }
    }
    
    // On met à jour la position du prochain template
    // -- Position du template actuel + l'espace à laisser entre les deux templates
    this.game.nextTemplatePosition += 
        obstTemplate.width + Math.floor((Math.random() * obstTemplate.maxSpaceRequired) + obstTemplate.minSpaceRequired);
}

// Récupère un obstacle à partir de son ID
function GetObstacleByID(obstID){
    for(var indexObstacle = 0; indexObstacle < contexte.obstaclesList.length; indexObstacle++){
        if(contexte.obstaclesList[indexObstacle].id == obstID){
            return contexte.obstaclesList[indexObstacle];   
        }
    }
    return null;
};

