import React from 'react';
import '../../styles/user/CategoryList.css';
import { useNavigate } from 'react-router-dom'
import CategoryBox from './CategoryBox';
import BaseButton from '../user/BaseButton'

const categories = [ // path-to-imageに写真のURL指定
  { id: '1', name: '金の成る木', image: 'path-to-image-1' },
  { id: '2', name: 'ルビーネックレス', image: 'path-to-image-2' },
  { id: '3', name: 'ヘレナ', image: 'path-to-image-3' },
  { id: '4', name: 'パインローズ', image: 'path-to-image-4' },
  { id: '5', name: 'エケベリア', image: 'path-to-image-5' },
  { id: '6', name: 'ハオルチア', image: 'path-to-image-6' },
];

const CategoryList: React.FC = () => {
  const handleClickCategory = (id: string) => {
    console.log(`カテゴリID: ${id} をクリックしました`);
  };

  const navigate = useNavigate(); // ナビゲーション関数

  const handleViewAllCategoryList = () => {
    console.log("すべてのカテゴリを見る");
  };

  const handleViewAllProducts = () => {
    navigate('/products');
  };

  return (
    <div className="category-container">
      <div className="category-list-grid">
        {categories.map(category => (
          <CategoryBox
            key={category.id}
            id={category.id}
            name={category.name}
            // image={category.image}
            onClickCategory={handleClickCategory}
          />
        ))}
      </div>

      <div className="button-container">
        <BaseButton
          text="すべてのカテゴリを見る"
          onClick={handleViewAllCategoryList}
          className="view-all-button"
        />
        <BaseButton
          text="すべての商品を見る"
          onClick={handleViewAllProducts}
          className="view-all-button"
        />
      </div>
    </div>
  );
};

export default CategoryList;
