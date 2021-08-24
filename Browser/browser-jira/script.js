"use strict"; //if we use noraml global vairbles like below
//a=10  it will give some of the bugs so we are using use strict
//so that we dont get any bugs
//so we must write use strict in our javascript application

let filterOptions = document.querySelectorAll(".filter-colors_container");
let modalFilters = document.querySelectorAll(".modal_filters");
let mainContainer = document.querySelector(".main-container");
let modalContainer = document.querySelector(".modal_container");
let addbtn = document.querySelector(".add");
let removebtn = document.querySelector(".remove");
let descBox = document.querySelector(".task_description");
let displayall = document.querySelector(".displayall");
let cColor = "black";
let clearstorage = document.querySelector(".clearstorage");
let cColorobj = modalFilters[modalFilters.length - 1];
let colors_array = ["pink", "blue", "black", "green"];
let flag = false;
let delete_state = false;
let id = 1;
let taskarr = [];
let text_disabled=true;

$( ".lock" ).click(function() {
    $(this).toggleClass('unlocked');
    let allbox = document.querySelectorAll(".box");
    for (let i = 0; i < allbox.length; i++) {
        allbox[i].children[2].disabled=(!text_disabled);
    }
    text_disabled=!text_disabled
  });



clearstorage.addEventListener("click", () => {
  localStorage.clear();
});

displayall.addEventListener("click", () => {
  let allbox = document.querySelectorAll(".box");
  for (let i = 0; i < allbox.length; i++) {
    allbox[i].style.display = "flex";
  }
});

for (let i = 0; i < filterOptions.length; i++) {
  filterOptions[i].addEventListener("click", () => {
    let arr = filterOptions[i];
    let curr_color = arr.classList[2];
    let allbox = document.querySelectorAll(".box");
    for (let i = 0; i < allbox.length; i++) {
      if (allbox[i].children[0].classList[1] != curr_color) {
        allbox[i].style.display = "none";
      } else {
        allbox[i].style.display = "flex";
      }
    }
  });
}

if (localStorage.getItem("Alltasks")) {
  taskarr = JSON.parse(localStorage.getItem("Alltasks"));
  for (let i = 0; i < taskarr.length; i++) {
    let { color, id, task } = taskarr[i];
    createTask(task, color, id);
  }
}

for (let i = 0; i < modalFilters.length; i++) {
  modalFilters[i].addEventListener("click", () => {
    for (let j = 0; j < modalFilters.length; j++) {
      modalFilters[j].classList.remove("border"); //here we are removing the
      //current class border from the class list
    }
    modalFilters[i].classList.add("border"); //adding the border to all the classlist array
    //of the current clicked button
    cColor = modalFilters[i].classList[1];
    cColorobj = modalFilters[i];
  });
}

addbtn.addEventListener("click", () => {
  delete_state = false;
  if (flag == false) {
    modalContainer.style.display = "flex";
    flag = true;
  } else {
    modalContainer.style.display = "none";
    flag = false;
  }
});

removebtn.addEventListener("click", () => {
  if (delete_state) {
    delete_state = false;
  } else {
    delete_state = true;
  }
});

function createTask(task, color, myid) {
  cColor = color;
  let div = document.createElement("div");
  div.addEventListener("click", () => {
    if (delete_state) {
      let delid = div.children[1].value;
      let remidx = -1;
      for (let i = 0; i < taskarr.length; i++) {
        if (taskarr[i].id == delid) {
          remidx = i;
          break;
        }
      }
      if (remidx != -1) {
        taskarr.splice(remidx, 1);
      }
      localStorage.setItem("Alltasks", JSON.stringify(taskarr));
      div.remove();
    }
  });
  div.classList.add("box");
  let upper = document.createElement("div");
  upper.addEventListener("click", () => {
    let num = Math.floor(Math.random() * 4);
    upper.classList.remove(upper.classList[1]);
    upper.classList.add(colors_array[num]);
    upper.style.background = colors_array[num];
    let delid = div.children[1].value;
    let remidx = -1;
    for (let i = 0; i < taskarr.length; i++) {
      if (taskarr[i].id == delid) {
        remidx = i;
        break;
      }
    }
    if (remidx != -1) {
      taskarr[remidx].color = colors_array[num];
    }
    localStorage.setItem("Alltasks", JSON.stringify(taskarr));
  });
  upper.classList.add("upper");
  upper.classList.add(cColor);
  upper.style.background = cColor;
  div.appendChild(upper);
  let input = document.createElement("input");
  input.classList.add("exampleid");
  let value;
  if (myid) {
    value = myid;
  } else {
    value = "TICKET id=>" + Math.floor(Math.random() * Date.now());
    taskarr.push({
      color: cColor,
      id: value,
      task: task,
    });
  }
  input.value = value;
  input.disabled = true;
  div.append(input);
  let textarea = document.createElement("textarea");
  textarea.classList.add("description");
  textarea.value = task;
  textarea.disabled=true;
  div.classList.add("box_shadow");
  div.appendChild(textarea);
  mainContainer.appendChild(div);

  //parentElement and parentNode both are same
  //console.log(div.parentElement)
  //console.log(div.parentNode)
  //console.log(div.parentElement == div.parentNode)

  localStorage.setItem("Alltasks", JSON.stringify(taskarr));
  cColor = "black";
  if (cColorobj.classList[1] != "black") cColorobj.classList.remove("border");
}
descBox.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    let task = descBox.value;
    //here we have to create ticket with the given description that is task
    //and the given color that is cColor with cColorobj
    createTask(task, cColor);
    modalContainer.style.display = "none";
    descBox.value = "";
    modalFilters[modalFilters.length - 1].classList.add("border");
  }
});
