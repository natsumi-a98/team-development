// ヘッダー用コンポーネント

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';



const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className="header-content">
        <nav className="nav">
          <ul className="nav-left">
            <li className="header-left">
              <Link to='/' className='nav-link'>ホーム</Link>
            </li>
            <li className="header-left">
              <Link to='/diary' className='nav-link'>成長日記</Link>
            </li>
          </ul>
          <div className='logo-container'>
            <h1>
              <Link to='/' className='logo'>Plants Shop</Link>
            </h1>
          </div>
          <ul className="nav-right">
            <li className="header-right">
              <Link to='/cart' className='nav-link'>
                <ShoppingCartOutlinedIcon className='shoppingCartIcon' />
              </Link>
            </li>
            <li className="header-right">
              <Link to='/search' className='nav-link'>
                <SearchIcon className='searchIcon' />
              </Link>
            </li>
            <li className="header-right">
              <Link to='/favorite' className='nav-link'>
                <FavoriteBorderIcon className='nav-favoriteIcon' />
              </Link>
            </li>
            <li className="header-right">
              <Link to='/MyPage' className='nav-link'>
                <PersonOutlineOutlinedIcon className='userIcon' />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
