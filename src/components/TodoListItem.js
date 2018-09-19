import React, { Component } from 'react';
import styled, {css} from "styled-components";
import {IconButton} from './IconButton.js';

const checkIcon = require('../assets/images/checked.svg')
const transhIconGray = require('../assets/images/complete-remove.png')
const trashIconPink = require('../assets/images/remove.png') 


const TodoListItemEl = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`





const TodoText = styled.p`
  font-family: SFCompactDisplay;
  font-size: 16px;
  line-height: 19px;
  font-weight: 500;
  letter-spacing: normal;
  text-align: left;
  color: #444444;
  margin-top: 19px;
  margin-bottom: 4px;
  ${props =>props.completed && css`
      color: #e8e8e8;
      text-decoration: line-through;
  `}
`

const TodoTimeLine = styled.p`
  font-size: 13px;
  line-height: 15px;
  color: #fd9a9a;
  margin-bottom: 17px;
  ${props =>props.completed && css`
      color: #e8e8e8;
      text-decoration: line-through;
  `}
`

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
`
const TextWrapper = styled.div`
  margin-left: 15px;
`

const TodoItemInputWrapper = styled.div`
  position: relative;
`
const DBClickInput = styled.input`
  position: absolute;
  font-family: SFCompactDisplay;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 4px;
  top: 0;
  border: 0;
  padding: 0;
`


const checkButtonBackground = '#00ffe2'
const checkButtonSize = 30;



class TodoListItem extends Component {
  static defaultProps = {
    name: 'TodoItem'
  }
  state = {
    isEdit: false,
    todoText: this.props.todoText,
  }
  editItem = ()=> {
    this.setState({isEdit: true})
  }
  updateTodoText = ({target:{value}})=> {
    this.setState({todoText: value})
  }
  handleEditSubmit = (e)=> {
    if(e.key==="Enter") return this.notifyUpdateText(); 
  }
  notifyUpdateText = ()=> {
    const {id, updateText} = this.props
    const {todoText} = this.state;
    updateText(id,todoText)
    this.setState({
      isEdit: false
    })
  }
  render() {
    const {todoText, id, completed, timeline, deleteToDo, updateCompleted, name } = this.props;
    const completeIcon = completed ? checkIcon : ''
    const removeIcon = completed ? trashIconPink : transhIconGray
    return (
      <TodoListItemEl
        id={id}
        name={name}
      >
        <ContentWrapper>
          <IconButton
            onClick={updateCompleted}
            completed={completed}
            background={checkButtonBackground}
            iconSrc={completeIcon}
            circle={true}
            size={checkButtonSize}
          />
            <TextWrapper >
              <TodoItemInputWrapper>
                <TodoText
                  onDoubleClick={this.editItem} 
                  completed={completed}>{todoText}
                </TodoText>
                {this.state.isEdit&&
                <DBClickInput 
                  autoFocus={true} 
                  type="text"
                  value={this.state.todoText}
                  onChange={this.updateTodoText}
                  onBlur={()=>this.notifyUpdateText()}
                  onKeyPress={(e)=>this.handleEditSubmit(e)}
                />
                }
              </TodoItemInputWrapper>
              <TodoTimeLine completed={completed}>{timeline}</TodoTimeLine>
            </TextWrapper>
        </ContentWrapper>
        <IconButton
          onClick={deleteToDo}
          iconSrc={removeIcon}
          size={checkButtonSize}
        />
      </TodoListItemEl>
    );
  }
}

export default TodoListItem;