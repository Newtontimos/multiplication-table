const selectedOption = document.querySelector("#select-option");
const row = document.querySelector("#row");
const column = document.querySelector("#column");
const displayBtn = document.querySelector("#display-btn");
const table = document.querySelector("#table");

let operation = "add";
let rowCount = 0;
let columnCount = 0;
let symbol = "+";

selectedOption.addEventListener("change", () => {
  operation = selectedOption.value;
});

displayBtn.addEventListener("click", () => {
  setValues();
  createTable();
});

const setValues = () => {
  rowCount = row.value;
  columnCount = column.value;

  if (operation === "add") {
    symbol = "+";
  } else if (operation === "subtract") {
    symbol = "-";
  } else if (operation === "multiply") {
    symbol = "x";
  } else if (operation === "divide") {
    symbol = "/";
  }
};

const calculateResult = (val1, val2) => {
  if (operation === "add") {
    return val1 + val2;
  } else if (operation === "subtract") {
    return val1 - val2;
  } else if (operation === "multiply") {
    return val1 * val2;
  } else if (operation === "divide") {
    return (val1 / val2).toFixed(3);
  }
};

const createTable = () => {
  table.innerHTML = null;

  if (rowCount === 0 || columnCount === 0) return;

  for (let i = 0; i < rowCount; i++) {
    const tr = document.createElement("tr");

    for (let j = 0; j < columnCount; j++) {
      const td = document.createElement("td");
      let result = calculateResult(Number(`${i + 1}`), Number(`${j + 1}`));
      let content = `${i + 1} ${symbol} ${j + 1} = ${result}`;
      td.innerText = content;

      tr.append(td);
    }
    table.append(tr);
  }
};
