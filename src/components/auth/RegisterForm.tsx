import React from 'react';

const RegisterForm: React.FC = () => {
  return (
    <div className='auth-form-container'>
      <div className='form-field'>
        <label>姓</label>
        <input className='auth-form' type='text' placeholder='姓' name='email'/>
      </div>
      <div className='form-field'>
        <label>名</label>
        <input className='auth-form' type='text' placeholder='名' name='password'/>
      </div>
      <div className='form-field'>
        <label>メールアドレス</label>
        <input className='auth-form' type='text' placeholder='メールアドレス' name='email'/>
      </div>
      <div className='form-field'>
        <label>パスワード</label>
        <input className='auth-form' type='text' placeholder='パスワード' name='password'/>
      </div>
    </div>
  );
};

export default RegisterForm;
