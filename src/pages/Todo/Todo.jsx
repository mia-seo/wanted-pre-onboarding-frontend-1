import React, { useEffect, useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './Todo.scss';

const Todo = () => {
  const [todos, setTodos] = useState();

  useEffect(() => {
    fetch('https://pre-onboarding-selection-task.shop/todos', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then(res => res.json())
      .then(data => setTodos(data));
  }, [todos]);

  return (
    <div className="todo">
      <h1>To-Do List</h1>
      <div className="todoContainer">
        <TodoInput />
        <div>
          {todos &&
            todos.map(({ id, todo }) => (
              <TodoList id={id} todo={todo} key={id} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
