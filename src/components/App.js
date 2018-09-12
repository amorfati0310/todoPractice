import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TodoMain from "./TodoMain";
import AddToDo from './AddToDo/AddToDo.js';
import styled, {injectGlobal, ThemeProvider} from "styled-components";


const GlobalStyles = injectGlobal`
    button {
      border: none;
      background: transparent;
      :focus {
        outline: none;
      }
    }
`

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={TodoMain} />
        <Route exact path="/add" component={AddToDo} />
      </Switch>
    </BrowserRouter>
    );
  }
}

export default App;

