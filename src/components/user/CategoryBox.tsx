import React from 'react';
import '../../styles/user/CategoryBox.css';


interface CategoryBoxProps {
  id: string;
  name: string;
  // image: string;
  onClickCategory: (id: string) => void;
}

// const CategoryBox: React.FC<CategoryBoxProps> = ({ id, name, image, onClickCategory }) => {
//   return (
//     <div className='category-box' onClick={() => onClickCategory(id)}>
//       <img src={image} alt={name} />
//       <h3>{name}</h3>
//     </div>
//   );
// };
// 以下は写真が用意できたら削除
const CategoryBox: React.FC<CategoryBoxProps> = ({ id, name, onClickCategory }) => {
  return (
    <div className='category-box' onClick={() => onClickCategory(id)}>
      {/* 画像の代わりに灰色のボックスを表示 */}
      <div className='category-placeholder-box'></div>
      <h3 className='category-name'>{name}</h3>
    </div>
  );
};

export default CategoryBox;
