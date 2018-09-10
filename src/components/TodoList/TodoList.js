import React, {Component} from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";
import { setTimeout } from 'timers';

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
`
class TodoListItem extends Component {

  state = {
    isEdited: false,
    todoText: ""
  }
  makeActiveInput = ({target})=>{
   this.setState({
     isEdited: true
   })
  }
  makeDeactiveInput = ()=> {
    this.setState({
      isEdited: false
    })
  }
  handleChange = ({target})=> {
    this.setState({
      todoText: target.value
    })
  }
  componentDidMount(){
    this.setState({
      todoText: this.props.todoText
    })
  }
  componentDidUpdate(){
 
    this.input.focus();
  }

  render() {
    const {todoText, updateTodo, } = this.props;
    return (
      <TodoItem>
        <ListItemContents onDoubleClick={this.makeActiveInput}>
          <CompletedBtn></CompletedBtn>
          <TodoInput 
            innerRef={el => this.input = el}
            disabled={!this.state.isEdited}
            onBlur={this.makeDeactiveInput}
            type="text" 
            value={this.state.todoText}
            onChange={this.handleChange} 
          />
          <DeleteBtn>X</DeleteBtn>
        </ListItemContents>
  
      </TodoItem>
    );
  }
}






const TodoListEl = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding-left: 0;
  width: 80%;
  margin: 0 auto;
`

const TodoList = ({todos,updateTodo}) => {
 console.log(todos)
  return (
    <TodoListEl>
      {todos.map(({todoText}, index)=>(
      <TodoListItem 
        key={index}
        todoText={todoText}
        updateTodo={updateTodo}
      />))}
    </TodoListEl>
  );
};
TodoList.defaultProps = {
  todos: [{todoText: 1,},{todoText: 2,},{todoText: 3,}]
}

TodoList.propTypes = {
  todos: PropTypes.array,
};

export default TodoList;