// フッター用コンポーネント
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className="footer-content">
        <ul className="footer-links">
          <li><Link to="/legal-notice">特定商取引に基づく表記</Link></li>
          <li><Link to="/terms-of-service">利用規約</Link></li>
          <li><Link to="/privacy-policy">プライバシーポリシー</Link></li>
          <li><Link to="/refund-policy">返金ポリシー</Link></li>
          <li><Link to="/contact">お問い合せ</Link></li>
          <li><Link to="/admin">管理者ページ</Link></li>
        </ul>
      </div>
      <div className="footer-brand">
        <small>&copy; 2024 Plants Shop</small>
      </div>
    </footer>
  );
};

export default Footer;
