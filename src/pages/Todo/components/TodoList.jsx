import React, { useState } from 'react';

const TodoList = ({ id, todo }) => {
  const [isEdit, setIsEdit] = useState(false);

  const deleteTodo = id => {
    fetch(`https://pre-onboarding-selection-task.shop/todos/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then(() => window.location.reload());
  };

  return (
    <li className="todoList" key={id}>
      <label>
        <input type="checkbox" />
        <span>{todo}</span>
      </label>
      <button data-testid="modify-button">edit</button>
      <button data-testid="delete-button" onClick={() => deleteTodo(id)}>
        delete
      </button>
    </li>
  );
};

export default TodoList;
