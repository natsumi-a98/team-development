import React from 'react';

interface PasswordResetFormProps {
  email: string;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordResetForm: React.FC<PasswordResetFormProps> = ({ email, onEmailChange }) => {
  return (
    <div className='auth-form-container'>
      <div className='form-field'>
        <label>メールアドレス</label>
        <input
          className='auth-form'
          type='email'
          placeholder='メールアドレス'
          name='email'
          value={email} // propsから受け取った値を入力フィールドにバインド
          onChange={onEmailChange} // propsのonEmailChangeを呼び出す
        />
      </div>
    </div>
  );
};

export default PasswordResetForm;
