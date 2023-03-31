import React from 'react';
import './Signup.scss';

const Signup = () => {
  return (
    <div className="signup">
      <h1>SignUp</h1>
      <form className="signupForm">
        <div className="inputBox">
          <label htmlFor="email">email</label>
          <input id="email" type="text" data-testid="email-input" />
        </div>
        <div className="inputBox">
          <label htmlFor="password">password</label>
          <input id="password" type="password" data-testid="password-input" />
        </div>
        <button data-testid="signup-button">submit</button>
      </form>
    </div>
  );
};

export default Signup;
