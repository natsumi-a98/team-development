// アプリケーション全体のルートコンポーネント。React Routerを使ってページを切り替える
import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Category from './pages/Category';
import Diary from './pages/Diary';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Order from './pages/Order';
import OrderHistory from './pages/OrderHistory';
import Mypage from './pages/Mypage';
import Favorite from './pages/Favorite';
import Products from './pages/Products';
import Categories from './components/Categories'; // カテゴリページ


const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/category" element={<Category />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
