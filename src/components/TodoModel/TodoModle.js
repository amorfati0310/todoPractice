import uuidv1 from 'uuid/v1';
class TodoModel  {
  constructor(todoText) {
    this.id = uuidv1();
    this.todoText = todoText;
    this.completed = false;
    this.date = new Date();
  }
  updateTodoText(todoText){
    this.todoText = todoText;
  }
  updateTodoComplete(completed){
    this.completed = completed;
  }
  toggleComplete(){
    this.completed = !this.completed;
  }
}

export default TodoModel;