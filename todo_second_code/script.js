console.log("script funcionando");

let inputTask = document.getElementById("inputTodo");

let addButton = document.getElementById("addTodo");

let listTask = document.getElementById("todoList")

function addTodoTask() {
  let valueInputTask = inputTask.value;
  console.log(valueInputTask)

  let newTaskItem = document.createElement("li")
  newTaskItem.textContent = valueInputTask
  listTask.appendChild(newTaskItem)

}
