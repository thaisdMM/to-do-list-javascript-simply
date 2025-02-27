const todo = document.getElementById("todoInput"); // Pega o input
const addTodo = document.getElementById("addTodoButton"); // Pega o botão
const listTodo = document.getElementById("todoList"); // Pega a <ul>

/*
	.	todoValue.trim()
	•	todoValue é o valor que o usuário digitou no input.
	•	O método .trim() remove espaços extras antes e depois do texto.
	•	Se o usuário só digitou espaços, trim() transforma isso em uma string vazia ""*/

function addTodoTask() {
  const todoValue = todo.value; // Pega o valor do input
  if (todoValue.trim() === "") {
    console.log("Campo vazio, digite algo primeiro");
    return;
  }
  const newTodoItem = document.createElement("li"); // Cria um <li>
  newTodoItem.textContent = todoValue; // Define o texto do <li> como o que foi digitado 
  newTodoItem.classList.add("todo-item"); // Classe para estilizar a tarefa

  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.type = "button";
  deleteButton.classList.add("delete_btn")  // Adicionando uma classe ao botão

  // Adiciona o botão dentro do <li>, ao lado do texto
  newTodoItem.appendChild(deleteButton);

  listTodo.appendChild(newTodoItem); // Adiciona o <li>(child) na <ul>(father)

  todo.value = ""; // Limpa o input depois de adicionar a tarefa

  deleteButton.addEventListener("click", function () {
    newTodoItem.remove(); // Remove o <li> inteiro, incluindo o botão
  });
}