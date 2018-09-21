
import TodoModel from '../components/TodoModel';
export const getLocalStorage = (key)=>{
  return JSON.parse(localStorage.getItem(key))
}

export const setLocalStorage = (key, value)=>{
  localStorage.setItem(key, JSON.stringify(value));
}

export const toggleCompleteTodo = (todo)=>{
  TodoModel.prototype.toggleComplete.call(todo)
}

export const updateTodoText = (todo, todoText)=>{
  TodoModel.prototype.updateTodoText.call(todo, todoText)
}



