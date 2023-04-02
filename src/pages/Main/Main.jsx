import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.scss';

const Main = () => {
  const navigate = useNavigate();

  const signup = () => navigate('/signup');
  const signin = () => navigate('/signin');
  const todo = () => navigate('/todo');

  return (
    <div className="mainContainer">
      <h1>Hello! Explore together!</h1>
      <div className="btnContainer">
        <button onClick={signup}>Signup</button>
        <button onClick={signin}>Siginin</button>
        <button onClick={todo}>To - Do List</button>
      </div>
    </div>
  );
};

export default Main;
