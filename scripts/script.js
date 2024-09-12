const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    addListItem(inputBox.value);
  }

  inputBox.value = "";
  saveData();
}

function addListItem(text) {
  const li = document.createElement("li");
  li.innerText = text;

  const span = document.createElement("span");
  span.innerText = "\u00d7";

  li.appendChild(span);
  listContainer.appendChild(li);
}

inputBox.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addTask();
  }
});

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
