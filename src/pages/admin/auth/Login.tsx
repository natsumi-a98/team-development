import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginForm from '../../components/auth/LoginForm';
import BaseButton from '../../components/user/BaseButton';
import '../../styles/Login.css';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // ログイン処理の実装
    if (email === 'admin@example.com' && password === 'password123') {
      navigate('/admin/admin-home'); // 管理者ページにリダイレクト
    } else {
      alert('メールアドレスまたはパスワードが間違っています。');
    }
  };

  return (
    <div className='container'>
      <div className='auth-container'>
        <div>
          <h4 className='auth-title'>ログイン</h4>
        </div>
        <div className='register-container'>
          <Link to='/register' className='register-link'>
            アカウントを新規作成する
          </Link>
        </div>
        <section className='form-section'>
          <LoginForm onChange={(email, password) => {
            setEmail(email);
            setPassword(password);
          }} />
          <BaseButton
            text='ログイン'
            onClick={handleLogin}
            className='login-button'
          />
        </section>
      </div>
    </div>
  );
};

export default Login;

// Login.tsx以下サーバーサイドとの連携する場合のコード
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import LoginForm from '../../components/auth/LoginForm';
// import BaseButton from '../../components/user/BaseButton';
// import '../../styles/Login.css';

// const Login: React.FC = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = async () => {
//     try {
//       const response = await fetch('/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email,
//           password,
//         }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         // JWTトークンを保存 (例: localStorageに保存)
//         localStorage.setItem('token', data.token);

//         // 管理者ページにリダイレクト
//         navigate('/admin/admin-home');
//       } else {
//         // エラーメッセージを設定
//         setError('メールアドレスまたはパスワードが間違っています。');
//       }
//     } catch (error) {
//       console.error('ログイン中にエラーが発生しました:', error);
//       setError('ログイン中にエラーが発生しました。');
//     }
//   };

//   return (
//     <div className='container'>
//       <div className='auth-container'>
//         <div>
//           <h4 className='auth-title'>ログイン</h4>
//         </div>
//         <div className='register-container'>
//           <Link to='/register' className='register-link'>
//             アカウントを新規作成する
//           </Link>
//         </div>
//         <section className='form-section'>
//           <LoginForm onChange={(email, password) => {
//             setEmail(email);
//             setPassword(password);
//           }} />
//           {error && <p className='error-message'>{error}</p>} {/* エラーメッセージの表示 */ }
//           <BaseButton
//             text='ログイン'
//             onClick={handleLogin}
//             className='login-button'
//           />
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Login;
