import React, {Component} from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";
import TodoListItem from './TodoListItem/TodoListItem.js'










const TodoListEl = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding-left: 0;
  width: 80%;
  margin: 0 auto;
`

const TodoList = ({todos,updateTodo,updateCompleted,deleteTodo }) => {
 console.log(todos)
  return (
    <TodoListEl>
      {todos.map(({todoText, id,completed}, index)=>(
      <TodoListItem 
        key={id}
        todoId={id}
        todoText={todoText}
        updateTodo={updateTodo}
        updateCompleted={updateCompleted}
        deleteTodo={deleteTodo}
        completed={completed}
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