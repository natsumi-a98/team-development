// アプリケーション全体のルートコンポーネント。React Routerを使ってページを切り替える
import React from 'react';
// import { Route, Switch } from 'react-router-dom';
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


// 共通
import Login from './pages/Login';
import Register from './pages/Register';
import PasswordReset from './pages/PasswordReset';

const App: React.FC = () => {
  const location = useLocation();

  const noHeaderFooterPages = ['/login', '/register', '/passwordreset'];
  const isNoHeaderFooterPage = noHeaderFooterPages.includes(location.pathname);

  return (
    <div>
      {!isNoHeaderFooterPage && <Header />}
        <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/category" element={<Category />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/categorylist" element={<CategoryList />} />
          <Route path="/products" element={<Products />} />
          <Route path="/legalnotice" element={<LegalNotice />} />
          <Route path="/termsofservice" element={<TermsOfService />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/refundpolicy" element={<RefundPolicy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/passwordreset" element={<PasswordReset />} />
        </Routes>
      {!isNoHeaderFooterPage && <Footer />}
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
