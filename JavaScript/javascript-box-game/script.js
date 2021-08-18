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
context.stroke();
*/

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
    if (this.x > 273) {
      this.speed = -this.speed;
    }
    if (this.x < -2) {
      this.speed = -this.speed;
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
e1.y = 65;
e1.fillBox();

let e2 = new Enemy(3);
e2.x = 200;
e2.y = 0;
e2.fillBox();

let isCollided = (player,enemy) => {
  let p_x1=player.x;
  let p_x2=player.x+30;

  let p_y1=player.y;
  let p_y2=player.y+15;

  let e_x1=enemy.x;
  let e_x2=enemy.x+30;

  let e_y1=enemy.y;
  let e_y2=enemy.y+15;
  console.log(p_x1," ", e_x1," ", p_x2," ",e_x1)
  if(p_x1 < e_x1 && p_x2 > e_x1){
    if(p_y1 < e_y1 && p_y2 > e_y1){
      return true;
    }
  }
  if(p_x1 < e_x1 && p_x2 > e_x1){
    if(e_y1 < p_y1 && e_y2 > p_y1){
      return true;
    }
  }
  
  if(e_x1 < p_x1 && e_x2 > p_x1){
    if(e_y1 < p_y1 && e_y2 > p_y1){
      return true;
    }
  }
  
  if(e_x1 < p_x1 && e_x2 > p_x1){
    if(p_y1 < e_y1 && p_y2 > e_y1){
      return true;
    }
  }
  return false;
};
let btn = document.getElementById("btn");

function updateGame() {
  context.clearRect(0, 0, 500, 600);
  e1.move();
  e2.move();
  player.move();
  player.fillBox();
  e1.fillBox();
  e2.fillBox();
  if (isCollided(player, e1) || isCollided(player,e2) ) {
    window.alert("Game over");
    context.clearRect(0, 0, 500, 600);
    player.x = 0;
    player.y = 65;
    player.speed=0;
    player.fillBox();
  }
  window.requestAnimationFrame(updateGame);
}

window.requestAnimationFrame(updateGame);
btn.addEventListener("mousedown", () => {
  player.speed = 2;
});

btn.addEventListener("mouseup", () => {
  player.speed = 0;
});



//uppar curr.y -15

//neeche curr.y + 15

//left se 30

//right se 30