import React from 'react';
import BaseButton from '../../../components/user/BaseButton';
import RegisterForm from '../../../components/auth/RegisterForm';

const Register: React.FC = () => {
  return (
    <div className='container'>
      <div className='auth-container'>
        <div>
          <h4 className='auth-title'>アカウントを作成する</h4>
        </div>
        <section className='form-section'>
          <RegisterForm />
          <BaseButton
            text='アカウント作成'
            onClick={() => {
            }}
            className='register-button'
          />
        </section>
      </div>
    </div>
  );
};

export default Register;
