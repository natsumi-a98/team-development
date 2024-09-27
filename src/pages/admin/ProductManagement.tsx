// 商品管理ページ
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BaseButton from '../../components/user/BaseButton';


const ProductManagement: React.FC = () => {
  const navigate = useNavigate();

  const handleAddProduct = () => {
    navigate('/admin/product-add');
  };

  return (
    <div className='admin-container'>
      <div className='admin-top-container'>
        <h2 className='admin-title'>商品一覧</h2>
        <BaseButton
          text='商品登録'
          onClick={handleAddProduct}
          className='add-product-button-top'
        />
      </div>
    </div>
  );
};

export default ProductManagement;

// ProductManagement.tsx以下サーバーサイドとの連携する場合のコード
// import React, { useEffect, useState } from 'react';
// import '../../styles/admin/ProductManagement.css';

// const ProductManagement: React.FC = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('/api/products');
//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         console.error('商品一覧の取得に失敗しました', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className='product-management-container'>
//       <h2>商品管理</h2>
//       <div className='product-list'>
//         {products.map((product: any) => (
//           <div key={product.id} className='product-item'>
//             <h3>{product.productName}</h3>
//             <p>{product.description}</p>
//             <p>価格: ¥{product.price}</p>
//             <img src={product.imageUrl} alt={product.productName} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductManagement;
