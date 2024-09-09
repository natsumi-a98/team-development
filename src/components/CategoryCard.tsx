import React from 'react';
import './CategoryCard.css';

interface CategoryCardProps {
  id: string;
  name: string;
  // image: string;
  onClickCategory: (id: string) => void;
}

// const CategoryCard: React.FC<CategoryCardProps> = ({ id, name, image, onClickCategory }) => {
//   return (
//     <div className='category-card' onClick={() => onClickCategory(id)}>
//       <img src={image} alt={name} />
//       <h3>{name}</h3>
//     </div>
//   );
// };

// 以下は写真が用意できたら削除
const CategoryCard: React.FC<CategoryCardProps> = ({ id, name, onClickCategory }) => {
  return (
    <div className='category-card' onClick={() => onClickCategory(id)}>
      {/* 画像の代わりに灰色のボックスを表示 */}
      <div className="placeholder-box"></div>
      <h3 className="category-name">{name}</h3>
    </div>
  );
};

export default CategoryCard;
