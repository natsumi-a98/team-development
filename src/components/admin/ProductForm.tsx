// 商品追加、編集用フォーム
import React, { useState } from 'react';
import '../../styles/admin/ProductForm.css';

const ProductForm: React.FC = () => {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [instructions, setInstructions] = useState('');
  const [price, setPrice] = useState('');
  const [images, setImages] = useState<File[]>([]);

  // 画像追加の処理
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages([...images, ...Array.from(e.target.files)]);
    }
  };

  return (
    <form className='product-add-form'>
      <div className='product-form-field'>
        <label htmlFor='productName'>商品名</label>
        <input
          type='text'
          id='productName'
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
      </div>

      <div className='product-form-field'>
        <label htmlFor='category'>商品カテゴリ</label>
        <input
          type='text'
          id='category'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </div>

      <div className='product-form-field'>
        <label>商品画像</label>
        <div className='image-upload'>
          <div className='image-preview'>
            {images.map((image, index) => (
              <img
                key={index}
                src={URL.createObjectURL(image)}
                alt={`商品画像 ${index + 1}`}
                className='preview-image'
              />
            ))}
          </div>
          <input
            type='file'
            accept='image/*'
            multiple
            onChange={handleImageChange}
          />
          <button type='button' className='add-image-button'>
            画像を追加
          </button>
        </div>
      </div>

      <div className='product-form-field'>
        <label htmlFor='description'>商品説明</label>
        <textarea
          id='description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div className='product-form-field'>
        <label htmlFor='instructions'>育て方</label>
        <textarea
          id='instructions'
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          required
        />
      </div>

      <div className='product-form-field last-field'>
        <label htmlFor='price'>販売価格</label>
        <input
          type='text'
          id='price'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder='¥'
          required
        />
      </div>
    </form>
  );
};

export default ProductForm;

// ProductForm.tsx以下サーバーサイドとの連携する場合のコード
// import React, { useState } from 'react';
// import '../../styles/admin/ProductForm.css';

// interface ProductFormProps {
//   setProductData: React.Dispatch<React.SetStateAction<any>>;
// }

// const ProductForm: React.FC<ProductFormProps> = ({ setProductData }) => {
//   const [productName, setProductName] = useState('');
//   const [category, setCategory] = useState('');
//   const [description, setDescription] = useState('');
//   const [instructions, setInstructions] = useState('');
//   const [price, setPrice] = useState('');
//   const [images, setImages] = useState<File[]>([]);

//   // フォームのデータが更新された時に親コンポーネントへ通知
//   const handleFormChange = () => {
//     setProductData({
//       productName,
//       category,
//       description,
//       instructions,
//       price,
//       images
//     });
//   };

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       setImages([...images, ...Array.from(e.target.files)]);
//       handleFormChange();
//     }
//   };

//   return (
//     <form className='product-add-form'>
//       <div className='product-form-field'>
//         <label htmlFor='productName'>商品名</label>
//         <input
//           type='text'
//           id='productName'
//           value={productName}
//           onChange={(e) => {
//             setProductName(e.target.value);
//             handleFormChange();
//           }}
//           placeholder='商品名'
//           required
//         />
//       </div>
//       {/* 他のフィールドも同様に実装 */}
//     </form>
//   );
// };

// export default ProductForm;
