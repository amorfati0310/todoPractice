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
    ul {
      padding-left: 0;
      margin: 0;
    }
`

class App extends Component {
  state = {
    todos: [
      {id: 'All', todoText: 'ALL',completed: false},
      {id: 'ToDo', todoText: 'TODO',completed: false},
      {id: 'Done', todoText: 'DONE',completed: true}
    ],
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