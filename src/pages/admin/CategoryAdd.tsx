import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BaseButton from '../../components/user/BaseButton';
import CategoryForm from '../../components/admin/CategoryForm';
import '../../styles/admin/CategoryAdd.css';

const CategoryAdd: React.FC = () => {
  const navigate = useNavigate();
  const [categoryName, setCategoryName] = useState('');  // カテゴリ名の状態
  const [images, setImages] = useState<File[]>([]);  // 画像の状態
  const [loading, setLoading] = useState(false);  // ローディング状態

  // カテゴリ追加処理
  const handleAddCategory = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append('name', categoryName);

    images.forEach((image, index) => {
      formData.append(`image_${index}`, image);
    });

    try {
      const response = await fetch('/api/categories', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('カテゴリの追加に失敗しました。');
      }

      // 成功したらカテゴリ管理ページへリダイレクト
      navigate('/admin/categorymanagement');
    } catch (error) {
      console.error('カテゴリ追加エラー:', error);
      alert('カテゴリの追加に失敗しました。');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='admin-container'>
      <div className='admin-top-container'>
        <h2 className='admin-title'>カテゴリ登録</h2>
      </div>
      <div className="admin-form">
        {/* CategoryForm にカテゴリ名と画像を管理させる */}
        <CategoryForm
          categoryName={categoryName}
          setCategoryName={setCategoryName}
          images={images}
          setImages={setImages}
        />
        <BaseButton
          text='カテゴリ登録'
          onClick={handleAddCategory}  // 登録ボタン押下時にカテゴリを送信
          className='add-category-button'
        />
      </div>
    </div>
  );
};

export default CategoryAdd;
