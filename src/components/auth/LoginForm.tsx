import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/LoginForm.css';

interface LoginFormProps {
  onChange: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onChange }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // email または password が変更されたら親コンポーネントに伝える
  useEffect(() => {
    onChange(email, password);
  }, [email, password, onChange]);

  return (
    <form className='auth-form-container'>
      <div className='form-field'>
        <label htmlFor='email'>メールアドレス</label>
        <input
          className='auth-form'
          id='email'
          type='email'
          placeholder='メールアドレス'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)} // 値が変わったら state を更新
          required
        />
      </div>
      <div className='form-field'>
        <label htmlFor='password'>パスワード</label>
        <input
          className='auth-form'
          id='password'
          type='password'
          placeholder='パスワード'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)} // 値が変わったら state を更新
          required
        />
      </div>

      <div className='password-reset-container'>
        <Link to='/admin/auth/passwordreset' className='password-reset-link'>
          パスワードを忘れた方
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
