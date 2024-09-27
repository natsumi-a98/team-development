import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LoginForm.css';

const LoginForm: React.FC<{ onLoginSuccess: () => void }> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // ログイン処理の実装
    // 例: API呼び出しや認証のチェックなど

    // ログイン成功後にonLoginSuccessを呼び出す
    onLoginSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="login-form-container"> {/* formタグを追加 */}
      <div className="form-field">
        <label htmlFor="email">メールアドレス</label>
        <input
          className='auth-form'
          id="email"
          type="email"
          placeholder='メールアドレス'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="password">パスワード</label>
        <input
          className='auth-form'
          id="password"
          type="password"
          placeholder='パスワード'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="password-reset-container">
        <Link to="/passwordreset" className="password-reset-link">
          パスワードを忘れた方
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
