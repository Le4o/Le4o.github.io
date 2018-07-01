var s;
var scl = 20;
var food1;
var food2;

function setup() {
    createCanvas(windowWidth, windowHeight);
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
    var cols = floor(windowWidth/scl);
    var rows = floor(windowHeight/scl);
    food1 = createVector(floor(random(cols)), floor(random(rows)));
    food2 = createVector(floor(random(cols)), floor(random(rows)));
    food1.mult(scl);
    food2.mult(scl);
}

function draw() {
    background(51);

    if(s.eat(food1) || s.eat(food2)){
        pickLocation();
    }

    s.death();
    s.update();
    s.show();

    fill(255, 0, 100);
    rect(food1.x, food1.y, scl, scl);
    rect(food2.x, food2.y, scl, scl);
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
