import React, { useState } from 'react';
import { loginAdmin, loginUser } from '../api';

const LoginForm: React.FC<{ onLoginSuccess: (token: string) => void }> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent, isAdmin: boolean) => {
    event.preventDefault();
    setError('');

    try {
      const { token } = isAdmin
        ? await loginAdmin(email, password)
        : await loginUser(email, password);
      onLoginSuccess(token);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e, true)} className="login-form-container">
      <div className="form-field">
        <label htmlFor="email">メールアドレス</label>
        <input
          className='auth-form'
          id="email"
          type="email"
          placeholder='メールアドレス'
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {error && <p className="error-message">{error}</p>}
      <button type="submit">ログイン</button>
    </form>
  );
};

export default LoginForm;
