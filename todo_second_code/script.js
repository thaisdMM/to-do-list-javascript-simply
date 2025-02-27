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
   createAddButton.textContent = "Add Task";
   createAddButton.type = "button";
   createAddButton.id = "addButton";
 
   createAddButton.addEventListener("click", function () {
     const inputTodo = document.getElementById("inputTodo");
     const listTask = document.getElementById("listTask");
 
     if (inputTodo.value.trim() === "") return; // Impede adicionar tarefas vazias
 
     // Criar um novo item de lista
     const newTaskItem = document.createElement("li");
     newTaskItem.textContent = inputTodo.value;
 
     // Criar botão de deletar dentro da mesma função
     const deleteTodo = document.createElement("button");
     deleteTodo.textContent = "Delete";
     deleteTodo.type = "button";
 
     // Adiciona evento para remover a tarefa ao clicar no botão
     deleteTodo.addEventListener("click", function () {
       newTaskItem.remove();
     });
 
     // Adicionar o botão dentro da `li`
     newTaskItem.appendChild(deleteTodo);
 
     // Adicionar `li` dentro da `ul`
     listTask.appendChild(newTaskItem);
 
     // Limpar o input após adicionar a tarefa
     inputTodo.value = "";
   });

   document.body.appendChild(createAddButton);
 }
 addButton();