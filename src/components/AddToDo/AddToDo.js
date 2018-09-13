import React, { Component } from 'react';
import styled from "styled-components";
import uuidv1 from 'uuid/v1';

const Modal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left:0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.9);
`

const TodoLabel = styled.label`
  font-size: 14px;
  line-height: 16px;
  color: #00ffe2;
  margin-bottom: 10px;
`

const TodoForm = styled.form`
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-left: 25px;
  padding-right: 25px;
  & input {
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    padding-left: 12px;
    border: 0;
    border-bottom: solid 2px #00ffe2;
    background: transparent;
    font-size: 18px;
    line-height: 21px;
    color: #fff;
    ::placeholder {
      color: #696969;
    }
    :focus {
      outline: none;
    }
  }
`
const AddButton = styled.button`
  position: absolute;
  bottom:15px;
  right: 25px;
  border: 0;
  background: transparent;
  font-size: 18px;
  line-height: 21px;
  color: #00ffe2;
`



class AddToDo extends Component {

  backToMain = ()=>{
    this.props.history.push(`/`);
  }
  stopPageBack = (e)=>{
    e.stopPropagation();
  }
  render() {
    const {onSubmit} = this.props;
    return (
      <Modal onClick={this.backToMain}>
        <TodoForm onClick={this.stopPageBack} onSubmit={(e=>onSubmit(e, this.backToMain.bind(this)))}>
          <TodoLabel>What's next</TodoLabel>
          <input 
            autoFocus={true}
            type="text" 
            placeholder="내일 오후 3시까지 우체국 가기" 
            name="addInput"
          />
          <AddButton>Add</AddButton>
        </TodoForm>
      </Modal>
    );
  }
}

export default AddToDo;