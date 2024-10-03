import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BaseButton from '../../../components/user/BaseButton';
import RegisterForm from '../../../components/auth/RegisterForm';

const AdminRegister: React.FC = () => {
  // アカウント作成処理の実装など


  return (
    <div className='container'>
      <div className='auth-container'>
        <div>
          <h4 className='auth-title'>アカウントを作成する</h4>
        </div>
        <section className='form-section'>
          <RegisterForm />
        </section>
        <div className="auth-button-container">
          <BaseButton
            text='アカウント作成'
            onClick={() => {
            }}
            className='auth-button'
          />
          <Link to='/' className='back-link'>
            ショップに戻る
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminRegister;
