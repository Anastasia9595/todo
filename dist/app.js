function addTask() {
  var taskList = document.getElementById("tasks");
  var newTask = document.createElement("li");
  newTask.className =
    "p-5 flex justify-between items-center border-b-[0.1rem] border-gray-400";

  const taskContainer = document.createElement("div");

  const checkbox = document.createElement("input");
  checkbox.id = "checkbox" + (taskList.childElementCount + 1);
  checkbox.type = "checkbox";
  checkbox.className = "mr-4";
  checkbox.onchange = (event) => strikeThroughText(event);

  const taskTextElement = document.createElement("span");
  taskTextElement.innerText = document.getElementById("new-task").value;
  taskTextElement.id = "text-" + (taskList.childElementCount + 1);

  const deleteButton = document.createElement("img");
  deleteButton.src = "../assets/icon-cross.svg";
  deleteButton.className = "cursor-pointer h-[0.9rem]";
  deleteButton.onclick = (event) => deleteTask(event);

  taskContainer.appendChild(checkbox);
  taskContainer.appendChild(taskTextElement);
  newTask.appendChild(taskContainer);
  newTask.appendChild(deleteButton);

  taskList.appendChild(newTask);

  document.getElementById("new-task").value = "";
  listLength();
}

function strikeThroughText(event) {
  const checkbox = event.target;
  const text = checkbox.nextSibling;
  text.style.textDecoration = checkbox.checked ? "line-through" : "none";
}

function deleteTask(event) {
  var currentTask = event.target.parentElement;
  currentTask.remove();
}

function listLength() {
  const list = document.getElementById("tasks");
  const countParagraph = document.getElementById("count");
  countParagraph.innerText = list.childElementCount - 1;
}
