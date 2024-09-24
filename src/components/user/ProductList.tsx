// 複数のProductCardを表示する。Reduxから商品データを取得し、
// 商品をProductCardコンポーネントとしてレンダリングする。
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import ProductBox from './ProductBox';
import '../../styles/user/ProductList.css';

const ProductList: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.products);

  const handleAddToCart = (id: string) => {
    // カートに追加する処理をここに記述
    console.log(`商品ID: ${id} をカートに追加しました`);
  };

  const handleAddToFavorites = (id: string) => {
    // お気に入りに追加する処理
    console.log(`商品ID: ${id} をお気に入りに追加しました`);
  };

  return (
    <div className="product-list-container">
      <div className='product-list'>
        {products.map(product => (
          <ProductBox
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            // image={product.image}
            onAddToCart={handleAddToCart}
            onAddToFavorites={handleAddToFavorites}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
