import React, { Component } from 'react';
import Header from './Header/Header.js';
import Filter from './Filter/Filter.js';
import styled from "styled-components";


class App extends Component {
  state = {
    filterList: [
      {id: 'All', text: 'ALL'},
      {id: 'ToDo', text: 'TODO'},
      {id: 'Done', text: 'DONE'}
    ]
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <Filter filterList={this.state.filterList}/>
      </div>
    );
  }
}


export default App;
