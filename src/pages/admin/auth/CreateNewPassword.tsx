import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CreateNewPasswordForm from '../../../components/auth/CreateNewPasswordForm';
import BaseButton from '../../../components/user/BaseButton';

const CreateNewPassword: React.FC = () => {
  return (
    <div className='container'>
      <div className="auth-container">
        <h4 className='auth-title'>パスワードをリセットする</h4>
        <p className="reset-text">
          新しいパスワードを入力してください
        </p>
        <section className='form-section'>
          <CreateNewPasswordForm />
        </section>
        <div className="auth-button-container">
          <BaseButton
            text='パスワードをリセットする'
            onClick={() => {
            }}
            className='auth-button'
          />
          <Link to='/admin/auth/login' className='back-link'>
            キャンセル
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateNewPassword;
