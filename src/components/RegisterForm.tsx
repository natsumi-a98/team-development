import React, { useState } from 'react';
import { registerUser } from '../api'; // API関数をインポート

const RegisterForm: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await registerUser(firstName, lastName, email, password);
      alert('ユーザー登録成功');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="register-form-container">
      <div className="form-field">
        <label>姓</label>
        <input className='auth-form' type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </div>
      <div className="form-field">
        <label>名</label>
        <input className='auth-form' type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </div>
      <div className="form-field">
        <label>メールアドレス</label>
        <input className='auth-form' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-field">
        <label>パスワード</label>
        <input className='auth-form' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">アカウント作成</button>
    </form>
  );
};

export default RegisterForm;
