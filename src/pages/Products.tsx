import React from 'react';
import ProductList from '../components/ProductList';

const Products: React.FC = () => {
  return (
    <div className="container">
      <h2 className="title">すべての商品</h2>
      <section>
        <ProductList /> {/* 商品一覧コンポーネントを表示 */}
      </section>
    </div>
  );
};

export default Products;
