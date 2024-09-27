// 商品追加
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BaseButton from '../../components/user/BaseButton';
import CategoryForm from '../../components/admin/CategoryForm';
import '../../styles/admin/CategoryAdd.css';

const CategoryAdd: React.FC = () => {
  const navigate = useNavigate();

  const handleAddCategory = () => {
    navigate('/admin/category-add');
  };

  return (
    <div className='admin-container'>
      <div className='admin-top-container'>
        <h2 className='admin-title'>カテゴリ登録</h2>
      </div>
      <div className="admin-form">
        <CategoryForm />
        <BaseButton
          text='カテゴリ登録'
          onClick={handleAddCategory}
          className='add-category-button'
        />
      </div>
    </div>
  );
};

export default CategoryAdd;

// CategoryAdd.tsx以下サーバーサイドとの連携する場合のコード
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import BaseButton from '../../components/user/BaseButton';
// import CategoryForm from '../../components/admin/CategoryForm';
// import '../../styles/admin/CategoryAdd.css';

// const CategoryAdd: React.FC = () => {
//   const navigate = useNavigate();

//   // フォームのデータを保持する状態変数
//   const [CategoryData, setCategoryData] = useState({
//     CategoryName: '',
//     category: '',
//     description: '',
//     instructions: '',
//     price: '',
//     images: [] as File[]
//   });

//   const handleAddCategory = async () => {
//     try {
//       // APIへデータを送信
//       const formData = new FormData();
//       formData.append('CategoryName', CategoryData.CategoryName);
//       formData.append('category', CategoryData.category);
//       formData.append('description', CategoryData.description);
//       formData.append('instructions', CategoryData.instructions);
//       formData.append('price', CategoryData.price);

//       CategoryData.images.forEach((image, index) => {
//         formData.append(`images[${index}]`, image);
//       });

//       const response = await fetch('/api/Categories', {
//         method: 'POST',
//         body: formData,
//       });

//       if (response.ok) {
//         // 商品管理ページへリダイレクト
//         navigate('/admin/Category-management');
//       } else {
//         console.error('商品登録に失敗しました');
//       }
//     } catch (error) {
//       console.error('エラーが発生しました', error);
//     }
//   };

//   return (
//     <div className='admin-container'>
//       <div className='admin-top-container'>
//         <h2 className='admin-title'>商品登録</h2>
//       </div>
//       <div className="admin-form">
//         {/* フォームのデータを親コンポーネントで保持 */}
//         <CategoryForm setCategoryData={setCategoryData} />
//         <BaseButton
//           text='商品登録'
//           onClick={handleAddCategory}
//           className='add-Category-button'
//         />
//       </div>
//     </div>
//   );
// };

// export default CategoryAdd;
