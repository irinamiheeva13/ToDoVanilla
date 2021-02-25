

// Selectors
const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list');


// Event Listeners
// todoForm.addEventListener("submit", handleSubmit);
todoButton.addEventListener("click", addTask);
todoList.addEventListener("click", deleteTask);
todoList.addEventListener("click", completeTask);


// Functions

function addTask(e) {
  e.preventDefault();

  const todoNode = document.createElement("div");
  todoNode.className = ("todo");

  const newTodoNode = document.createElement("li");
  newTodoNode.className = "todo-item"
  newTodoNode.innerText = todoInput.value;
  todoInput.value = "";

  const completeButtonNode = document.createElement("button");
  completeButtonNode.className = "complete-btn";
  completeButtonNode.innerHTML = '<i class="fas fa-check"></i>';

  const deleteButtonNode = document.createElement("button");
  deleteButtonNode.className = "delete-btn";
  deleteButtonNode.innerHTML = '<i class="fas fa-trash"></i>';

  todoNode.append(newTodoNode, completeButtonNode, deleteButtonNode);
  
  todoList.append(todoNode)
  
}



function deleteTask(e) {
  e.preventDefault();
  const item = e.target;

  if (item.classList[0] === "delete-btn") {
    const todo = item.parentElement;
    todo.remove();
  }

}

function completeTask(e) {
  e.preventDefault();
  const item = e.target;
  
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}



  