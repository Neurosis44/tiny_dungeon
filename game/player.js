var PLAYER_SPEED = 200;

var Player = function(game, x, y, layerSol) {

    Phaser.Sprite.call(this, game, x, y, 'player');

    // Score de la partie
    this.score = 0;

    //	Enable Arcade Physics for the sprite
    game.physics.enable(this, Phaser.Physics.ARCADE);
    game.physics.arcade.enableBody(this);

    this.body.setSize(70, 120, 0, 32);
    this.anchor.setTo(0.5, 0);
    this.y = y;
    this.x = x;
    this.scale.setTo(1);
    
    // Repris de l'example pour le deplacement. pourra etre enlevé/remanié
    this.facing = 'left';
    this.jumpTimer = '0';
    this.canJump = true;
    this.isJumping = false;
    this.layer = layerSol;
    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    
    this.jumpNumber = 0;

    this.animations.add('left', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 20, true);
    this.animations.add('turn', [4], 20, true);
    this.animations.add('right', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 20, true);
    this.animations.add('default', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 20, true);

    this.body.collideWorldBounds = true;
    this.body.bounce.y = 0.1;

    this.animations.play('default');

    //this.easer = .5;

}

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function() {

    game.physics.arcade.collide(player,  this.layer);
    
    // Placement de la camera
    game.camera.x = this.x - 250;
    
    this.body.velocity.x = 0;
    
    // DEPLACEMENT *************************************
    if (cursors.left.isDown)
    {
        this.body.velocity.x = -400;

        if (this.facing != 'left')
        {
            this.animations.play('left');
            this.facing = 'left';
        }
    }
    else if (cursors.right.isDown)
    {
        this.body.velocity.x = 400;

        if (this.facing != 'right')
        {
            this.animations.play('right');
            this.facing = 'right';
        }
    }
    else
    {
        if (this.facing != 'idle')
        {
            this.animations.stop();

            if (this.facing == 'left')
            {
                this.frame = 0;
            }
            else
            {
                this.frame = 5;
            }

            this.facing = 'idle';
        }
    }
    
    // Gestion du SAUT
    if (jumpButton.isDown && (this.body.onFloor() || this.canJump) && game.time.now > this.jumpTimer)
    {
        if(this.body.onFloor()){ 
            this.canJump = true;
            this.jumpNumber = 0;                 
        }
        if(this.canJump){
            this.body.velocity.y = -600;
            this.jumpNumber++;
            console.log("Saut effectué :"+this.jumpNumber);
        }
        if(this.jumpNumber == 2 ){
            this.canJump = false; 
        }
        
        // on empeche le spam malencontreux
        this.jumpTimer = game.time.now + 200;  
    }
    // ******************************************************************

}

Player.prototype.render = function() {
    //game.debug.body(this);
}