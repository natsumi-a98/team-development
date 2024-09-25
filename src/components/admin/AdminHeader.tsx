// 管理者側ヘッダー用コンポーネント

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/admin/AdminHeader.css';



const AdminHeader: React.FC = () => {
  return (
    <header className='admin-header'>
      <div className="admin-header-content">
        <div className='admin-logo-container'>
          <h1>
            <Link to='/AdminHome' className='logo'>Plants Shop管理画面</Link>
          </h1>
        </div>
        <nav className="admin-nav">
          <ul className="admin-nav-right">
            <li className="admin-header-right">
              <Link to='/Notice' className='nav-link'>
                <NotificationsNoneIcon className='noticeIcon' />
              </Link>
            </li>
            <li className="admin-header-right">
              <Link to='/Logout' className='nav-link'>
                <PersonOutlineOutlinedIcon className='admin-userIcon' />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default AdminHeader;
