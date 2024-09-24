import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LoginForm.css';

const LoginForm: React.FC = () => {
  return (
    <div className="login-form-container">
      <div className="form-field">
        <label>メールアドレス</label>
        <input type="text" placeholder='メールアドレス' name='email'/>
      </div>
      <div className="form-field">
        <label>パスワード</label>
        <input type="text" placeholder='パスワード' name='password'/>
      </div>
      <p>
        <Link to="/passwordreset" className="password-reset-link">
          パスワードを忘れた方
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
