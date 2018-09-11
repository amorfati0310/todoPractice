class TodoModel  {
  constructor(id, todoText) {
    Object.assign(this, {id, todoText})
    this.completed = false;
  }
  updateTodoText(todoText){
    this.todoText = todoText;
  }
  updateTodoComplete(completed){
    this.completed = completed;
  }
}

export default TodoModel;