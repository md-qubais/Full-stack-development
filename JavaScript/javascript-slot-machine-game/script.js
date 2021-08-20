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
