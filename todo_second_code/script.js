// let inputTask = document.getElementById("inputTodo");

// let addButton = document.getElementById("addTodo");

// let listTask = document.getElementById("todoList");

function addTodoTask() {
  const createInput = document.createElement("input");
  createInput.type = "text";
  createInput.id = "inputTodo";
  createInput.placeholder = "Type your to-do task";

  document.body.appendChild(createInput);
}
addTodoTask();

function addButton() {
  const createAddButton = document.createElement("button");
  createAddButton.textContent = "add button";
  createAddButton.type = "butoon";

  document.body.appendChild(createAddButton);
}
addButton();

//   let valueInputTask = inputTask.value;
//   if (valueInputTask.trim() === "") {
//     console.log("Campo vazio, preencha com alguma tarefa");
//     return;
//   }

//   let newTaskItem = document.createElement("li");
//   newTaskItem.textContent = valueInputTask;

//   let deleteTask = document.createElement("button");
//   deleteTask.textContent = "Delete";
//   deleteTask.type = "button";

//   newTaskItem.appendChild(deleteTask);

//   listTask.appendChild(newTaskItem);

//   inputTask.value = "";

//   deleteTask.addEventListener("click", function () {
//     newTaskItem.remove();
//   });
// }
