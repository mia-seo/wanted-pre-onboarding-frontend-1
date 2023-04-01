import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.scss';

const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const isAuthorized = localStorage.getItem('token') !== null;

  useEffect(
    () => (isAuthorized ? navigate('/todo') : navigate('/signup')),
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

  const signup = (e, email, password) => {
    e.preventDefault();
    fetch('https://pre-onboarding-selection-task.shop/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then(res => {
      console.log(res);
      alert(res.statusText);
      navigate('/signin');
    });
    setEmail('');
    setPassword('');
  };
  return (
    <div className="signup">
      <h1>SignUp</h1>
      <form className="signupForm" onSubmit={e => signup(e, email, password)}>
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
          data-testid="signup-button"
          disabled={isAllVaild ? false : true}
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
