import React from 'react';
import BaseButton from '../../../components/user/BaseButton';
import RegisterForm from '../../../components/auth/RegisterForm';
import '../../../styles/Register.css'

const AdminRegister: React.FC = () => {
  return (
    <div className='container'>
      <div className='auth-container'>
        <div>
          <h4 className='auth-title'>アカウントを作成する</h4>
        </div>
        <section className='form-section'>
          <RegisterForm />
        </section>
        <BaseButton
          text='アカウント作成'
          onClick={() => {
          }}
          className='register-button'
        />
      </div>
    </div>
  );
};

export default AdminRegister;
