import uuidv1 from 'uuid/v1';
class TodoModel  {
  constructor(todoText) {
    this.id = uuidv1();
    this.todoText = todoText;
    this.completed = false;
    this.date = new Date();
    this.timeline = '2018-09-09 18:00 ~ 2018-09-09 19:00'
    this.startTime = new Date();
    this.endTime = null;
  }
  updateTodoText(todoText){
    this.todoText = todoText;
    return this;
  }
  updateTodoComplete(completed){
    this.completed = completed;
    return this;
  }
  toggleComplete(){
    this.completed = !this.completed;
    return this;
  }
  setStartTime(startTime){
   this.startTime = startTime;
  }
}

export default TodoModel;