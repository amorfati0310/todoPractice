import React, { Component } from "react";
import styled from "styled-components";
import Header from "./components/Header/Header.js";
import TodoForm from "./components/Form/TodoForm.js";
import uuidv1 from 'uuid/v1';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      todos: {},
     };
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
  render() {
    return (
      <div className="App">
        <Header title={"Todos"} />
        <TodoForm onSubmit={this.addTodo}/>
      </div>
    );
  }
}

export default App;
