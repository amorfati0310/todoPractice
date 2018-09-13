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
    todos: this.props.todos,
    filterKeyList: this.props.filterKeyList,
  }
  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.todos !== prevState.todos){
      return {todos: nextProps.todos}
    }
    return null;
  }
  getFilterList = (todoList, filterKey)=>{
    const filterList = {
      'ALL': todoList=>todoList,
      'TODO': todoList=>todoList.filter(todo=>!todo.completed),
      'DONE': todoList=>todoList.filter(todo=>todo.completed),
    }
    return filterList[filterKey](todoList)
  }
  goToAddPage = ()=>{
    this.props.history.push(`/add`);
  }
  render() {
    const {filterList, filterKeyList} = this.state; 
    const {FBonClick, filterKey, deleteToDo, todos} = this.props;
    const filteredTodo = this.getFilterList(todos,filterKey)
    
    console.log(todos)
    return (
      <div className="App">
        <Header/>
        <Filter 
          filterKeyList={filterKeyList}
          FBonClick={FBonClick}
        />
        <ContentWrapper>
         <SearchInput/>
         <FloatButton iconSrc={addIcon} onClick={this.goToAddPage}/>
         <TodoListWrapper>
         {filteredTodo.map(({todoText, id, completed, timeline})=>(
          <TodoListItem
            key={id}
            id={id}
            todoText={todoText}
            completed={completed}
            timeline={timeline}
            deleteToDo={deleteToDo}
          />
          ))}
         </TodoListWrapper>
        </ContentWrapper> 
      </div>
    );
  }
}


export default TodoMain;
