var obstaclesList = [ 
    {
        "id" : "01",
        "name": "bloc1x1",
        "spriteLocation": "assets\bloc1x1.png",
        "height": 128,
        "width" : 128,
        "type" : "plateforme", 
        "killingSide" : "left",
        "immovable" : true,
        "moves" : false,
        "body" : true
    },
    {
        "id" : "02",
        "name": "bloc1x1reversed",
        "spriteLocation": "assets\bloc1x1reversed.png",
        "height": 128,
        "width" : 128,
        "type" : "plateforme", 
        "killingSide" : "left",
        "immovable" : true,
        "moves" : false,
        "body" : true
    },
    {
        "id" : "03",
        "name": "bloc1x2",
        "spriteLocation": "assets\bloc1x2.png",
        "height": 256,
        "width" : 128,
        "type" : "plateforme", 
        "killingSide" : "left",
        "immovable" : true,
        "moves" : false,
        "body" : true
    },
    {
        "id" : "04",
        "name": "verticalSlider1",
        "spriteLocation": "assets\verticalSlider1.png",
        "height": 115,
        "width" : 32,
        "type" : "plateforme", 
        "killingSide" : "none",
        "immovable" : true,
        "moves" : false,
        "body" : false
    },
    {
        "id" : "05",
        "name": "verticalSlider2",
        "spriteLocation": "assets\verticalSlider2.png",
        "height": 115,
        "width" : 32,
        "type" : "plateforme", 
        "killingSide" : "none",
        "immovable" : true,
        "moves" : false,
        "body" : false
    },
    {
        "id" : "06",
        "name": "verticalSlider3",
        "spriteLocation": "assets\verticalSlider3.png",
        "height": 115,
        "width" : 32,
        "type" : "plateforme", 
        "killingSide" : "none",
        "immovable" : true,
        "moves" : false,
        "body" : false
    },
    {
        "id" : "07",
        "name": "sawSprite",
        "spriteLocation": "assets\sawSprite.png",
        "height": 128,
        "width" : 128,
        "type" : "plateforme", 
        "killingSide" : "all",
        "immovable" : false,
        "moves" : true,
        "body" : true,
        "yMovement" : true,
        "yVelocity" : -200,
        "xVelocity" : 0,
        "bodyCircle" : true,
        "animations" : 
            [
                {
                    name : "default",
                    sprites : [4,3,2,1],
                    speed : 25,
                }
            ]
    }
];
    
