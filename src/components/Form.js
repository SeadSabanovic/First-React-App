import React from 'react'

function Form(props) {

  const inputTextHandler = (e) => {
    props.setInputText(e.target.value);
  }

  const submitTodoHandler = (e) => {
    e.preventDefault();
    props.setTodos([
      ...props.todos,
      {
        text: props.inputText,
        id: Math.random() * 1000
      }
    ])
  }

  return (
    <form onSubmit={submitTodoHandler}>
      <div className="field-row" id="inputRow" style={{ justifyContent: "center" }}>
        <div className="field-row-stacked">
          <label htmlFor="mainInput">Add a Task</label>
          <input value={props.inputText} id="mainInput" type="text" autoComplete='off' onChange={inputTextHandler}/>
        </div>
        <button type='submit' id="submit">Add Task</button>
      </div>
    </form>
  )
}

export default Form
