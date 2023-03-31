import React from 'react';
import './Signin.scss';

const Signin = () => {
  return (
    <div className="signin">
      <h1>SignIn</h1>
      <form className="signinForm">
        <div className="inputBox">
          <label htmlFor="email">email</label>
          <input id="email" type="text" data-testid="email-input" />
        </div>
        <div className="inputBox">
          <label htmlFor="password">password</label>
          <input id="password" type="password" data-testid="password-input" />
        </div>
        <button data-testid="signin-button">submit</button>
      </form>
    </div>
  );
};

export default Signin;
