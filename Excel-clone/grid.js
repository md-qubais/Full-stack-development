let left_col = document.querySelector(".left_col");
let top_row = document.querySelector(".top_row");
let grid = document.querySelector(".grid");
let iptaddress = document.querySelector(".address-input");
let rows = 100;
let cols = 26;

for (let i = 0; i < rows; i++) {
  let div = document.createElement("div");
  div.textContent = i + 1;
  div.setAttribute("class", "box");
  left_col.appendChild(div);
}

for (let i = 0; i < cols; i++) {
  let char = String.fromCharCode(65 + i);
  let cell = document.createElement("div");
  cell.textContent = char;
  cell.setAttribute("class", "cell");
  cell.style.background = "lightgreen";
  top_row.appendChild(cell);
}

for (let i = 0; i < rows; i++) {
  let row = document.createElement("div");
  row.setAttribute("class", "row");
  for (let j = 0; j < cols; j++) {
    let cell = document.createElement("div");
    cell.setAttribute("class", "cell");
    cell.setAttribute("rowid", i);
    cell.setAttribute("colid", j);
    cell.setAttribute("contenteditable", "true");
    cell.addEventListener("click", () => {
      iptaddress.value = String.fromCharCode(65 + j) + (i + 1);
      cell.getAttribute("colid") + cell.getAttribute("rowid");
    });
    if (i == 0 && j == 0) {
      cell.click();
    }
    row.appendChild(cell);
  }
  grid.appendChild(row);
}
function getRowCol(val) {
  return { col: Number(val.charCodeAt(0)) - 65, row: Number(val.slice(1) - 1) };
}
let bold = document.querySelector(".bold");
let italic = document.querySelector(".italic");
let underline = document.querySelector(".underline");
bold.addEventListener("click", () => {
  let obj = getRowCol(iptaddress.value);
  let curr_cell = document.querySelector(
    `.cell[rowid="${obj.row}"][colid="${obj.col}"]`
  );
  curr_cell.style.fontWeight = "bold";
});

italic.addEventListener("click", () => {
  let obj = getRowCol(iptaddress.value);
  let curr_cell = document.querySelector(
    `.cell[rowid="${obj.row}"][colid="${obj.col}"]`
  );
  curr_cell.style.fontStyle = "italic";
});

underline.addEventListener("click", () => {
  let obj = getRowCol(iptaddress.value);
  let curr_cell = document.querySelector(
    `.cell[rowid="${obj.row}"][colid="${obj.col}"]`
  );
  curr_cell.style.textDecoration = "underline overline";
});
