var Contexte = function(obstaclesList) {
    /////////// CHARGEMENT DES DONNEES DU CONTEXT /////////////////
    // On charge les obstacles
    var obstaclesJSON = JSON.stringify(obstaclesList);
    this.obstaclesList = JSON.parse(obstaclesJSON);
    
    // On charge les templates des obstacles
    var obstaclesTemplatesJSON = JSON.stringify(obstaclesTemplatesList);
    this.obstaclesTemplatesList = JSON.parse(obstaclesTemplatesJSON);
    
    // On charge les différents niveaux
    var levelsListJSON = JSON.stringify(levelsList);
    this.levelsList = JSON.parse(levelsListJSON);
    
};