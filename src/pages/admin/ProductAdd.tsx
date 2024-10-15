import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BaseButton from '../../components/user/BaseButton';
import ProductForm from '../../components/admin/ProductForm';
import '../../styles/admin/ProductAdd.css';

const ProductAdd: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // ローディング状態を管理

  // 商品登録処理
  const handleAddProduct = async (formData: FormData) => {
    setLoading(true); // ローディング開始
    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('商品登録に失敗しました。');
      }

      // 成功したら商品管理ページに遷移
      navigate('/admin/productmanagement');
    } catch (error) {
      console.error('商品追加エラー:', error);
      alert('商品登録に失敗しました。'); // エラーメッセージの表示
    } finally {
      setLoading(false); // ローディング終了
    }
  };

  return (
    <div className='admin-container'>
      <div className='admin-top-container'>
        <h2 className='admin-title'>商品登録</h2>
      </div>
      <div className="admin-form">
        <ProductForm onAddProduct={handleAddProduct} />
        <BaseButton
          text='商品登録'
          onClick={() => { /* 追加の処理があればここに */ }} // ここは元の処理を維持
          className='add-product-button'
        />
      </div>
    </div>
  );
};

export default ProductAdd;
