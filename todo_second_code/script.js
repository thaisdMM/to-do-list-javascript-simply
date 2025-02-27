// Pegamos a div que criamos no HTML. Essa será a base para adicionar todos os elementos.
const todoApp = document.getElementById("todoApp");

// Criamos o input onde o usuário digita a tarefa
function addTodoTask() {
  const createInput = document.createElement("input");
  createInput.type = "text";
  createInput.id = "inputTodo"; // ID para recuperar depois
  createInput.placeholder = "Type your to-do task";

  // Adicionamos o input dentro da div "todoApp" (e não no body)
  todoApp.appendChild(createInput);
}
addTodoTask();

// Criamos a lista UL onde as tarefas serão adicionadas
function createUl() {
  const listTask = document.createElement("ul");
  listTask.id = "listTask"; // ID para recuperar depois

  // Adicionamos a UL dentro da div "todoApp"
  todoApp.appendChild(listTask);
}
createUl();

// Criamos o botão de adicionar tarefas
function addButton() {
  const createAddButton = document.createElement("button");
  createAddButton.textContent = "Add Task"; // Nome do botão
  createAddButton.type = "button";
  createAddButton.id = "addButton"; // ID para recuperar depois

  // Adicionamos um evento para adicionar uma tarefa ao clicar no botão
  createAddButton.addEventListener("click", function () {
    const inputTodo = document.getElementById("inputTodo");
    const listTask = document.getElementById("listTask");

    // Se o input estiver vazio, não adicionamos nada (boa prática)
    if (inputTodo.value.trim() === "") return;

    // Criamos um novo item da lista (li)
    const newTaskItem = document.createElement("li");
    newTaskItem.textContent = inputTodo.value;

    // Criamos o botão de deletar para essa tarefa
    const deleteTodo = document.createElement("button");
    deleteTodo.textContent = "Delete";
    deleteTodo.type = "button";

    // Adicionamos um evento para remover a tarefa ao clicar no botão
    deleteTodo.addEventListener("click", function () {
      newTaskItem.remove(); // Remove a tarefa ao clicar no botão delete
    });

    // Adicionamos o botão de deletar dentro do item da lista
    newTaskItem.appendChild(deleteTodo);

    // Adicionamos o novo item à lista de tarefas
    listTask.appendChild(newTaskItem);

    // Limpamos o input após adicionar a tarefa
    inputTodo.value = "";
  });

  // Adicionamos o botão dentro da div "todoApp"
  todoApp.appendChild(createAddButton);
}
addButton();