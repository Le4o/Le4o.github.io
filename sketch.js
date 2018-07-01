var s;
var scl = 20;
var food;

function setup() {
    createCanvas(600, 600);
    s = new Snake();
    frameRate(13);
    pickLocation();
}

function mousePressed() {
    console.log('pressing mouse');
    console.log(s.total);
    console.log(str(s.tail.lenght));
}

function pickLocation() {
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
}

function draw() {
    background(51);

    if(s.eat(food)){
        pickLocation();
    }

    s.death();
    s.update();
    s.show();

    fill(255, 0, 100);
    rect(food.x, food.y, scl, scl);
}

function keyPressed() {
    var lastKey;

    if (keyCode === UP_ARROW) {
        if (lastKey != 'DOWN') {
            s.dir(0, -1);
            lastKey = 'UP';
        }

    }else if (keyCode === DOWN_ARROW){
        if (lastKey != 'UP') {
            s.dir(0, 1);
            lastKey = 'DOWN';
        }

    }else if (keyCode === LEFT_ARROW) {
        if (lastKey != 'RIGHT') {
            s.dir(-1, 0);
            lastKey = 'LEFT';
        }

    }else if (keyCode === RIGHT_ARROW) {
        if (lastKey != 'LEFT') {
            s.dir(1, 0);
            lastKey = 'RIGHT';
        }
    }
}
