var Enemy = function() {




    // This picks one out of three different paths the bugs can take at random.

    //var enemyYStart = Math.floor(Math.random() * enemyYArray.length);

    //this.y = enemyYArray[enemyYStart]; //60 , 143 ,226


    this.y = this.enemyRandomY();
    this.x = -100;
    this.w = 98;
    this.h = 65;
    this.speed = this.enemyRandomSpeed();
    // This picks one out of three different speeds the bugs can be at random.

    //var enemyspeedNum = Math.floor(Math.random() * enemySpeed.length);
    //this.speed = enemySpeed[enemyspeedNum];
    //this.speed = enemySpeed[this.enemyRandomSpeed(enemySpeed = [50, 100, 150])];


    //  console.log(allEnemies.indexOf());
    //this.e("2D, Canvas, Color")attr(enemyColDim).color("red");


    this.sprite = 'images/enemy-bug.png';
    // index = allEnemies[this];
};

Enemy.prototype.enemyRandomSpeed = function(enemySpeed) {
    var x;
    var enemySpeed = [50, 100, 150];
    x = enemySpeed[Math.floor(Math.random() * enemySpeed.length)];

    return x;

};





Enemy.prototype.enemyRandomY = function() {
    var x;
    var enemyYArray = [60, 143, 226]
    x = enemyYArray[Math.floor(Math.random() * enemyYArray.length)];
    console.log(x);
    return x;
}; // Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks





Enemy.prototype.update = function(dt, index) {

    // This moves the enemy
    this.x = this.x + (this.speed * dt);
    //console.log(this.x);



    // This is the collison detection statment that checks if the box have intersected
    if (this.x < player.x + player.w &&
        this.x + this.w > player.x &&
        this.y < player.y + player.h &&
        this.h + this.y > player.y) {
        player.x = 200;
        player.y = 400;
        console.log("True");
    }

    // This determins when enmney has walked off the screen deletes it from the array and then adds a new one.
    if (this.x > 510) {
        this.y = this.enemyRandomY();
        this.speed = this.enemyRandomSpeed();
        this.x = -100
        //allEnemies.splice(index, 1);
        //allEnemies.push(new Enemy(0));


    }









    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function(x, y) {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);


    //Fills a box with the color blue
    ctx.fillStyle = "#0000A0";

    //Enemy collision detection Box is displayed when the next line is uncommented
    //ctx.fillRect(this.x, this.y + 75, this.w, this.h);

};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function() {
    this.x = 200;
    this.y = 400;
    this.w = 66;
    this.h = 74;



    this.sprite = 'images/char-boy.png';

};


Player.prototype.update = function(dt) {


};


Player.prototype.render = function(x, y) {

    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

    //Fills a box with the color Red
    ctx.fillStyle = "#FF0000";

    //Player collision detection Box is dislayed when the next line is uncommented.
    //ctx.fillRect(this.x + 18, this.y + 65, this.w, this.h);
};

Player.prototype.handleInput = function() {

};

Player.prototype.handleInput = function(key) {

    //Lets the player go right util he hits the game boundary
    if (key === 'right') {
        this.x = this.x + 100;
        if (this.x > 400) {
            this.x = 400;
        }
    }

    //Lets the player go Left util he hits the game boundary
    if (key === 'left') {
        this.x = this.x - 100;
        if (this.x < 0) {
            this.x = 0;
        }
    }

    //Lets the player go up util he gets to the water and wins then the player is respawned back at the beginning.
    if (key === 'up') {
        this.y = this.y - 83;
        if (this.y < 0) {
            this.x = 200;
            this.y = 400;
        }

    }
    //Lets the player go down util he hits the game boundary
    if (key === 'down') {
        this.y = this.y + 83;
        if (this.y > 400) {
            this.y = 400;
        }

    }

};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Creates the player
var player = new Player();
//Creates 4 enemies
var allEnemies = [new Enemy(), new Enemy(), new Enemy(), new Enemy()];






// Place the player object in a variable called player





// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
