// カテゴリ管理ページ
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BaseButton from '../../components/user/BaseButton';


const CategoryManagement: React.FC = () => {
  const navigate = useNavigate();

  const handleAddCategory = () => {
    navigate('/admin/category-add');
  };

  return (
    <div className='admin-container'>
      <div className='admin-top-container'>
        <h2 className='admin-title'>カテゴリ一覧</h2>
        <BaseButton
          text='カテゴリ登録'
          onClick={handleAddCategory}
          className='add-Category-button-top'
        />
      </div>
    </div>
  );
};

export default CategoryManagement;

// CategoryManagement.tsx以下サーバーサイドとの連携する場合のコード
// import React, { useEffect, useState } from 'react';
// import '../../styles/admin/CategoryManagement.css';

// const CategoryManagement: React.FC = () => {
//   const [Categorys, setCategorys] = useState([]);

//   useEffect(() => {
//     const fetchCategorys = async () => {
//       try {
//         const response = await fetch('/api/Categorys');
//         const data = await response.json();
//         setCategorys(data);
//       } catch (error) {
//         console.error('商品一覧の取得に失敗しました', error);
//       }
//     };

//     fetchCategorys();
//   }, []);

//   return (
//     <div className='Category-management-container'>
//       <h2>商品管理</h2>
//       <div className='Category-list'>
//         {Categorys.map((Category: any) => (
//           <div key={Category.id} className='Category-item'>
//             <h3>{Category.CategoryName}</h3>
//             <p>{Category.description}</p>
//             <p>価格: ¥{Category.price}</p>
//             <img src={Category.imageUrl} alt={Category.CategoryName} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoryManagement;
