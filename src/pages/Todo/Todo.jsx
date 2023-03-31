import React from 'react';
import './Todo.scss';

const Todo = () => {
  return (
    <div className="todo">
      <h1>To-Do List</h1>
      <div className="todoContainer">
        <div className="createTodo">
          <input type="text" />
          <button>create</button>
        </div>
        <div>
          <li className="todoList">
            <label>
              <input type="checkbox" />
              <span>TODO 1</span>
            </label>
            <button>edit</button>
            <button>delete</button>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Todo;
