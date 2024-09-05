// フッター用コンポーネント
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer>
      <p>&copy; 2024 taniku</p>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/category">Category</Link>
        <Link to="/diary">Diary</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </footer>
  );
};

export default Footer;
