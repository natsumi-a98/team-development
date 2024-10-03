// フッター用コンポーネント
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/user/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <ul className='footer-links'>
          <li><Link to='/legalnotice'>特定商取引法に基づく表記</Link></li>
          <li><Link to='/termsofservice'>利用規約</Link></li>
          <li><Link to='/privacypolicy'>プライバシーポリシー</Link></li>
          <li><Link to='/refundpolicy'>返金ポリシー</Link></li>
          <li><Link to='/contact'>お問い合せ</Link></li>
          <li><Link to='/admin/auth/login'>管理者ページ</Link></li>
        </ul>
      </div>
      <div className='footer-brand'>
        <small>&copy; 2024 Plants Shop</small>
      </div>
    </footer>
  );
};

export default Footer;
