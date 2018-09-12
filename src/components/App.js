import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TodoMain from "./TodoMain";
import AddToDo from './AddToDo/AddToDo.js';
import styled, {injectGlobal} from "styled-components";


const GlobalStyles = injectGlobal`
      @font-face {
      font-family: 'open-arrow';
      src: url('path-to-font-file/OpenArrow-Regular.eot') format('embedded-opentype'),
           url('path-to-font-file/OpenArrow-Regular.woff2') format('woff2'),
           url('path-to-font-file/OpenArrow-Regular.woff') format('woff'),
           url('path-to-font-file/OpenArrow-Regular.otf') format('opentype'),
           url('path-to-font-file/OpenArrow-Regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
      unicode-range: U+2190-21ff;
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

