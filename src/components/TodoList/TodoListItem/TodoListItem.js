import React, { Component } from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";

const checkImg = require('../../../assets/images/check.png')

const TodoItem = styled.li`
  position: relative;
  font-size: 24px;
  border-bottom: 1px solid #ededed;
  height: 65px;
  background: #fff;
  box-sizing: border-box;
`

const ListItemContents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding-left: 30px;
  padding-right: 30px;
`

const CompletedBtn = styled.button`
  border: none;
  width: 40px;
  height: 40px;
  border: 1px solid #333;
  border-radius: 50%;
  & img {
    max-width: 100%;
  }
`
const DeleteBtn = styled.button`
  border: none;
  width: 40px;
  height: 40px;
  font-size: 32px;
  color: red;
`

const TodoInput = styled.input`
  border: none;
  height: 60px;
  min-width: 300px;
  font-size: 24px;
  text-decoration: ${({isCompleted})=>isCompleted ? "line-through" : "none" };
`


class TodoListItem extends Component {

  state = {
    isEdited: false,
    todoText: this.props.todoText,
    id: this.props.todoId,
    completed: this.props.completed,
  }
  makeActiveInput = ({target})=>{
   this.setState({
     isEdited: true
   })
  }
  updateTodo = (updateTodo)=> {
    this.setState({
      isEdited: false
    })
    updateTodo(this.state.id, this.state.todoText);
    
  }
  handleChange = ({target})=> {
    this.setState({
      todoText: target.value
    })
  }
  hanldeToggleUpdate = (updateCompleted)=>{
    const completed = !this.state.completed
    this.setState({
      completed,
    }) 
    updateCompleted(this.state.id, completed)
  }

  componentDidUpdate(){
    this.input.focus();
  }
  handleDelete(deleteTodo){
    deleteTodo(this.state.id)
  }
  render() {
    const {todoText, updateTodo,updateCompleted, deleteTodo, completed } = this.props;
    return (
      <TodoItem>
        <ListItemContents onDoubleClick={this.makeActiveInput}>
          <CompletedBtn onClick={()=>this.hanldeToggleUpdate(updateCompleted)}>
            {completed&&<img src={checkImg} alt=""/>}
          </CompletedBtn>
          <TodoInput 
            isCompleted={completed}
            innerRef={el => this.input = el}
            disabled={!this.state.isEdited}
            onBlur={()=>this.updateTodo(updateTodo)}
            type="text" 
            value={this.state.todoText}
            onChange={this.handleChange} 
          />
          <DeleteBtn onClick={()=>this.handleDelete(deleteTodo)}>X</DeleteBtn>
        </ListItemContents>
      </TodoItem>
    );
  }
}

export default TodoListItem;