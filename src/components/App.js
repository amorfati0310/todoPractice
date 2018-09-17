import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TodoMain from "./TodoMain";
import AddToDo from './AddToDo/AddToDo.js';
import styled, {injectGlobal} from "styled-components";
import TodoModel from './TodoModel/TodoModle.js';
import mockTodoList from './mockTodoList';

const GlobalStyles = injectGlobal`
    body {
     margin: 0; 
    }
    button {
      border: none;
      background: transparent;
      :focus {
        outline: none;
      }
    }
    li {
      list-style: none;
    }
    ul {
      padding-left: 0;
      margin: 0;
    }
    p {
      margin: 0;
    }
    input {
      :focus {
        outline: none;
      }
    }
`

const initialState = {
  todos: mockTodoList,
  filterKey: 'ALL',
  filterKeyList: ['ALL','TODO','DONE'],
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
    const todos = this.state.todos
    const othersTodo = todos.filter(todo=>todo.id!==todoId)
    this.setState({
      todos: othersTodo,
    })
  }
  updateCompleted = ({target})=>{
    const todoId = this.getTodoId(target)
    const todos = this.state.todos
    const updateOne = todos.find(todo=>todo.id===todoId)
    updateOne.toggleComplete()
    this.setState({
      todos,
    })
  }
  uppdateText = (id, todoText)=>{
    const todos = this.state.todos
    const updateTodo = todos.find(todo=>todo.id===id)
    updateTodo.updateTodoText(todoText)
    this.setState({
      todos,
    })
  }
  goToMain(){
    this.addToDoCo.props.history.push('/')
  }
  handleFBClicked = ({target})=>{
    // Text처럼 자주 변경되는 것으로 검출 하는 것은 별로 안 좋지만 기존에 그 Text자체가 filterList랑 동일하니까 괜찮은 듯 
    const filterKey = target.innerText
    this.setState({
      filterKey,
    })
  }
  toggleSortTodoList = ()=>{
    const { isAscending, todos } = this.state;
    const orderFactor = isAscending ? 1: -1;

    const sorted =[...todos].sort((a,b)=>{
      if (a.startTime > b.startTime) {
        return orderFactor;
      }
      if (a.startTime < b.startTime) {
        return -orderFactor;
      }
      return 0;
    });
    this.setState({
      todos: sorted,
      isAscending: !isAscending
    })
  }

  render() {
    const {filterKey, todos, filterKeyList} = this.state
    return (
    
    <BrowserRouter>
      <Switch>
        <Route 
          exact path="/" 
          render={(props) => 
          <TodoMain 
            toggleSortTodoList={this.toggleSortTodoList}
            filterKeyList={filterKeyList}
            filterKey={filterKey}
            todos={todos}
            deleteToDo={this.deleteToDo}
            updateCompleted={this.updateCompleted}
            FBonClick={this.handleFBClicked.bind(this)}
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