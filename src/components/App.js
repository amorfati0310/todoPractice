import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TodoMain from "./TodoMain";
import AddToDo from './AddToDo/AddToDo.js';
import styled, {injectGlobal} from "styled-components";
import ToDoModel from './TodoModel/TodoModle.js';
import TodoModel from './TodoModel/TodoModle.js';

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


class App extends Component {
  state = {
    todos: [
      {id: '1', todoText: '티티 간식 주기',completed: false, timeline: '2018-09-09 18:00 ~ 2018-09-09 19:00'},
      {id: '2', todoText: '티티 털 벗겨주기',completed: false, timeline: '2018-09-09 18:00 ~ 2018-09-09 19:00'},
      {id: '3', todoText: '둔둔이 챱챱',completed: true,  timeline: '2018-09-09 18:00 ~ 2018-09-09 19:00'},
      {id: '4', todoText: '둔둔이 산책시키기 ',completed: true, timeline: '2018-09-09 18:00 ~ 2018-09-09 19:00'},
      {id: '5', todoText: '둔둔이 뭉친털 자르기',completed: true, timeline: '2018-09-09 18:00 ~ 2018-09-09 19:00'},
      {id: '6', todoText: '둔둔이 냠냠이 주기 ',completed: true, timeline: '2018-09-09 18:00 ~ 2018-09-09 19:00'}
    ],
    filterKey: 'ALL',
    filterKeyList: ['ALL','TODO','DONE'],
  }
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
    // 어느 편이 좋은 패턴일까?
    // goToMain();
    this.goToMain();
  }
  goToMain(){
    this.addToDoCo.props.history.push('/')
  }
  handleFBClicked = ({target})=>{
    // Text처럼 자주 변경되는 것으로 하는 것은 별로 안 좋지만 기존에 그 Text자체가 filterList랑 동일하니까 괜찮은 듯 
    const filterKey = target.innerText
    this.setState({
      filterKey,
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
            filterKeyList={filterKeyList}
            filterKey={filterKey}
            todos={todos}
            FBonClick={this.handleFBClicked.bind(this)}
            {...props} 
          />
        }
        />
        <Route   
          exact path="/add" 
          render={(props) => 
            <AddToDo 
               ref={(ref)=>{this.addToDoCo = ref}}
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