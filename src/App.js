import React, { Component } from "react";
import styled from "styled-components";
import Header from "./components/Header/Header.js";
import TodoForm from "./components/Form/TodoForm.js";
import TodoList from './components/TodoList/TodoList.js';
import uuidv1 from 'uuid/v1';

const AppWrapper = styled.div`
    background: #f5f5f5;
    min-height: 100vh;
`

class App extends Component {
  state = {
    todos: {},
  }
  addTodo = (e) => {
    e.preventDefault(); 
    const input = e.target[0]
    const todoText = input.value.trim();
    const id = uuidv1();
    const newTodo = {id, todoText, completed: false}
    // e.target[0] 이런 maginNumber 말고 알아서 접근할 수 있는 방법 없나?
    todoText&&this.setState({
      todos: {...this.state.todos, [id]: newTodo}
    })
    input.value = ''
  };
  updateTodo = ()=>{
    console.log('updated')
  }
  render() {
    return (
      <AppWrapper className="App" >
        <Header title={"Todos"} />
        <TodoForm onSubmit={this.addTodo}/>
        <TodoList 
          todos={Object.values(this.state.todos)}
          updateTodo={this.updateTodo}
        />
      </AppWrapper>
    );
  }
}

export default App;
