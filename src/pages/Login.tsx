import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import BaseButton from '../components/user/BaseButton';
import '../styles/Login.css';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // ログイン処理の実装
    // 例: API呼び出しや認証のチェックなど

    // ログイン成功後にリダイレクト
    navigate('/admin-home'); // 管理者のホーム画面のパスに変更してください
  };

  return (
    <div className="container">
      <div className="auth-container">
        <div>
          <h4 className="auth-title">ログイン</h4>
        </div>
        <div className="register-container">
          <Link to="/register" className="register-link">
            アカウントを新規作成する
          </Link>
        </div>
        <section className='form-section'>
          <LoginForm onLoginSuccess={handleLogin} /> {/* onLoginSuccessを渡す */}
          <BaseButton
            text="ログイン"
            onClick={handleLogin}
            className="login-button"
          />
        </section>
      </div>
    </div>
  );
};

export default Login;
