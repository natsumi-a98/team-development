// 商品の基本情報（名前、価格、画像）を表示し、お気に入り、カートに追加するボタンを持つ。
import React, { useState } from 'react';
import FavoriteButton from './FavoriteButton';
import './ProductCard.css';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  onAddToCart: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image, onAddToCart }) => {
  const [isFavorite, setIsFavorite] = useState(false); // お気に入り状態を管理

  // お気に入りをトグルする関数
  const handleToggleFavorite = () => {
    setIsFavorite(prevState => !prevState);
  };

  return (
    <div className='product-card'>
      <div className="image-container">
        <img src="{image}" alt="{name}" className="product-image" />
        <FavoriteButton isFavorite={isFavorite} onToggleFavorite={handleToggleFavorite} />
      </div>
      <h3>{name}</h3>
      <p className='product-price'>${price.toFixed(2)}</p>
      <button onClick={() => onAddToCart(id)}>Add to Cart</button>
      <button className='add-to-cart-button' onClick={() => onAddToCart(id)}>カートに追加</button>
    </div>
  );
};

export default ProductCard;
