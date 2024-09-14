// 複数のProductCardを表示する。Reduxから商品データを取得し、
// 商品をProductCardコンポーネントとしてレンダリングする。
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import ProductCard from './ProductCard';
import '../styles/ProductList.css';

const ProductList: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.products);

  const handleAddToCart = (id: string) => {
    // カートに追加する処理をここに記述
  };

  return (
    <div className='product-list'>
      {products.map(product => (
        <ProductCard key={product.id} {...product} onAddToCart={handleAddToCart} />
      ))}
    </div>
  );
};

export default ProductList;
