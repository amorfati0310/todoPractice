import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TodoMain from "./TodoMain";
import AddToDo from './AddToDo.js';
import styled from "styled-components";
import TodoModel from './TodoModel.js';
import mockTodoList from './mockTodoList';



const initialState = {
  todos: mockTodoList,
  isAscending:  true,
}

class App extends Component {
  state = initialState

  handleSubmit = (e,goToMain) => {
    e.preventDefault(); 
    const input = e.target.elements.addInput
    const todoText = input.value.trim();
    todoText && this.addToDo(todoText, goToMain) 
    input.value = '' 
  };
  addToDo = (todoText, goToMain)=>{
    const newTodo = new TodoModel(todoText)
    this.setState({
      todos:this.state.todos.concat(newTodo)
    })
    goToMain();
   
  }
  getTodoId(el){
    return el.closest(`[name=TodoItem]`).id
  }
  deleteToDo = ({target})=>{
    const todoId = this.getTodoId(target)
    const {todos} = this.state;
    const othersTodo = todos.filter(({id})=>id!==todoId)
    this.setState({
      todos: othersTodo,
    })
  }
  updateCompleted = ({target})=>{
    const todoId = this.getTodoId(target)
    const {todos} = this.state
    const updateOne = todos.find(({id})=>id===todoId)
    updateOne.toggleComplete()
    this.setState({
      todos,
    })
  }
  uppdateText = (id, todoText)=>{
    const {todos} = this.state
    const updateTodo = todos.find(({id})=>id===id)
    updateTodo.updateTodoText(todoText)
    this.setState({
      todos,
    })
  }
  goToMain(){
    this.addToDoCo.props.history.push('/')
  }

  toggleSortTodoList = ()=>{
    const { isAscending, todos } = this.state;
    const orderFactor = isAscending ? 'ascend': 'descend';
    const orderFn = {
      'ascend': (a,b)=>a.startTime > b.startTime,
      'descend': (a,b)=>a.startTime < b.startTime
    }
    const sorted =[...todos].sort(orderFn[orderFactor]);
    this.setState({
      todos: sorted,
      isAscending: !isAscending
    })
  }

  render() {
    const { todos } = this.state
    return (
    
    <BrowserRouter>
      <Switch>
        <Route 
          exact path="/" 
          render={(props) => 
          <TodoMain 
            toggleSortTodoList={this.toggleSortTodoList}
            todos={todos}
            deleteToDo={this.deleteToDo}
            updateCompleted={this.updateCompleted}
            updateText={(id,todoText)=>this.uppdateText(id,todoText)}
            {...props} 
          />
        }
        />
        <Route   
          exact path="/add" 
          render={(props) => 
            <AddToDo 
               onSubmit={(e, goToMain)=>this.handleSubmit(e,goToMain)}
              {...props} 
            />
          }
        />
      </Switch>
    </BrowserRouter>
    );
  }
}

export default App;