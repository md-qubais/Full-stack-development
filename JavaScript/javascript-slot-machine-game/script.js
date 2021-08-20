let value1 = document.getElementById("value1");
let value2 = document.getElementById("value2");
let value3 = document.getElementById("value3");

let values = ["😊", "😒", "😎", "😜", "😢", "😁", "🤣"];

function getRandom() {
  return values[Math.floor(Math.random() * 7)];
}
let intervalId;

function updateAnimation(maxSpeed) {
  if (intervalId) {
    clearInterval(intervalId);
  }
  intervalId = setInterval(() => {
    value1.textContent = getRandom();
    value2.textContent = getRandom();
    value3.textContent = getRandom();
  }, 1200 / maxSpeed);
}

let iptS = document.getElementById("iptS");

//here we are accessing the root which is used in css
let root = document.documentElement;

iptS.onchange = (event) => {
  root.style.setProperty("--speed", event.target.value);
  updateAnimation(event.target.value);
};

let btn=document.getElementById("btn")
let value=document.getElementsByClassName("value")
btn.onclick=()=>{
  let arr=[];
  for(let i=0;i<value.length;i++){
    arr.push(value[i]);
  }
  for(let i of arr){
    i.removeAttribute("class")
  }
  setTimeout(()=>{
    
  let slot=document.getElementsByClassName("slot");
  let bool=true;
  for(let i=0;i<slot.length-1;i++){
    console.log(slot[i].textContent ," ", slot[i+1].textContent)
    if(slot[i].textContent != slot[i+1].textContent){
      bool=false;
      break;
    }
  }
  if(bool){
    window.alert("You Won")
    location.reload()
  }else{
    window.alert("You Lose")
    location.reload()
  }
  },100)
}