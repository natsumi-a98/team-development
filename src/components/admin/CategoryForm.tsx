// 商品追加、編集用フォーム
import React, { useState } from 'react';
import '../../styles/admin/CategoryForm.css';

const CategoryForm: React.FC = () => {
  const [categoryName, setcategoryName] = useState('');
  const [images, setImages] = useState<File[]>([]);

  // 画像追加の処理
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages([...images, ...Array.from(e.target.files)]);
    }
  };

  return (
    <form className='category-add-form'>
      <div className='category-form-field'>
        <label htmlFor='categoryName'>カテゴリ名</label>
        <input
          type='text'
          id='categoryName'
          value={categoryName}
          onChange={(e) => setcategoryName(e.target.value)}
          placeholder='商品名'
          required
        />
      </div>

      <div className='category-form-field'>
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
    </form>
  );
};

export default CategoryForm;

// CategoryForm.tsx以下サーバーサイドとの連携する場合のコード
// import React, { useState } from 'react';
// import '../../styles/admin/CategoryForm.css';

// interface CategoryFormProps {
//   setCategoryData: React.Dispatch<React.SetStateAction<any>>;
// }

// const CategoryForm: React.FC<CategoryFormProps> = ({ setCategoryData }) => {
//   const [CategoryName, setCategoryName] = useState('');
//   const [category, setCategory] = useState('');
//   const [description, setDescription] = useState('');
//   const [instructions, setInstructions] = useState('');
//   const [price, setPrice] = useState('');
//   const [images, setImages] = useState<File[]>([]);

//   // フォームのデータが更新された時に親コンポーネントへ通知
//   const handleFormChange = () => {
//     setCategoryData({
//       CategoryName,
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
//     <form className='Category-add-form'>
//       <div className='Category-form-field'>
//         <label htmlFor='CategoryName'>商品名</label>
//         <input
//           type='text'
//           id='CategoryName'
//           value={CategoryName}
//           onChange={(e) => {
//             setCategoryName(e.target.value);
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

// export default CategoryForm;
