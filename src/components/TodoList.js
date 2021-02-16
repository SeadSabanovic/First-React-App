import React from 'react';
import Todo from './Todo.js';

function TodoList({todos, setTodos}) {
  return (
    <div>
      {todos.map( todo => (
        <Todo setTodos={setTodos} todos={todos} content={todo.text} key={todo.id} todo={todo}/>
      ))}
    </div>
  )
}

export default TodoList
