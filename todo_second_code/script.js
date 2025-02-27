console.log("script funcionando");

let inputTask = document.getElementById("inputTodo");

let addButton = document.getElementById("addTodo");

let listTask = document.getElementById("todoList");

function addTodoTask() {
  let valueInputTask = inputTask.value;
  console.log(valueInputTask);

  let newTaskItem = document.createElement("li");
  newTaskItem.textContent = valueInputTask;

  let deleteTask = document.createElement("button");
  deleteTask.textContent = "Delete";
  deleteTask.type = "button";

  newTaskItem.appendChild(deleteTask);

  listTask.appendChild(newTaskItem);

  deleteTask.addEventListener("click", function () {
    newTaskItem.remove();
  });
}
