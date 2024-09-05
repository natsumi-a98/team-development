// 商品の基本情報（名前、価格、画像）を表示し、カートに追加するボタンを持つ。
import React from 'react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  onAddToCart: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image, onAddToCart }) => {
  return (
    <div className='product-card'>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>${price.toFixed(2)}</p>
      <button onClick={() => onAddToCart(id)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
