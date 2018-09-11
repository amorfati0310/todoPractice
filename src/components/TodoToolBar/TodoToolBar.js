import React, { Component } from 'react';
import styled from "styled-components";

const ControllerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const TodoToolButtonStyle = `
    border: 0;
    font-size: 16px;
    color: #38d9a9;
    padding: 10px;
    height: 50px;
` 
const TodoToolButton = styled.button`
  ${TodoToolButtonStyle}
`

const ButtonWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  & li {
    list-style: none;
    padding: 10px;
    box-sizing: border-box;
  }
  & button {
    ${TodoToolButtonStyle}
  }
`

const CountText = styled.span`
  font-size: 24px;
  margin-right: 10px;
  color: #333;
`

class TodoToolBar extends Component {
  render() {
    const {counts, clear, onClick} = this.props;
    return (
      <ControllerWrapper>
          <p><CountText>{counts}</CountText>Items Left</p>  
          <ButtonWrapper>
            <li>
              <button 
                onClick={onClick}
                name="All"
                >
                All
              </button>
            </li>
            <li>
            <button 
                onClick={onClick}
                name="Active"
                >
                Active
              </button>
            </li>
            <li>
            <button 
                onClick={onClick}
                name="Completed"
                >
                Completed
              </button>
            </li>
          </ButtonWrapper>
          {(clear!==0)&&
            <TodoToolButton  
              onClick={onClick}
              name="Completed">
              Clear Completed
            </TodoToolButton>}
      </ControllerWrapper>
    );
  }
}

export default TodoToolBar;