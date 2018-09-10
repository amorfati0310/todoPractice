import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TodoMain from "./TodoMain";
import AddToDo from './AddToDo/AddToDo.js';


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

