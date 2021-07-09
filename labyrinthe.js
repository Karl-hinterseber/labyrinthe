labyrinthe = [
    ["S", "empty", "empty", "empty", "empty", "empty"],
    ["wall", "wall", "wall", "empty", "wall", "wall"],
    ["empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "wall", "wall", "empty", "wall", "empty"],
    ["empty", "wall", "G", "wall", "empty", "empty"],
    ["empty", "empty", "empty", "wall", "empty", "wall"],
    ["empty", "wall", "empty", "empty", "empty", "empty"]
];

saveEmptyCaseCrossroads = [];

positionPlayer = [
    ["S", "empty", "empty", "empty", "empty", "empty"],
    ["wall", "wall", "wall", "empty", "wall", "wall"],
    ["empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "wall", "wall", "empty", "wall", "empty"],
    ["empty", "wall", "G", "wall", "empty", "empty"],
    ["empty", "empty", "empty", "wall", "empty", "wall"],
    ["empty", "wall", "empty", "empty", "empty", "empty"]
];

x = 0;
y = 0;

endgame = positionPlayer[0][2];
positionPlayer[x][y] = "visited";
console.log(positionPlayer[x][y]);

play();

function play() {
    if (positionPlayer[x][y] != positionPlayer[4][2]) {
        nbEmptyCase = 0;
        // je test les cases adjacentes pour voir à quoi elles correspondent.
        if (testDown()) {
            nbEmptyCase += 1; // s'il y a une case vide on incrémente une variable
            y = y - 1;
        }
        if (testRight()) {
            nbEmptyCase += 1;
            x = x - 1;
        }
        if (testUp()) {
            nbEmptyCase += 1;
            y = y + 1;
        }
        if (testLeft()) {
            nbEmptyCase += 1;
            x = x + 1;
        }
        console.log(saveEmptyCaseCrossroads);
        if (nbEmptyCase >= 2) {
            positionPlayer[x][y] = "crossroads"; // s'il y a au moins 2 case vide la case devient un carrefour
            saveEmptyCaseCrossroads.push([x, y]); // j'ajoute dans un tableau les coordonnées du carrefour
        } else if (nbEmptyCase === 0) {
            x = saveEmptyCaseCrossroads[saveEmptyCaseCrossroads.length -1][0];
            y = saveEmptyCaseCrossroads[saveEmptyCaseCrossroads.length -1][1];
            positionPlayer[x][y];
            console.log(positionPlayer[x][y]);
            delete saveEmptyCaseCrossroads.pop(); //maintenant que j'ai pris les coordonnées du carrefour, je supprimme ces coordonnées du tableau
            play();
        }
        if (testDown()) {
            //console.log(positionPlayer[x][y]);
            positionPlayer[x][y] = "visited";
            console.log(x, y);
            console.log(positionPlayer);
            //displayTab();
        } else
            if (testRight()) {
                //console.log(positionPlayer[x][y]);
                positionPlayer[x][y] = "visited";
                console.log(x, y);
                console.log(positionPlayer);
                //displayTab();
            } else
                if (testUp()) {
                    //console.log(positionPlayer[x][y]);
                    positionPlayer[x][y] = "visited";
                    console.log(x, y);
                    console.log(positionPlayer);
                    //displayTab();
                } else
                    if (testLeft()) {
                        //console.log(positionPlayer[x][y]);
                        positionPlayer[x][y] = "visited";
                        console.log(x, y);
                        console.log(positionPlayer);
                        //displayTab();
                    }
    } else {
        //displayTab();
        console.log(positionPlayer);
        console.log(saveEmptyCaseCrossroads);
        return console.log("bravo");
    } 
    play();
} 

function testDown() {
    y = y + 1;
    if (inRange()) {
        if (testWall()) {
            y = y - 1;
            return false;
        } else {
            return true;
        }
    } else {
        y = y - 1;
    }
}

function testRight() {
    x = x + 1;
    if (inRange()) {
        if (testWall()) {
            x = x - 1;
            return false;
        } else {
            return true;
        }
    } else {
        x = x - 1;
    }
}

function testUp() {
    y = y - 1;
    if (inRange()) {
        if (testWall()) {
            y = y + 1;
            return false;
        } else {
            return true;
        }
    } else {
        y = y + 1;
    }
}

function testLeft() {
    x = x - 1;
    if (inRange()) {
        if (testWall()) {
            x = x + 1;
            return false;
        } else {
            return true;
        }
    } else {
        x = x + 1;
    }
}

function inRange() {
    if (x < 0 || x > labyrinthe.length - 1 || y < 0 || y > labyrinthe[0].length - 1) {
        return false;
    } else {
        return true;
    }
}

function testWall() {
    if (positionPlayer[x][y] == "wall" || positionPlayer[x][y] == "crossroads" || positionPlayer[x][y] == "visited") {
        return true;
    } else if (positionPlayer[x][y] == "empty") {
        return false;
    }
}

/*
je créé un tableau vide
Quand je vois une case vide, je l'enregistre dans le tableau.
Dès que je vais dessus je l'enregistre comme case visitée
Quand je rencontre 2 cases vides je les enregistre dans le tableau.
j'en visite une selon l'orde  de passage, je l'enregistre comme visitée et l'autre je l'enregistre comme à visiter.
Si je n'ai aucun choix de parcours car je ne peux aller qu'à une case visitée, je me déplace
sur la case enregistrée non visitée
*/

/*
function displayTab() {
    for (let i = 0; i < positionPlayer.length ; i++) {
        for (let j = 0; j <positionPlayer[i].length; j++) {
            positionPlayer[i][j] + " ";
        }
        str = "n";
    }
}
*/

