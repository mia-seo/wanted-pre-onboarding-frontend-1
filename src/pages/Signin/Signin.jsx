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
    fetch('https://www.pre-onboarding-selection-task.shop/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('token', data.access_token);
        alert('로그인 성공!');
        navigate('/todo');
      });
    setEmail('');
    setPassword('');
  };

  const goToSignup = () => navigate('/signup');

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
      <button onClick={goToSignup}>signup</button>
    </div>
  );
};

export default Signin;
