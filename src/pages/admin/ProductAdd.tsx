// 商品追加
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BaseButton from '../../components/user/BaseButton';
import ProductForm from '../../components/admin/ProductForm';
import '../../styles/admin/ProductAdd.css';

const ProductAdd: React.FC = () => {
  const navigate = useNavigate();

  const handleAddProduct = () => {
    navigate('/admin/product-add');
  };

  return (
    <div className='admin-container'>
      <div className='admin-top-container'>
        <h2 className='admin-title'>商品登録</h2>
      </div>
      <div className="admin-form">
        <ProductForm />
        <BaseButton
          text='商品登録'
          onClick={handleAddProduct}
          className='add-product-button'
        />
      </div>
    </div>
  );
};

export default ProductAdd;

// ProductAdd.tsx以下サーバーサイドとの連携する場合のコード
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import BaseButton from '../../components/user/BaseButton';
// import ProductForm from '../../components/admin/ProductForm';
// import '../../styles/admin/ProductAdd.css';

// const ProductAdd: React.FC = () => {
//   const navigate = useNavigate();

//   // フォームのデータを保持する状態変数
//   const [productData, setProductData] = useState({
//     productName: '',
//     category: '',
//     description: '',
//     instructions: '',
//     price: '',
//     images: [] as File[]
//   });

//   const handleAddProduct = async () => {
//     try {
//       // APIへデータを送信
//       const formData = new FormData();
//       formData.append('productName', productData.productName);
//       formData.append('category', productData.category);
//       formData.append('description', productData.description);
//       formData.append('instructions', productData.instructions);
//       formData.append('price', productData.price);

//       productData.images.forEach((image, index) => {
//         formData.append(`images[${index}]`, image);
//       });

//       const response = await fetch('/api/products', {
//         method: 'POST',
//         body: formData,
//       });

//       if (response.ok) {
//         // 商品管理ページへリダイレクト
//         navigate('/admin/product-management');
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
//         <ProductForm setProductData={setProductData} />
//         <BaseButton
//           text='商品登録'
//           onClick={handleAddProduct}
//           className='add-product-button'
//         />
//       </div>
//     </div>
//   );
// };

// export default ProductAdd;
