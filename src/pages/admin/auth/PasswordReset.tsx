import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PasswordResetForm from '../../../components/auth/PasswordResetForm';
import BaseButton from '../../../components/user/BaseButton';

const PasswordReset: React.FC = () => {
  const [email, setEmail] = useState<string>(''); // メールアドレスの状態管理
  const [isLoading, setIsLoading] = useState<boolean>(false); // ローディング状態
  const [message, setMessage] = useState<string>(''); // メッセージ表示用
  const navigate = useNavigate(); // ページ遷移用

  // メールアドレスを取得するハンドラー
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // パスワードリセットのリクエスト処理
  const handleReset = async () => {
    setIsLoading(true);
    setMessage('');

    try {
      // パスワードリセットのAPIリクエストを送信
      const response = await fetch('/api/password-reset', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        // 成功した場合の処理
        setMessage('リセット用のメールを送信しました。');
        setTimeout(() => {
          navigate('/admin/auth/login');
        }, 3000); // 3秒後にログインページへリダイレクト
      } else {
        // エラー処理
        const errorData = await response.json();
        setMessage(`エラー: ${errorData.message}`);
      }
    } catch (error) {
      setMessage('リセット処理に失敗しました。再度お試しください。');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='container'>
      <div className="auth-container">
        <h4 className='auth-title'>パスワードをリセットする</h4>
        <p className="reset-text">
          パスワードをリセットするためのメールを送信します
        </p>
        <section className='form-section'>
          <PasswordResetForm
            email={email} // メールアドレスの状態を渡す
            onEmailChange={handleEmailChange} // メールアドレスが変更されたときに呼ばれる
          />
        </section>
        {message && <p className="message">{message}</p>} {/* メッセージ表示 */}
        <div className="auth-button-container">
          <BaseButton
            text={isLoading ? '送信中...' : '送信'}
            onClick={handleReset}
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

export default PasswordReset;
