import React, { Component } from "react";
import styled from "styled-components";
import Header from "./components/Header/Header.js";
import TodoForm from "./components/Form/TodoForm.js";
import TodoList from './components/TodoList/TodoList.js';
import SetButton from './components/SetButton/SetButton.js';
import TodoModel from './components/TodoModel/TodoModel.js';
import TodoListItem from './components/TodoListItem/TodoListItem.js';
import TodoToolBar from './components/TodoToolBar/TodoToolBar.js';
import uuidv1 from 'uuid/v1';

const AppWrapper = styled.div`
    width: 100%;
    background: #f5f5f5;
    min-height: 100vh;
    box-sizing: border-box;
    padding-left: 25px;
    padding-right: 25px;
`

const TodoListEl = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding-left: 0;
  width: 100%;
  margin: 0 auto;
`
class App extends Component {
  state = {
    todos: {},
    countsCompleted: 0,
    makeAllDone: true,
  }
  handleSubmit = (e) => {
    e.preventDefault(); 
    const input = e.target.elements.addInput
    const todoText = input.value.trim();
    todoText && this.addTodo(todoText) 
    input.value = '' 
  };
  addTodo = (todoText)=>{
    const id = uuidv1();
    const newTodo = new TodoModel(id, todoText)
    this.setState({
      todos: {...this.state.todos, [id]: newTodo}
    })
  }
  
  updateTodo = (id, updateText)=>{
    const prevTodos = this.state.todos
    prevTodos[id].updateTodoText(updateText)
    this.setState({todos: {...prevTodos}})
  }
  updateCompleteCount(completed){
    const countCompleted = this.state.countsCompleted
    if(completed)this.setState({countsCompleted: countCompleted+1})
    else this.setState({countsCompleted: countCompleted-1})
  
    const count = completed ? countCompleted+1 : countCompleted-1 
    const AllDone = this.checkAllCompleted(count)
    this.setAllSetButtonState(AllDone);
  }
  setAllSetButtonState(allDone){
    this.setState({makeAllDone: !allDone})
  }
  checkAllCompleted(count){
    return count===Object.values(this.state.todos).length 
  }
  updateCompleted = (id, completed)=>{
    const prevTodos = this.state.todos
    prevTodos[id].updateTodoComplete(completed)
    this.setState({todos: {...prevTodos}})
    this.updateCompleteCount(completed)
  }
  deleteTodo = (id)=>{
    const todos = this.state.todos
    delete todos[id]
    this.setState({todos})
  }
  togglAllComplete = (e)=>{
    const todos = this.state.todos
    const updateTodos = Object.values(todos).reduce((ac,c)=>{
      c.updateTodoComplete(this.state.makeAllDone);
      ac[c.id] = c;
      return ac;
    },{})
    const counts = this.state.makeAllDone ? Object.values(todos).length : 0; 
    this.setState({
      todos: updateTodos,
      makeAllDone: !this.state.makeAllDone,
      countsCompleted: counts,
    })
  }

  render() {
    const {todos} = this.state
    return (
      <AppWrapper className="App" >
        <Header title={"Todos"} />
        <TodoForm 
          buttonText="All"
          onSetButtonClick={(e)=>this.togglAllComplete(e)}
          onSubmit={(done)=>this.handleSubmit(done)} 
        />
        <TodoListEl>
          {Object.values(todos).map(({todoText, id, completed})=>(   
          <TodoListItem 
            key={id}
            todoId={id}
            todoText={todoText}
            updateTodo={(id, updateText)=>this.updateTodo(id,updateText)}
            updateCompleted={(id,completed)=>this.updateCompleted(id, completed)}
            deleteTodo={(id)=>this.deleteTodo(id)}
            completed={completed}
          />))}
        </TodoListEl>
        <TodoToolBar></TodoToolBar>
      </AppWrapper>
    )
}
}

export default App;
