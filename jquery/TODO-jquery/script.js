let task = $("#ultasks");
let btnAdd = $("#btnadd");
let btnclear = $("#btnclear");
let btnresest = $("#btnreset");
let btndone = $("#btndone");
let newTask = $("#newTask");
let btnsort = $("#btnsort");

btnsort.click(() => {
  $("#ultasks .disabled").appendTo(task);
});

btndone.click(() => {
  $("#ultasks .disabled").remove();
  /*for(let i of list){
        console.log(i.remove())
    }*/
});

// newTask.keypress((e)=>{
//     console.log(e)
// })

function reset_enable(value) {
  if (value) {
    btnresest.prop("disabled", false);
    btnAdd.prop("disabled", false);
  } else {
    btnresest.prop("disabled", true);
    btnAdd.prop("disabled", false);
  }
}

newTask.on("input", () => {
  if (newTask.val() != "") {
    reset_enable(true);
  } else {
    reset_enable(false);
  }
});

let add = () => {
  let val = newTask.val();
  if (val == "") {
    return;
  }
  //task.append($(`<li>${val}</li>`).attr("class","list-group-item"))
  let li = $("<li>", {
    class: "list-group-item",
    text: val,
  });
  li.click(() => {
    li.toggleClass("disabled");
    //toggleClass means add class or remove class from the element
  });
  task.append(li);
  newTask.val("");

  btnAdd.prop("disabled", true);
  btnresest.prop("disabled", true);
};

newTask[0].onkeypress = (e) => {
  if (e.key == "Enter") {
    add();
  }
  btnAdd.prop("disabled", true);
  btnresest.prop("disabled", true);
};

btnAdd.click(add);

setInterval(() => {
  let length = task.children().length;
  if (length == 0) {
    btnsort.prop("disabled", true);
    btnclear.prop("disabled", true);
    btndone.prop("disabled", true);
  } else if (length == 1) {
    btnclear.prop("disabled", false);
    btndone.prop("disabled", false);
  } else {
    btnclear.prop("disabled", false);
    btndone.prop("disabled", false);
    btnsort.prop("disabled", false);
  }
}, 100);

btnresest.click(() => {
  newTask.val("");
  btnresest.prop("disabled", true);
  btnAdd.prop("disabled", true);
});

btnclear.click(() => {
  task.empty();
});
