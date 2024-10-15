// 商品管理ページ
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BaseButton from '../../components/user/BaseButton';
import '../../styles/admin/ProductManagement.css'


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
// import React, { useEffect, useState } from 'react';

// interface Product {
//   id: number;
//   name: string;
//   category: string;
//   description: string;
//   instructions: string;
//   price: number;
//   image_url?: string; // 画像URL
// }

// const ProductManagement: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);

//   // 商品をバックエンドから取得する関数
//   const fetchProducts = async () => {
//     try {
//       const response = await fetch('/api/products'); // 商品取得のAPIエンドポイント
//       const data = await response.json();
//       setProducts(data);
//     } catch (error) {
//       console.error('商品取得に失敗しました:', error);
//     }
//   };

//   // ページが読み込まれたときに商品データを取得
//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <div className='product-management'>
//       <h2>商品管理</h2>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             <h3>{product.name}</h3>
//             <p>カテゴリ: {product.category}</p>
//             <p>説明: {product.description}</p>
//             <p>育て方: {product.instructions}</p>
//             <p>価格: ¥{product.price}</p>
//             {product.image_url && (
//               <img src={product.image_url} alt={product.name} width="100" />
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductManagement;
