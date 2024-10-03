import React from 'react';

const PasswordResetForm: React.FC = () => {
  return (
    <div className='auth-form-container'>
      <div className='form-field'>
        <label>メールアドレス</label>
        <input className='auth-form' type='text' placeholder='メールアドレス' name='email'/>
      </div>
    </div>
  );
};

export default PasswordResetForm;
