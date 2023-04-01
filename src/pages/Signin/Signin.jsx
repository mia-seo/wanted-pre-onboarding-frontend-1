import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signin.scss';

const Signin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const isAuthorized = localStorage.getItem('token') !== null;

  useEffect(
    () => (isAuthorized ? navigate('/todo') : navigate('/signin')),
    [isAuthorized, navigate]
  );

  const handleEmailInput = e => {
    setEmail(e.target.value);
  };
  const handlePasswordInput = e => {
    setPassword(e.target.value);
  };

  const isEmailValid = email && email.includes('@');
  const isPasswordValid = password && password.length >= 8;
  const isAllVaild = isEmailValid && isPasswordValid;

  const signin = (e, email, password) => {
    e.preventDefault();
    fetch('http://localhost:8000/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(res => res.json)
      .then(data => {
        if (data.access_token) {
          localStorage.setItem('token', data.access_token);
          navigate('/todo');
        }
      });
    setEmail('');
    setPassword('');
  };
  return (
    <div className="signin">
      <h1>SignIn</h1>
      <form className="signinForm" onSubmit={e => signin(e, email, password)}>
        <div className="inputBox">
          <label htmlFor="email">email</label>
          <input
            id="email"
            type="text"
            value={email || ''}
            onChange={handleEmailInput}
            data-testid="email-input"
          />
        </div>
        <div className="inputBox">
          <label htmlFor="password">password</label>
          <input
            id="password"
            type="password"
            value={password || ''}
            onChange={handlePasswordInput}
            data-testid="password-input"
          />
        </div>
        <button
          data-testid="signin-button"
          disabled={isAllVaild ? false : true}
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default Signin;
