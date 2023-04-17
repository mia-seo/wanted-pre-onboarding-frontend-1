import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './Todo.scss';

const Todo = () => {
  const [todos, setTodos] = useState();
  const navigate = useNavigate();
  const isAuthorized = localStorage.getItem('token') !== null;

  useEffect(
    () => (isAuthorized ? navigate('/todo') : navigate('/signin')),
    [isAuthorized, navigate]
  );

  useEffect(() => {
    fetch('https://www.pre-onboarding-selection-task.shop/todos', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  return (
    <div className="todo">
      <h1>To-Do List</h1>
      <div className="todoContainer">
        <TodoInput />
        <div>
          {todos &&
            todos.map(({ id, todo, isCompleted }) => (
              <TodoList
                id={id}
                todo={todo}
                isCompleted={isCompleted}
                key={id}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
