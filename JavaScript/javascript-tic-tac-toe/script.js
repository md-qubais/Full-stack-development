let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");
let box7 = document.getElementById("box7");
let box8 = document.getElementById("box8");
let box9 = document.getElementById("box9");

let arr_boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

let arr;
function fillArray() {
  arr = new Array(3);
  for (let i = 0; i < 3; i++) {
    arr[i] = new Array(3);
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      arr[i][j] = "s";
    }
  }
}
fillArray();
function updateAndCheck(temp, val) {
  temp--;
  let r = Math.floor(Number(temp / 3));
  let c = Math.floor(Number(temp % 3));
  arr[r][c] = val;
  let str = "";
  for (let i = 0; i < 3; i++) {
    str += arr[0][i];
  }
  if (str == "OOO") {
    window.alert("O wins the game");
    fillArray();
    for (let i = 0; i < arr_boxes.length; i++) {
      if (arr_boxes[i].children.length > 0) {
        console.log(arr_boxes[i].children, " removing ");
        arr_boxes[i].innerHTML = "";
      }
    }
    location.reload();
  }
  if (str == "XXX") {
    window.alert("X wins the game");
    fillArray();

    for (let i = 0; i < arr_boxes.length; i++) {
      if (arr_boxes[i].children.length > 0) {
        console.log(arr_boxes[i].children, " removing ");
        arr_boxes[i].innerHTML = "";
      }
    }
    location.reload();
  }

  str = "";
  for (let i = 0; i < 3; i++) {
    str += arr[2][i];
  }
  if (str == "OOO") {
    window.alert("O wins the game");
    fillArray();
    for (let i = 0; i < arr_boxes.length; i++) {
      if (arr_boxes[i].children.length > 0) {
        console.log(arr_boxes[i].children, " removing ");
        arr_boxes[i].innerHTML = "";
      }
    }
    location.reload();
  }
  if (str == "XXX") {
    window.alert("X wins the game");
    fillArray();

    for (let i = 0; i < arr_boxes.length; i++) {
      if (arr_boxes[i].children.length > 0) {
        console.log(arr_boxes[i].children, " removing ");
        arr_boxes[i].innerHTML = "";
      }
    }
    location.reload();
  }

  str = "";
  for (let i = 0; i < 3; i++) {
    str += arr[i][0];
  }
  if (str == "OOO") {
    window.alert("O wins the game");
    fillArray();
    for (let i = 0; i < arr_boxes.length; i++) {
      if (arr_boxes[i].children.length > 0) {
        console.log(arr_boxes[i].children, " removing ");
        arr_boxes[i].innerHTML = "";
      }
    }
    location.reload();
  }
  if (str == "XXX") {
    window.alert("X wins the game");
    fillArray();

    for (let i = 0; i < arr_boxes.length; i++) {
      if (arr_boxes[i].children.length > 0) {
        console.log(arr_boxes[i].children, " removing ");
        arr_boxes[i].innerHTML = "";
      }
    }
    location.reload();
  }

  str = "";
  for (let i = 0; i < 3; i++) {
    str += arr[i][2];
  }
  if (str == "OOO") {
    window.alert("O wins the game");
    fillArray();
    for (let i = 0; i < arr_boxes.length; i++) {
      if (arr_boxes[i].children.length > 0) {
        console.log(arr_boxes[i].children, " removing ");
        arr_boxes[i].innerHTML = "";
      }
    }
    location.reload();
  }
  if (str == "XXX") {
    window.alert("X wins the game");
    fillArray();

    for (let i = 0; i < arr_boxes.length; i++) {
      if (arr_boxes[i].children.length > 0) {
        console.log(arr_boxes[i].children, " removing ");
        arr_boxes[i].innerHTML = "";
      }
    }
    location.reload();
  }

  str = "";
  let col = 0;
  for (let i = 0; i < 3; i++) {
    str += arr[i][col++];
  }
  if (str == "OOO") {
    window.alert("O wins the game");
    fillArray();
    for (let i = 0; i < arr_boxes.length; i++) {
      if (arr_boxes[i].children.length > 0) {
        console.log(arr_boxes[i].children, " removing ");
        arr_boxes[i].innerHTML = "";
      }
    }
    location.reload();
  }
  if (str == "XXX") {
    window.alert("X wins the game");
    fillArray();

    for (let i = 0; i < arr_boxes.length; i++) {
      arr_boxes[i].children[0].remove;
    }
    location.reload();
  }

  str = "";
  col = 2;
  for (let i = 0; i < 3; i++) {
    str += arr[i][col--];
  }

  if (str == "OOO") {
    window.alert("O wins the game");
    fillArray();
    for (let i = 0; i < arr_boxes.length; i++) {
      if (arr_boxes[i].children.length > 0) {
        console.log(arr_boxes[i].children, " removing ");
        arr_boxes[i].innerHTML = "";
      }
    }
    location.reload();
  }
  if (str == "XXX") {
    window.alert("X wins the game");
    fillArray();

    for (let i = 0; i < arr_boxes.length; i++) {
      arr_boxes[i].children[0].remove;
    }
    location.reload();
  }
}

let state = "X";
box1.addEventListener("click", () => {
  if (box1.children.length > 0) {
    console.log("returning");
    return;
  }
  let val;
  let div = document.createElement("div");
  if (state == "O") {
    state = "X";
    val = "O";
    div.setAttribute(
      "style",
      "margin:10px; height: 20px;width: 20px;border-radius: 50%;border: solid gray 2px;"
    );
  } else {
    state = "O";
    val = "X";
    div.setAttribute(
      "style",
      " color:gray; height: 20px;width: 20px;font-size:30pt;margin-bottom:10px;margin-left:10px"
    );
    div.innerText = "X";
  }
  box1.appendChild(div);
  updateAndCheck(1, val);
});

