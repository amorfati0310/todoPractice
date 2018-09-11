import React, { Component } from "react";
import styled from "styled-components";
import Header from "./components/Header/Header.js";
import TodoForm from "./components/Form/TodoForm.js";
import TodoList from './components/TodoList/TodoList.js';
import SetButton from './components/SetButton/SetButton.js';
import uuidv1 from 'uuid/v1';

const AppWrapper = styled.div`
    background: #f5f5f5;
    min-height: 100vh;
`

class App extends Component {
  state = {
    todos: {},
    countsCompleted: 0,
    makeAllDone: true,
  }
  addTodo = (e) => {
    e.preventDefault(); 
    const input = e.target.elements.addInput
    const todoText = input.value.trim();
    const id = uuidv1();
    const newTodo = {id, todoText, completed: false}
    // e.target[0] 이런 maginNumber 말고 알아서 접근할 수 있는 방법 없나?
    todoText&&this.setState({
      todos: {...this.state.todos, [id]: newTodo}
    })
    input.value = ''
  };
  updateTodo = (id, updateText)=>{
    this.setState({
      todos: {
        ...this.state.todos,
        [id]: {
          ...this.state.todos[id],
          todoText: updateText
        }
      }
    })
  }
  updateCompleteCount(completed){
    if(completed)this.setState({countsCompleted: this.state.countsCompleted+1})
    else this.setState({countsCompleted: this.state.countsCompleted-1})
    const count = completed ? this.state.countsCompleted+1 : this.state.countsCompleted
    if(this.checkAllCompleted(count)) this.setState({makeAllDone: false})
  }
  checkAllCompleted(count){
    return count===Object.values(this.state.todos).length 
  }
  updateCompleted = (id, completed)=>{
    console.log(id, completed);
    this.setState({
      todos: {
        ...this.state.todos,
        [id]: {
          ...this.state.todos[id],
          completed,
        }
      }  
    })
    this.updateCompleteCount(completed)
  }
  deleteTodo = (id)=>{
  const todos = this.state.todos
  delete todos[id]
   this.setState({
     todos,
   })
  }
  togglAllComplete = ()=>{
    const todos = {...this.state.todos}
    const updateTodos = Object.values(todos).reduce((ac,c)=>{
      c.completed = this.state.makeAllDone;
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
    return (
      <AppWrapper className="App" >
        <Header title={"Todos"} />
        <SetButton buttonText="All" onClick={()=>this.togglAllComplete()}/>
        <TodoForm onSubmit={(done)=>this.addTodo(done)}/>
        <TodoList 
          todos={Object.values(this.state.todos)}
          updateTodo={(id, updateText)=>this.updateTodo(id,updateText)}
          updateCompleted={(id,completed)=>this.updateCompleted(id, completed)}
          deleteTodo={(id)=>this.deleteTodo(id)}
        />
      </AppWrapper>
    );
  }
}

export default App;
