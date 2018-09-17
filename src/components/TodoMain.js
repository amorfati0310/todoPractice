import React, { Component } from 'react';
import Header from './Header/Header.js';
import FilterBar from './FilterBar/FilterBar.js';
import SearchForm from './SearchForm/SearchForm.js';
import TodoListItem from './TodoListItem/TodoListItem'
import {FloatButton} from './IconButton/IconButton.js';
import Filter from './Filter/Filter.js';

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
    isEdit: false,
    searchText: '',
    filterKey: 'ALL',
  }
  static defaultProps = {
    filterKeyList: ['ALL','TODO','DONE'],
  }
  getFilterList = (todoList, filterKey, searchText)=>{
    const filterList = {
      'ALL': todoList=>todoList,
      'TODO': todoList=>todoList.filter(todo=>!todo.completed),
      'DONE': todoList=>todoList.filter(todo=>todo.completed),
    }
    const filterBarKeyAdapted =filterList[filterKey](todoList)
    if(searchText){
      return filterBarKeyAdapted.filter(({todoText})=>todoText.indexOf(searchText)!==-1)
    }
    else return filterBarKeyAdapted
  }
  goToAddPage = ()=>{
    this.props.history.push(`/add`);
  }
  hanldeSearchSubmit = (e)=>{  
    e.preventDefault()
    const searchText = e.target.elements.searchInput.value
    this.setState({
      searchText,
    })
    e.target.elements.searchInput.value = ""
  }
  handleFBClicked = ({target})=>{
    // Text처럼 자주 변경되는 것으로 검출 하는 것은 별로 안 좋지만 기존에 그 Text자체가 filterList랑 동일하니까 괜찮은 듯 
    const filterKey = target.innerText
    this.setState({
      filterKey,
    })
  }

  render() {
    const {filterList, isEdit, searchText, filterKey} = this.state; 
    const {FBonClick,filterKeyList, deleteToDo, todos, updateCompleted, updateText, toggleSortTodoList} = this.props;
    const filteredTodo = this.getFilterList(todos,filterKey, searchText)
    return (
      <div className="App">
        <Header/>
        <ContentWrapper>
          <FilterBar
            filterKeyList={filterKeyList}
            FBonClick={this.handleFBClicked}
            toggleSortTodoList={toggleSortTodoList}
          />
          <SearchForm onSubmit={this.hanldeSearchSubmit}/>
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
                updateCompleted={updateCompleted}
                updateText={updateText}
              />))
            }
          </TodoListWrapper>
        </ContentWrapper> 
      </div>
    );
  }
}


export default TodoMain;
