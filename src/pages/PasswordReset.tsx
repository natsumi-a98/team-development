import React from 'react';
import BaseButton from '../components/user/BaseButton';

const PasswordReset: React.FC = () => {
  return (
    <div className="container">
      <div>
        <h2 className="title">パスワードをリセットする</h2>
      </div>
      <section>
        <BaseButton
          text="送信"
          onClick={() => {
          }}
          className="reset-button"
        />
      </section>
    </div>
  );
};

export default PasswordReset;
