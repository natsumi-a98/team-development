import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ScrollToTop } from './components/user/ScrollToTop';

// ユーザー側
import Header from './components/user/Header';
import Footer from './components/user/Footer';
import Home from './pages/user/Home';
import About from './pages/user/About';
import Category from './pages/user/Category';
import Diary from './pages/user/Diary';
import Contact from './pages/user/Contact';
import ProductDetail from './pages/user/ProductDetail';
import Cart from './pages/user/Cart';
import Order from './pages/user/Order';
import OrderHistory from './pages/user/OrderHistory';
import Mypage from './pages/user/Mypage';
import Favorite from './pages/user/Favorite';
import Products from './pages/user/Products';
import CategoryList from './components/user/CategoryList';
import LegalNotice from './pages/user/LegalNotice';
import TermsOfService from './pages/user/TermsOfService';
import PrivacyPolicy from './pages/user/PrivacyPolicy';
import RefundPolicy from './pages/user/RefundPolicy';

// 管理者側
import AdminHeader from './components/admin/AdminHeader';
import Sidebar from './components/admin/Sidebar';
import AdminHome from './pages/admin/AdminHome';
import NoticeManagement from './pages/admin/NoticeManagement';
import Logout from './pages/admin/Logout';
import ProductManagement from './pages/admin/ProductManagement';
import CategoryManagement from './pages/admin/CategoryManagement';
import DiaryManagement from './pages/admin/DiaryManagement';
import CustomerManagement from './pages/admin/CustomerManagement';
import ContactManagement from './pages/admin/ContactManagement';
import ProductAdd from './pages/admin/ProductAdd';
import CategoryAdd from './pages/admin/CategoryAdd';

// 共通
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import PasswordReset from './pages/auth/PasswordReset';

const App: React.FC = () => {
  const location = useLocation();

  const noHeaderFooterPages = [
    '/auth/login',
    '/auth/register',
    '/auth/passwordreset'
  ];

  const isNoHeaderFooterPage = noHeaderFooterPages.includes(location.pathname);

  const adminRoutes = [
    '/admin/admin-home',
    '/admin/product-management',
    '/admin/category-management',
    '/admin/diary-management',
    '/admin/customer-management',
    '/admin/contact-management',
    '/admin/notice-management',
    '/admin/logout',
    '/admin/product-add',
    '/admin/category-add'
  ];
  const isAdminPage = adminRoutes.some(route => location.pathname.startsWith(route));

  return (
    <div>
      {/* 管理者側 */}
      {isAdminPage && (
        <div className='admin-layout'>
          <AdminHeader />
          <div className='admin-body'>
            <Sidebar />
            <div className='admin-content'>
              <Routes>
                <Route path='/admin/admin-home' element={<AdminHome />} />
                <Route path='/admin/notice-management' element={<NoticeManagement />} />
                <Route path='/admin/logout' element={<Logout />} />
                <Route path='/admin/product-management' element={<ProductManagement />} />
                <Route path='/admin/category-management' element={<CategoryManagement />} />
                <Route path='/admin/diary-management' element={<DiaryManagement />} />
                <Route path='/admin/customer-management' element={<CustomerManagement />} />
                <Route path='/admin/contact-management' element={<ContactManagement />} />
                <Route path='/admin/product-add' element={<ProductAdd />} />
                <Route path='/admin/category-add' element={<CategoryAdd />} />
              </Routes>
            </div>
          </div>
        </div>
      )}

      {/* ユーザー側 */}
      {!isNoHeaderFooterPage && !isAdminPage && <Header />}
      <Routes>

        {/* 共通 */}
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/register' element={<Register />} />
        <Route path='/auth/passwordreset' element={<PasswordReset />} />

        {!isAdminPage && (
          <>
            {/* ユーザー側 */}
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/category' element={<Category />} />
            <Route path='/diary' element={<Diary />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/product/:id' element={<ProductDetail />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/order' element={<Order />} />
            <Route path='/order-history' element={<OrderHistory />} />
            <Route path='/mypage' element={<Mypage />} />
            <Route path='/favorite' element={<Favorite />} />
            <Route path='/categorylist' element={<CategoryList />} />
            <Route path='/products' element={<Products />} />
            <Route path='/legalnotice' element={<LegalNotice />} />
            <Route path='/termsofservice' element={<TermsOfService />} />
            <Route path='/privacypolicy' element={<PrivacyPolicy />} />
            <Route path='/refundpolicy' element={<RefundPolicy />} />
            <Route path='/auth/login' element={<Login />} />
            <Route path='/auth/register' element={<Register />} />
            <Route path='/auth/passwordreset' element={<PasswordReset />} />
          </>
        )}
      </Routes>
      {!isNoHeaderFooterPage && !isAdminPage && <Footer />}
    </div>
  );
};

const AppWrapper: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  );
};


export default AppWrapper;
