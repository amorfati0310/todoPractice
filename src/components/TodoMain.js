import React, { Component } from 'react';
import Header from './Header';
import FilterBar from './FilterBar.js';
import SearchForm from './SearchForm.js';
import TodoListItem from './TodoListItem'
import {FloatButton} from './IconButton.js';
import styled from "styled-components";

// const spin = keyframes`{
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// }`


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
    if(searchText) return filterBarKeyAdapted.filter(({todoText})=>todoText.includes(searchText))
    else return filterBarKeyAdapted
  }
  goToAddPage = ()=>{
    this.props.history.push(`/add`);
  }
  getSearchText = (searchText)=>{
    this.setState({
      searchText
    })
  }
  handleFBClicked = (filterKey)=>{
    this.setState({
      filterKey
    })
  }

  render() {
    const { searchText, filterKey} = this.state; 
    const {filterKeyList, deleteToDo, todos, updateCompleted, updateText, toggleSortTodoList} = this.props;
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
          <SearchForm getSearchText={this.getSearchText} onSubmit={this.handleSearchSubmit}/>
          <FloatButton iconSrc={addIcon} onClick={this.goToAddPage} />
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
