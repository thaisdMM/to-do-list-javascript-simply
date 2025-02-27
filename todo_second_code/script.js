function addTodoTask() {
  const createInput = document.createElement("input");
  createInput.type = "text";
  createInput.id = "inputTodo";
  createInput.placeholder = "Type your to-do task";

  document.body.appendChild(createInput);
}
addTodoTask();

function createUl() {
  const listTask = document.createElement("ul");
  listTask.id = "listTask";

  document.body.appendChild(listTask);
}
createUl();

function addButton() {
  const createAddButton = document.createElement("button");
  createAddButton.textContent = "add button";
  createAddButton.type = "button";
  createAddButton.id = "addButton";

  createAddButton.addEventListener("click", function () {
    const inputTodo = document.getElementById("inputTodo");
    const listTask = document.getElementById("listTask");

    const newTaskItem = document.createElement("li");
    newTaskItem.textContent = inputTodo.value;

    listTask.appendChild(newTaskItem)
  });

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
