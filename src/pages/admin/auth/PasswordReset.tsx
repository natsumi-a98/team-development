import React from 'react';
import BaseButton from '../../../components/user/BaseButton';
import RegisterForm from '../../../components/auth/RegisterForm';

const PasswordReset: React.FC = () => {
  return (
    <div className='container'>
      <div>
        <h4 className='auth-title'>パスワードをリセットする</h4>
      </div>
      <section className='form-section'>
        <BaseButton
          text='送信'
          onClick={() => {
          }}
          className='reset-button'
        />
      </section>
    </div>
  );
};

export default PasswordReset;
