let paintbox = document.getElementById("paintbox");
let context = paintbox.getContext("2d");

/*
context.fillStyle="red"
context.fillRect(0,65,30,17)
context.fillStyle="blue"
context.fillRect(70,0,30,17)

context.fillStyle="blue"
context.fillRect(210,0,30,17)
context.rect(270,65,30,17)
context.stroke();*/

class Box {
  constructor(size, color) {
    this.size = size;
    this.color = color;
    this.speed = 0;
    this.x = 0;
    this.y = 0;
  }
  fillBox() {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.size, this.size / 2);
  }
}
class Player extends Box {
  constructor(size, color) {
    super(size, color);
    this.x = 0;
    this.y = 65;
  }
  move() {
    this.x += this.speed;
    if(this.x > 273){
        this.speed=-(this.speed)
    }
    if(this.x<-2){
        this.speed=-(this.speed)
    }
  }
}
class Enemy extends Box {
  constructor(speed) {
    super(30, "red");
    this.speed = speed;
  }
  move() {
    this.y += this.speed;
    if (this.y >= 140) {
      this.speed = -this.speed;
    }
    if (this.y < -7) {
      this.speed = -this.speed;
    }
  }
}

let player = new Player(30, "blue");
player.fillBox();

let e1 = new Enemy(1);
e1.x = 80;
e1.y = 0;
e1.fillBox();

let e2 = new Enemy(3);
e2.x = 200;
e2.y = 0;
e2.fillBox();

let isCollided=(box1,box2)=>{
    
    return false;
}

function updateGame() {
  context.clearRect(0, 0, 500, 600);
  e1.move();
  e2.move();
  player.move();
  player.fillBox();
  e1.fillBox();
  e2.fillBox();
  if(isCollided(player,e1) || isCollided(player,e2)){
      window.alert("Game over")
      location.reload()
  }
  window.requestAnimationFrame(updateGame);
}

window.requestAnimationFrame(updateGame);
let btn=document.getElementById("btn")
btn.addEventListener("mousedown", () => {
  player.speed = 2;
});

btn.addEventListener("mouseup", () => {
  player.speed = 0;
});
