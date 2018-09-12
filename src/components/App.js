import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TodoMain from "./TodoMain";
import AddToDo from './AddToDo/AddToDo.js';
import styled, {injectGlobal} from "styled-components";


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
  }
  addToDo = ()=>{
    
  }
  render() {
    return (
    <BrowserRouter>
      <Switch>
        <Route 
          exact path="/" 
          render={(props) => 
          <TodoMain 
            todos={this.state.todos}
            {...props} 
          />
        }
        />
        <Route exact path="/add" component={AddToDo} />
      </Switch>
    </BrowserRouter>
    );
  }
}

export default App;