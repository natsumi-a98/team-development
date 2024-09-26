import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/admin/Sidebar.css';

const Sidebar: React.FC = () => {
return (
  <div className="sidebar">
    <ul className="sidebar-menu">
      <li>
        <Link to="/admin/home" className="sidebar-link">ホーム</Link>
      </li>
      <li>
        <Link to="/admin/product-management" className="sidebar-link">商品管理</Link>
      </li>
      <li>
        <Link to="/admin/category-management" className="sidebar-link">カテゴリ管理</Link>
      </li>
      <li>
        <Link to="/admin/diary-management" className="sidebar-link">日記管理</Link>
      </li>
      <li>
        <Link to="/admin/customer-management" className="sidebar-link">顧客管理</Link>
      </li>
      <li>
        <Link to="/admin/contact-management" className="sidebar-link">お問い合わせ管理</Link>
      </li>
    </ul>
  </div>
  );
};

export default Sidebar;
