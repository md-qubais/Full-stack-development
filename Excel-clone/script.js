let addbtn = document.querySelector(".add-sheet-btn-container");
let sheetlist = document.querySelector(".sheet-list");

sheetlist.children[0].addEventListener("click", () => {
  let allSheets = document.querySelectorAll(".sheet");
  for (let i = 0; i < allSheets.length; i++) {
    allSheets[i].classList.remove("active");
  }
  sheetlist.children[0].classList.add("active");
});

addbtn.addEventListener("click", () => {
  let newSheet = document.createElement("div");
  newSheet.setAttribute("class", "sheet");
  let index =
    sheetlist.children[sheetlist.children.length - 1].getAttribute("idx");
  index = Number(index);
  for (let i = 0; i < sheetlist.children.length; i++) {
    sheetlist.children[i].classList.remove("active");
  }
  newSheet.setAttribute("idx", index + 1);
  newSheet.classList.add("active");
  newSheet.textContent = `sheet${index + 1}`;
  sheetlist.appendChild(newSheet);
  newSheet.addEventListener("click", () => {
    let allSheets = document.querySelectorAll(".sheet");
    for (let i = 0; i < allSheets.length; i++) {
      allSheets[i].classList.remove("active");
    }
    newSheet.classList.add("active");
  });
});

