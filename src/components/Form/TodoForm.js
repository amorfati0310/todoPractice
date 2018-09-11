import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  width: 80%;
  margin: 0 auto;
`;

const TodoInput = styled.input`
  padding: 16px 16px 16px 60px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  position: relative;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  min-width: 500px;

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
  constructor(props) {
    super(props);
    this.state = { todoText: "" };
  }
  handleChange = ({ target }) => {
    const todoText = target.value.trim();
    todoText && this.setState({ todoText });
  };
 
  render() {
    return (
      <StyledForm onSubmit={this.props.onSubmit}>
        <TodoInput 
          name="addInput"
          placeholder="할 일을 입력해주세요" 
          type="text" 
          onChange={this.handleChange} 
        />
      </StyledForm>
    );
  }
}

export default TodoForm;
