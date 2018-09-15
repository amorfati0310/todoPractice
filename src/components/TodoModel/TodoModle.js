import uuidv1 from 'uuid/v1';
class TodoModel  {
  constructor(todoText) {
    this.id = uuidv1();
    this.todoText = todoText;
    this.completed = false;
    this.date = new Date();
    this.timeline = '2018-09-09 18:00 ~ 2018-09-09 19:00'
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