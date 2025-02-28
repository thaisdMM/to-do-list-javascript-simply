const htmlContent = document.getElementById("htmlContent");

function createInput() {
  const inputTodo = document.createElement("input");
  inputTodo.type = "text";
  inputTodo.id = "inputTodo";
  inputTodo.placeholder = "type your to-do task";

  htmlContent.appendChild(inputTodo);
}
createInput();

function createUlList() {
  const ulList = document.createElement("ul");
  ulList.id = "ulList";

  htmlContent.appendChild(ulList);
}

createUlList();

function createAddButton() {
  const addButton = document.createElement("button");
  addButton.textContent = "add to-do";
  addButton.type = "button";
  addButton.classList.add("addButton");

  addButton.addEventListener("click", () => {
    const inputTodo = document.getElementById("inputTodo");
    const ulList = document.getElementById("ulList");

    if (inputTodo.value.trim() === "") {
      return alert("Tarefa invalida, digite a nova tarefa");
    }

    const newTaskItem = document.createElement("li");
    newTaskItem.textContent = inputTodo.value;
    newTaskItem.classList.add("newTaskItem");
    createDeleteButton(newTaskItem);

    ulList.appendChild(newTaskItem);

    inputTodo.value = "";
  });

  htmlContent.appendChild(addButton);
}
createAddButton();

function createDeleteButton(taskItem) {
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "delete";
  deleteButton.type = "button";
  deleteButton.classList.add("deleteButton");

  deleteButton.addEventListener("click", () => taskItem.remove());

  taskItem.appendChild(deleteButton);
}
