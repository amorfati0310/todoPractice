import React from 'react';
import styled from "styled-components";

const TodoItem = styled.li`
  font-size: 24px;
  border-bottom: 1px solid #ededed;
  
`

const TodoListItem = ({todoText: {todoText}}) => {
  return (
    <TodoItem>
      {todoText}
    </TodoItem>
  );
};


const TodoListEl = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding-left: 0;
  width: 80%;
  margin: 0 auto;
`

const TodoList = ({todos}) => {
 console.log(todos)
  return (
    <TodoListEl>
      {todos.map((todo, index)=>(
      <TodoListItem 
        key={index}
        todoText={todo}
      />))}
    </TodoListEl>
  );
};

export default TodoList;