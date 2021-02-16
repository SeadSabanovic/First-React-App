import React, {useState} from 'react';
import './css/main.css';
import "98.css";

//Importing components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  //States
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])

  return (
    <div className="App">
      <div className="container">

        <div className="window">
        <div className="title-bar">
          <div className="title-bar-text">React Todo List</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" />
          </div>
        </div>

        <div className="window-body">
          <h5 style={{ textAlign: "center" }}>Here you can add tasks</h5>
          <Form 
            setInputText={setInputText}
            inputText={inputText}
            todos={todos}
            setTodos={setTodos} />
          <hr/>
          <h5 style={{ textAlign: "center" }}>Here you can remove added tasks</h5>
          <TodoList setTodos={setTodos} todos={todos}/>
        </div>

      </div>
      
    </div>
    </div>
  );
}

export default App;