box2.addEventListener("click", () => {
  if (box2.children.length > 0) {
    console.log("returning");
    return;
  }
  let div = document.createElement("div");
  let val = "";
  if (state == "O") {
    state = "X";
    val = "O";
    div.setAttribute(
      "style",
      "margin:10px; height: 20px;width: 20px;border-radius: 50%;border: solid gray 2px;"
    );
  } else {
    state = "O";
    val = "X";
    div.setAttribute(
      "style",
      " color:gray; height: 20px;width: 20px;font-size:30pt;margin-bottom:10px;margin-left:10px"
    );
    div.innerText = "X";
  }
  updateAndCheck(2, val);
  box2.appendChild(div);
});

box3.addEventListener("click", () => {
  if (box3.children.length > 0) {
    console.log("returning");
    return;
  }
  let div = document.createElement("div");
  let val = "";
  if (state == "O") {
    state = "X";
    val = "O";
    div.setAttribute(
      "style",
      "margin:10px; height: 20px;width: 20px;border-radius: 50%;border: solid gray 2px;"
    );
  } else {
    val = "X";
    state = "O";
    div.setAttribute(
      "style",
      " color:gray; height: 20px;width: 20px;font-size:30pt;margin-bottom:10px;margin-left:10px"
    );
    div.innerText = "X";
  }
  updateAndCheck(3, val);
  box3.appendChild(div);
});

box4.addEventListener("click", () => {
  if (box4.children.length > 0) {
    console.log("returning");
    return;
  }
  let val = "";
  let div = document.createElement("div");
  if (state == "O") {
    state = "X";
    val = "O";
    div.setAttribute(
      "style",
      "margin:10px; height: 20px;width: 20px;border-radius: 50%;border: solid gray 2px;"
    );
  } else {
    val = "X";
    state = "O";
    div.setAttribute(
      "style",
      "  color:gray;height: 20px;width: 20px;font-size:30pt;margin-bottom:10px;margin-left:10px"
    );
    div.innerText = "X";
  }
  updateAndCheck(4, val);
  box4.appendChild(div);
});

box5.addEventListener("click", () => {
  if (box5.children.length > 0) {
    console.log("returning");
    return;
  }
  let div = document.createElement("div");
  let val = "";
  if (state == "O") {
    state = "X";
    val = "O";
    div.setAttribute(
      "style",
      "margin:10px; height: 20px;width: 20px;border-radius: 50%;border: solid gray 2px;"
    );
  } else {
    state = "O";
    val = "X";
    div.setAttribute(
      "style",
      " color:gray; height: 20px;width: 20px;font-size:30pt;margin-bottom:10px;margin-left:10px"
    );
    div.innerText = "X";
  }
  updateAndCheck(5, val);
  box5.appendChild(div);
});

box6.addEventListener("click", () => {
  if (box6.children.length > 0) {
    console.log("returning");
    return;
  }
  let div = document.createElement("div");
  let val = "";
  if (state == "O") {
    state = "X";
    val = "O";
    div.setAttribute(
      "style",
      "margin:10px; height: 20px;width: 20px;border-radius: 50%;border: solid gray 2px;"
    );
  } else {
    state = "O";
    val = "X";
    div.setAttribute(
      "style",
      " color:gray;height: 20px;width: 20px;font-size:30pt;margin-bottom:10px;margin-left:10px"
    );
    div.innerText = "X";
  }
  updateAndCheck(6, val);
  box6.appendChild(div);
});

box7.addEventListener("click", () => {
  if (box7.children.length > 0) {
    console.log("returning");
    return;
  }
  let div = document.createElement("div");
  let val = "";
  if (state == "O") {
    state = "X";
    val = "O";
    div.setAttribute(
      "style",
      "margin:10px; height: 20px;width: 20px;border-radius: 50%;border: solid gray 2px;"
    );
  } else {
    val = "X";
    state = "O";
    div.setAttribute(
      "style",
      " color:gray;height: 20px;width: 20px;font-size:30pt;margin-bottom:10px;margin-left:10px"
    );
    div.innerText = "X";
  }
  updateAndCheck(7, val);
  box7.appendChild(div);
});

box8.addEventListener("click", () => {
  if (box8.children.length > 0) {
    console.log("returning");
    return;
  }
  let div = document.createElement("div");
  let val = "";
  if (state == "O") {
    state = "X";
    val = "O";
    div.setAttribute(
      "style",
      "margin:10px; height: 20px;width: 20px;border-radius: 50%;border: solid gray 2px;"
    );
  } else {
    state = "O";
    val = "X";
    div.setAttribute(
      "style",
      " color:gray;height: 20px;width: 20px;font-size:30pt;margin-bottom:10px;margin-left:10px"
    );
    div.innerText = "X";
  }

  updateAndCheck(8, val);
  box8.appendChild(div);
});

box9.addEventListener("click", () => {
  if (box9.children.length > 0) {
    console.log("returning");
    return;
  }
  let div = document.createElement("div");
  let val = "";
  if (state == "O") {
    val = "O";
    state = "X";
    div.setAttribute(
      "style",
      "margin:10px; height: 20px;width: 20px;border-radius: 50%;border: solid gray 2px;"
    );
  } else {
    val = "X";
    state = "O";
    div.setAttribute(
      "style",
      " color:gray;height: 20px;width: 20px;font-size:30pt;margin-bottom:10px;margin-left:10px"
    );
    div.innerText = "X";
  }
  updateAndCheck(9, val);
  box9.appendChild(div);
});
