import React, { Component } from 'react';
import styled from "styled-components";
import {IconButton} from '../IconButton/IconButton.js';

const checkIcon = require('../../assets/images/checked.svg')
const transhIconGray = require('../../assets/images/complete-remove.png')
const trashIconPink = require('../../assets/images/remove.png') 
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
`

const TodoTimeLine = styled.p`
  font-size: 13px;
  line-height: 15px;
  color: #fd9a9a;
  margin-bottom: 17px;
`

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
`
const TextWrapper = styled.div`
  margin-left: 15px;
`

const checkButtonBackground = '#00ffe2'
const checkButtonSize = 30;



class TodoListItem extends Component {
  render() {
    
    const {todoText, id, completed, timeline} = this.props;
    const completeIcon = completed ? checkIcon : ''
    const removeIcon = completed ? trashIconPink : transhIconGray
    return (
      <TodoListItemEl>
        <ContentWrapper>
          <IconButton
            completed={completed}
            background={checkButtonBackground}
            iconSrc={completeIcon}
            circle={true}
            size={checkButtonSize}
          />
          <TextWrapper>
            <TodoText>{todoText}</TodoText>
            <TodoTimeLine>{timeline}</TodoTimeLine>
          </TextWrapper>
        </ContentWrapper>
        <IconButton
          iconSrc={removeIcon}
          size={checkButtonSize}
        />
      </TodoListItemEl>
    );
  }
}

export default TodoListItem;