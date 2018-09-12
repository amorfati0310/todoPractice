import React, { Component } from 'react';
import Header from './Header/Header.js';
import Filter from './Filter/Filter.js';
import SearchInput from './SearchInput/SearchInput.js';
import IconButton from './IconButton/IconButton.js';

import styled from "styled-components";

const ContentWrapper = styled.div`
  box-sizing: border-box;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
  position: relative;
`

const addIcon = require('../assets/images/addButton.png')

class TodoMain extends Component {
  state = {
    filterList: [
      {id: 'All', text: 'ALL'},
      {id: 'ToDo', text: 'TODO'},
      {id: 'Done', text: 'DONE'}
    ],
    todos: this.props.history.location.state
  }
  goToAddPage = ()=>{
    this.props.history.push(`/add`);
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <Filter filterList={this.state.filterList}/>
        <ContentWrapper>
         <SearchInput/>
         <IconButton iconSrc={addIcon} onClick={this.goToAddPage}/>
        </ContentWrapper> 
      </div>
    );
  }
}


export default TodoMain;
