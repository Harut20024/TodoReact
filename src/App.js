import './App.css';
import React, { useState } from 'react';
import Todolist from './Todolist';
import Todoform from './Todoform';
import Todofooter from './Todofooter';

function App() {
  const [todos, settodos] = useState([
    {
      id: Math.random(),
      text: "Learn JS",
      isComplited: false
    },
    {
      id: Math.random(),
      text: "Learn Node",
      isComplited: false
    },
    {
      id: Math.random(),
      text: "Learn React",
      isComplited: false
    },
    {
      id: Math.random(),
      text: "Learn CSS",
      isComplited: false
    }
  ]);

  return (
    <div className='App'>
        <h2 id='heading'>Todo List</h2>
      <Todoform
        onAdd={(text) => {
          settodos([
            ...todos,
            {
              id: Math.random(),
              text: text,
              isComplited: false
            }
          ]);
        }}
      />
      <Todolist
        todos={todos}
        onDelete={(todo) => {
          settodos(todos.filter(tod => tod.id !== todo.id));
        }}
        onChange={newTodo => {
          settodos(todos.map(todo => {
            if (todo.id === newTodo.id) return newTodo;
            return todo;
          }));
        }}
      />
      <Todofooter
        todos={todos}
        onClearCompleted={() => {
          settodos(todos.filter(todo => !todo.isComplited));
        }}
      />
    </div>
  );
}

export default App;
