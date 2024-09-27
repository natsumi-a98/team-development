// 商品の基本情報（名前、価格、画像）を表示し、お気に入り、カートに追加するボタンを持つ。
import React, { useState } from 'react';
import FavoriteButton from './FavoriteButton';
import '../../styles/user/ProductBox.css';

interface ProductBoxProps {
  id: string;
  name: string;
  price: number;
  // image: string;
  onAddToCart: (id: string) => void;
  onAddToFavorites: (id: string) => void;
}

// const ProductBox: React.FC<ProductBoxProps> = ({ id, name, price, image, onAddToCart, onAddToFavorites }) => {
  // 画像が用意できたらコメントアウト部分を表示して以下を削除
  const ProductBox: React.FC<ProductBoxProps> = ({ id, name, price, onAddToCart, onAddToFavorites }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  // お気に入りをトグルする関数
  const handleToggleFavorite = () => {
    setIsFavorite(prevState => !prevState);
    onAddToFavorites(id);
  };

  return (
    <div className='product-box'>
      <div className='image-container'>
        {/* <img src='{image}' alt='{name}' className='product-image' /> */}
        <div className='product-placeholder-box'></div>
        <FavoriteButton isFavorite={isFavorite} onToggleFavorite={handleToggleFavorite} />
      </div>
      <h3>{name}</h3>
      <p className='product-price'>${price.toFixed(2)}</p>
      <button className='add-to-cart-button' onClick={() => onAddToCart(id)}>カートに追加</button>
    </div>
  );
};

export default ProductBox;
