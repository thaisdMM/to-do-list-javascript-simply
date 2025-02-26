const todo = document.getElementById("todoInput"); // Pega o input
const addTodo = document.getElementById("addTodoButton"); // Pega o botão
const listTodo = document.getElementById("todoList"); // Pega a <ul>

function addTodoTask() {
  const todoValue = todo.value; // Pega o valor do input 
   console.log(todoValue);
   
   const newTodoItem = document.createElement("li"); // Cria um <li>
   newTodoItem.textContent = todoValue; // Define o texto do <li> como o que foi digitado
 
   listTodo.appendChild(newTodoItem); // Adiciona o <li> na <ul>
 
   todo.value = ""; // Limpa o input depois de adicionar a tarefa
 }