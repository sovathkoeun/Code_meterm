
const INPUT_HTML = document.querySelector('#input');
const LIST_HTML = document.querySelector('#Card');

let todoItems = [];
let id = 0;
// get value from local storage
let data = localStorage.getItem("TODO");
if (data) {
  todoItems = JSON.parse(data);
  id = todoItems.length;
  updateList();
}

document.addEventListener("keyup", event => {
  if (event.code === "Enter") {
    const inputValue = INPUT_HTML.value;
    if (inputValue != "") {
      addValue(inputValue);
      clearInput();
      getAllColor();
    }
  }
});

function clearInput() {
  INPUT_HTML.value = "";
}

function addValue(todoName) {
  todoItems.push({
    name: todoName,
    id: id,
    done: false
  });
  updateList();
}

function updateList() {
  let code = "";
  for (let item of todoItems) {
    code += `
    <div class="col-3">
        <h1>${item.name}</h1>
        <button class="cardButton">Card</button>
    </div>`;
    LIST_HTML.innerHTML = code;
  }
}

const Element_Add = document.querySelector('#nameButton')
  .addEventListener('click', function () {
    const inputValue = INPUT_HTML.value;
    if (inputValue != "") {
      addValue(inputValue);
      clearInput();
      getAllColor();
    }
  });

function getAllColor() {
  const listOfColors = ["#7b1fa2", "#1e88e5", "#c2185b", "#00897b", "#039be5", "#ffd0a8"];
  var ColorRandomOfCo = listOfColors[Math.floor(Math.random() * listOfColors.length)];
  document.body.style.background = ColorRandomOfCo;
} 