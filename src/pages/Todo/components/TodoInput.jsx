import React, { useState } from 'react';

const TodoInput = () => {
  const [value, setValue] = useState();

  const handleInputChange = e => {
    setValue(e.target.value);
  };

  const createTodo = (e, value) => {
    e.preventDefault();
    fetch('https://pre-onboarding-selection-task.shop/todos', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        todo: value,
      }),
    }).then(() => setValue(''));
  };

  return (
    <div className="createTodo">
      <input
        type="text"
        data-testid="new-todo-input"
        value={value || ''}
        onChange={handleInputChange}
      />
      <button
        data-testid="new-todo-add-button"
        onClick={e => {
          createTodo(e, value);
        }}
      >
        create
      </button>
    </div>
  );
};

export default TodoInput;
