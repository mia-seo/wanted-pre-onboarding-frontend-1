import React, { useState } from 'react';

const TodoList = ({ id, todo, isCompleted }) => {
  const [isChecked, setIsChecked] = useState(isCompleted);
  const [isEdit, setIsEdit] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo);

  const deleteTodo = id => {
    fetch(`https://www.pre-onboarding-selection-task.shop/todos/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then(() => window.location.reload());
  };

  const changeEditState = () => {
    setIsEdit(prev => !prev);
    setEditedTodo(todo);
  };

  const handleChangeInput = e => setEditedTodo(e.target.value);

  const handleCheckBox = () => setIsChecked(!isChecked);

  const updateTodo = (id, editedTodo, isChecked) => {
    fetch(`https://www.pre-onboarding-selection-task.shop/todos/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        todo: editedTodo,
        isCompleted: isChecked,
      }),
    }).then(() => window.location.reload());
  };

  return (
    <div>
      {!isEdit ? (
        <li className="todoList" key={id}>
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckBox}
            />
            <span>{todo}</span>
          </label>
          <button data-testid="modify-button" onClick={changeEditState}>
            edit
          </button>
          <button data-testid="delete-button" onClick={() => deleteTodo(id)}>
            delete
          </button>
        </li>
      ) : (
        <li className="todoList" key={id}>
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckBox}
            />
            <input
              type="text"
              value={editedTodo || ''}
              onChange={handleChangeInput}
            />
          </label>
          <button
            data-testid="submit-button"
            onClick={() => updateTodo(id, editedTodo, isChecked)}
          >
            submit
          </button>
          <button data-testid="cancel-button" onClick={changeEditState}>
            cancel
          </button>
        </li>
      )}
    </div>
  );
};

export default TodoList;
