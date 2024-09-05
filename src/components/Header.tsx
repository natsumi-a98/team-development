// ヘッダー用コンポーネント

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import React from 'react';
import { Link } from 'react-router-dom';


const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className='logo-container'>
        <h1 className='logo'>Plants Shop</h1>
      </div>
      <nav className='nav'>
        <ul>
          <li className="header-left">
            <Link to='/' className='nav-link'>ホーム</Link>
          </li>
          <li className="header-left">
            <Link to='/diary' className='nav-link'>成長日記</Link>
            </li>
          {/* <Link to='/about' className='nav-link'>About</Link> */}
        </ul>
        <ul>
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
              <FavoriteBorderIcon className='favoriteIcon' />
            </Link>
          </li>
          <li className="header-right">
            <Link to='/MyPage' className='nav-link'>
              <PersonOutlineOutlinedIcon className='userIcon' />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

