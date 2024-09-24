import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import BaseButton from '../components/user/BaseButton';
import '../styles/Login.css';

const Login: React.FC = () => {
  return (
    <div className="container">
      <div>
        <h2 className="title">ログイン</h2>
      </div>
      <p>
        <Link to="/register" className="register-link">
          アカウントを新規作成する
        </Link>
      </p>
      <section>
        <LoginForm />
        <BaseButton
          text="ログイン"
          onClick={() => {
          }}
          className="login-button"
        />
      </section>
    </div>
  );
};

export default Login;
