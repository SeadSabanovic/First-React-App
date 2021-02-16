import React from 'react';

function Todo({setTodos, todos, todo, content}) {
  const deleteHandler = () => {
    setTodos(todos.filter((el)=>el.id !== todo.id));
  }

  return (
    <div className="todo">
      <div className="todo-container">
        <div className="field-row-stacked">
          <input value={content} type="text" disabled/>
        </div>
        <button id="remove" onClick={deleteHandler}>Remove Task</button>
      </div>
    </div>
  )
}

export default Todo
