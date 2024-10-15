import React, { useEffect, useState } from 'react';

interface Category {
  id: number;
  name: string;
  description: string;
  image_url?: string;
}

const CategoryManagement: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  // カテゴリをバックエンドから取得する関数
  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/categories');  // カテゴリ取得のAPIエンドポイント
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('カテゴリの取得に失敗しました:', error);
    }
  };

  // ページが読み込まれたときにカテゴリデータを取得
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className='category-management'>
      <h2>カテゴリ管理</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <p>カテゴリ名: {category.name}</p>
            <p>説明: {category.description}</p>
            {category.image_url && (
              <img src={category.image_url} alt={category.name} width="100" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryManagement;
