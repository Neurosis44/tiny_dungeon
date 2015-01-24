var obstaclesTemplatesList = [ 
    {
        "id" : "T11",
        "name" : "simpleBloc",
        "obstaclesList": [
            {
                obstacleId : "01",
                x : 0,
                y : 0,
                position : "floor"
            }],
        "width" : 128,
        "minSpaceRequired" : 300,
        "maxSpaceRequired" : 400
    },
    {
        "id" : "T12",
        "name" : "doubleBloc",
        "obstaclesList": [
            {
                obstacleId : "03",
                x : 0,
                y : 0,
                position : "floor"
            }
        ],
        "width" : 128,
        "minSpaceRequired" : 300,
        "maxSpaceRequired" : 400
    },
    {
        "id" : "T13",
        "name" : "rooFloor",
        "obstaclesList": [
            {
                obstacleId : "02",
                x : 0,
                y : 0,
                position : "roof"
            },
            {
                obstacleId : "01",
                x : 0,
                y : 0,
                position : "floor"
            }
        ],
        "width" : 128,
        "minSpaceRequired" : 800,
        "maxSpaceRequired" : 800
    },
    {
        "id" : "T14",
        "name" : "plateau",
        "obstaclesList": [
            {
                obstacleId : "01",
                x : 0,
                y : 0,
                position : "floor"
            },
            {
                obstacleId : "01",
                x : 128,
                y : 0,
                position : "floor"
            },
            {
                obstacleId : "01",
                x : 256,
                y : 0,
                position : "floor"
            }
        ],
        "width" : 386,
        "minSpaceRequired" : 300,
        "maxSpaceRequired" : 400
    },
    {
        "id" : "T15",
        "name" : "chainsaw",
        "obstaclesList": [
            {
                obstacleId : "04",
                x : 0,
                y : 128,
                position : "none"
            },
            {
                obstacleId : "05",
                x : 0,
                y : 243,
                position : "none"
            },
            {
                obstacleId : "06",
                x : 0,
                y : 358,
                position : "none"
            },
            {
                obstacleId : "07",
                x : -47,
                y : 0,
                position : "random"
            }
        ],
        "width" : 128,
        "height" : 356,
        "topSawPosition" : 64,
        "bottomSawPosition" : 420,
        "minSpaceRequired" : 300,
        "maxSpaceRequired" : 400
    },
    {
        "id" : "T16",
        "name" : "chainsaw2",
        "obstaclesList": [
            {
                obstacleId : "04",
                x : 0,
                y : 284,
                position : "none"
            },
            {
                obstacleId : "05",
                x : 0,
                y : 399,
                position : "none"
            },
            {
                obstacleId : "06",
                x : 0,
                y : 526,
                position : "none"
            },
            {
                obstacleId : "07",
                x : -47,
                y : 0,
                position : "random"
            }
        ],
        "width" : 128,
        "height" : 356,
        "topSawPosition" : 220,
        "bottomSawPosition" : 589,
        "minSpaceRequired" : 400,
        "maxSpaceRequired" : 550
    }
];
    
