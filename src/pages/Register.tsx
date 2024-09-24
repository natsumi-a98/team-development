import React from 'react';
import BaseButton from '../components/user/BaseButton';

const Register: React.FC = () => {
  return (
    <div className="container">
      <div>
        <h2 className="title">アカウントを作成する</h2>
      </div>
      <section>
        <BaseButton
          text="アカウント作成"
          onClick={() => {
          }}
          className="register-button"
        />
      </section>
    </div>
  );
};

export default Register;
