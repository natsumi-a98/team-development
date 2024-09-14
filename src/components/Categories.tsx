import React from 'react';
import '../styles/Categories.css';
import { useNavigate } from 'react-router-dom'
import CategoryCard from './CategoryCard';

const categories = [
  { id: '1', name: '観賞植物', image: 'path-to-image-1' },
  { id: '2', name: '多肉植物', image: 'path-to-image-2' },
  { id: '3', name: '花', image: 'path-to-image-3' },
  { id: '4', name: '庭木', image: 'path-to-image-4' },
  { id: '5', name: '果樹', image: 'path-to-image-5' },
  { id: '6', name: 'ハーブ', image: 'path-to-image-6' },
];

const Categories: React.FC = () => {
  const handleClickCategory = (id: string) => {
    console.log(`カテゴリID: ${id} をクリックしました`);
  };

  const navigate = useNavigate(); // ナビゲーション関数

  const handleViewAllCategories = () => {
    console.log("すべてのカテゴリを見る");
  };

  const handleViewAllProducts = () => {
    navigate('/products');
  };

  return (
    <div className="category-container">
      <div className="categories-grid">
        {categories.map(category => (
          <CategoryCard
            key={category.id}
            id={category.id}
            name={category.name}
            // image={category.image}
            onClickCategory={handleClickCategory}
          />
        ))}
      </div>

      <div className="button-container">
        <button className="view-all-button" onClick={handleViewAllCategories}>
          すべてのカテゴリを見る
        </button>
        <button className="view-all-button" onClick={handleViewAllProducts}>
          すべての商品を見る
        </button>
      </div>
    </div>
  );
};

export default Categories;
