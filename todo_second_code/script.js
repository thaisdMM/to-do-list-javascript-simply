let inputTask = document.getElementById("inputTodo");

let addButton = document.getElementById("addTodo");

let listTask = document.getElementById("todoList");

function addTodoTask() {
  let valueInputTask = inputTask.value;
  if (valueInputTask.trim() === "") {
    console.log("Campo vazio, preencha com alguma tarefa");
    return;
  }

  let newTaskItem = document.createElement("li");
  newTaskItem.textContent = valueInputTask;

  let deleteTask = document.createElement("button");
  deleteTask.textContent = "Delete";
  deleteTask.type = "button";

  newTaskItem.appendChild(deleteTask);

  listTask.appendChild(newTaskItem);

  inputTask.value = "";

  deleteTask.addEventListener("click", function () {
    newTaskItem.remove();
  });
}
