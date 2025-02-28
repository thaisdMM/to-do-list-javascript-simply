const htmlContent = document.getElementById("htmlContent")

function createInput() {
   const inputTodo = document.createElement("input")
    inputTodo.type = "text"
    inputTodo.id = "inputTodo"
    inputTodo.placeholder = "type your to-do task"

   htmlContent.appendChild(inputTodo)
}
createInput()

function createAddButton() {
   const addButton = document.createElement("button")
   addButton.textContent = "add to-do"
   addButton.type = "button"
   addButton.id = "addButton"

   addButton.addEventListener("click", () =>
      console.log("cliquei no botão")
   )

   htmlContent.appendChild(addButton)
}
createAddButton()