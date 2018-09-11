import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import SetButton from '../SetButton/SetButton.js';

const StyledForm = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  background: #fff;
`;

const TodoInput = styled.input`
  box-sizing: border-box;
  padding: 16px 16px 16px 60px;

  border: 0;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  position: relative;
  font-size: 24px;
  line-height: 1.4em;

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #eee;
    opacity: 1; /* Firefox */
  }
  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #eee;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #eee;
  }
`;

class TodoForm extends Component {
  render() {
    const {onSubmit, buttonText, onSetButtonClick} = this.props;
    return (
      <StyledForm onSubmit={onSubmit}>
        <SetButton 
          buttonText={buttonText} 
          onSetButtonClick={onSetButtonClick}/>
          <TodoInput 
            name="addInput"
            placeholder="할 일을 입력해주세요" 
            type="text" 
          />
      </StyledForm>
    );
  }
}

export default TodoForm;
