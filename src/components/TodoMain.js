import React, { Component } from 'react';
import Header from './Header/Header.js';
import Filter from './Filter/Filter.js';
import SearchInput from './SearchInput/SearchInput.js';
import TodoListItem from './TodoListItem/TodoListItem'
import {FloatButton} from './IconButton/IconButton.js';


import styled from "styled-components";

const ContentWrapper = styled.div`
  box-sizing: border-box;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
  position: relative;
`

const addIcon = require('../assets/images/addButton.png')

const TodoListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  width: 100%;
  margin: 0 auto;
`

class TodoMain extends Component {
  state = {
    filterList: [
      {id: 'All', text: 'ALL'},
      {id: 'ToDo', text: 'TODO'},
      {id: 'Done', text: 'DONE'}
    ],
    todos: this.props.todos
  }
  goToAddPage = ()=>{
    this.props.history.push(`/add`);
  }
  render() {
    const {todos} = this.state; 
    console.log(todos)
    return (
      <div className="App">
        <Header/>
        <Filter filterList={this.state.filterList}/>
        <ContentWrapper>
         <SearchInput/>
         <FloatButton iconSrc={addIcon} onClick={this.goToAddPage}/>
         <TodoListWrapper>
         {todos.map(({todoText, id, completed, timeline})=>(
          <TodoListItem
            key={id}
            id={id}
            todoText={todoText}
            completed={completed}
            timeline={timeline}
          />
          ))}
         </TodoListWrapper>
        </ContentWrapper> 
      </div>
    );
  }
}


export default TodoMain;
