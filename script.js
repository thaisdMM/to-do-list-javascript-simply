const todo = document.getElementById("todoInput"); // Pega o input
const addTodo = document.getElementById("addTodoButton"); // Pega o botão
const listTodo = document.getElementById("todoList"); // Pega a <ul>

function addTodoTask() {
  const todoValue = todo.value; // Pega o valor do input 
   console.log(todoValue);

  const newTodoItemm = document.createElement("li");
  newTodoItemm.textContent = todoValue
  listTodo.appendChild(newTodoItemm)

}
