import uuidv1 from 'uuid/v1';
class TodoModel  {
  constructor(todoText) {
    this.id = uuidv1();
    this.todoText = todoText;
    this.completed = false;
    this.date = new Date();
    this.startTime = this.convertDateFormat(new Date())
    this.timeline = `${this.startTime}~${this.endTime||this.startTime}`
    this.endTime = null;
  }
  convertDateFormat(date){
    let dateString = date.toISOString().split('T')[0]
    let timeString =date.toTimeString().split(' ')[0]
    return `${dateString} ${timeString}`
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