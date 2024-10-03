import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = useSelector((state: RootState) => state.products.products.find(p => p.id === id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='product-detail'>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price.toFixed(2)}</p>
      {/* カートに追加ボタンやお気に入りボタンを追加 */}
    </div>
  );
};

export default ProductDetail;
