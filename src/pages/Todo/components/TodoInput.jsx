import React, { useState } from 'react';

const TodoInput = () => {
  const [todo, setTodo] = useState();

  const handleInputChange = e => {
    setTodo(e.target.value);
  };

  const createTodo = (e, todo) => {
    e.preventDefault();
    if (todo === '') return;
    fetch('https://www.pre-onboarding-selection-task.shop/todos', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        todo,
      }),
    }).then(() => {
      setTodo('');
      window.location.reload();
    });
  };

  return (
    <div className="createTodo">
      <input
        type="text"
        data-testid="new-todo-input"
        value={todo || ''}
        onChange={handleInputChange}
      />
      <button
        data-testid="new-todo-add-button"
        onClick={e => {
          createTodo(e, todo);
        }}
      >
        create
      </button>
    </div>
  );
};

export default TodoInput;
