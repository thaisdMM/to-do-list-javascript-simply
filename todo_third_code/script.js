// Obtém a referência da div onde o conteúdo será inserido
const htmlContent = document.getElementById("htmlContent");

// Função que cria o campo de input onde o usuário digitará a tarefa
function createInput() {
  // Cria o elemento de input
  const inputTodo = document.createElement("input");
  inputTodo.type = "text"; // Define o tipo do input como 'text'
  inputTodo.id = "inputTodo"; // Atribui o id ao input (para facilitar o acesso)
  inputTodo.placeholder = "type your to-do task"; // Texto que aparece no input quando vazio

  // Adiciona o input ao HTML dentro do container 'htmlContent'
  htmlContent.appendChild(inputTodo);
}
// Chama a função para criar o input
createInput();

// Função que cria a lista 'ul' onde as tarefas serão exibidas
function createUlList() {
  // Cria a lista desordenada (ul)
  const ulList = document.createElement("ul");
  ulList.id = "ulList"; // Atribui um id à lista

  // Adiciona a lista ao container HTML
  htmlContent.appendChild(ulList);
}
// Chama a função para criar a lista
createUlList();

// Função que cria o botão de adicionar tarefa
function createAddButton() {
  // Cria o botão de adicionar tarefa
  const addButton = document.createElement("button");
  addButton.textContent = "add to-do"; // Texto do botão
  addButton.type = "button"; // Tipo do botão
  addButton.classList.add("addButton"); // Adiciona a classe ao botão (para estilizar)

  // Adiciona o evento de clique no botão
  addButton.addEventListener("click", () => {
    const inputTodo = document.getElementById("inputTodo"); // Pega o input
    const ulList = document.getElementById("ulList"); // Pega a lista 'ul'

    // Verifica se o campo de input está vazio ou contém apenas espaços em branco
    if (inputTodo.value.trim() === "") {
      // Chama a função para exibir uma mensagem na tela caso a tarefa seja inválida
      showMessage("Tarefa invalida, tente novamente");
      return; // Impede que o código continue a execução
    }

    // Cria o novo item da lista (li)
    const newTaskItem = document.createElement("li");
    newTaskItem.textContent = inputTodo.value; // Define o texto do item como o valor do input
    newTaskItem.classList.add("newTaskItem"); // Adiciona uma classe para estilizar

    // Chama a função para criar o botão de deletar para o item da lista
    createDeleteButton(newTaskItem);

    // Adiciona o item à lista
    ulList.appendChild(newTaskItem);

    // Limpa o campo de input após adicionar a tarefa
    inputTodo.value = "";
});

  // Adiciona o botão ao HTML
  htmlContent.appendChild(addButton);
}
// Chama a função para criar o botão
createAddButton();

// Função que cria o botão de deletar para cada item da lista
function createDeleteButton(taskItem) {
  // Cria o botão de deletar
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "delete"; // Define o texto do botão
  deleteButton.type = "button"; // Define o tipo do botão
  deleteButton.classList.add("deleteButton"); // Adiciona a classe para o botão

  // Adiciona o evento de clique ao botão, removendo o item da lista ao ser clicado
  deleteButton.addEventListener("click", () => taskItem.remove());

  // Adiciona o botão ao item da lista
  taskItem.appendChild(deleteButton);
}

// Função para exibir mensagens na tela
function showMessage(text) {
  const messageBox = document.getElementById("messageBox"); // Pega a referência do container da mensagem
  messageBox.textContent = text; // Exibe o texto da mensagem no container
  
  // Aguarda 2 segundos (2000 milissegundos) e apaga a mensagem
  setTimeout(() => {
    messageBox.textContent = "";
  }, 2000);
}
