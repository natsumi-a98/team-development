import React, { useState } from 'react';
import '../../styles/admin/ProductForm.css';

interface ProductFormProps {
  onAddProduct: (productData: FormData) => void; // プロダクトデータを受け取る関数
}

const ProductForm: React.FC<ProductFormProps> = ({ onAddProduct }) => {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [instructions, setInstructions] = useState('');
  const [price, setPrice] = useState('');
  const [images, setImages] = useState<File[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages([...images, ...Array.from(e.target.files)]);
    }
  };

  const handleImageDelete = (indexToDelete: number) => {
    setImages((prevImages) => prevImages.filter((_, index) => index !== indexToDelete));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('category', category);
    formData.append('description', description);
    formData.append('instructions', instructions);
    formData.append('price', price);

    images.forEach((image, index) => {
      formData.append(`image_${index}`, image);
    });

    onAddProduct(formData); // 追加されたデータを上位コンポーネントに渡す
  };

  return (
    <form className='product-add-form' onSubmit={handleSubmit}>
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
        <div className='image-upload-container'>
          <div className='drag-and-drop-area'>
            {images.length === 0 && (
              <p className='drag-and-drop-text'>画像をドラッグ&ドロップ</p>
            )}
            <div className='image-preview'>
              {images.map((image, index) => (
                <div key={index} className='preview-container'>
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`商品画像 ${index + 1}`}
                    className='product-preview-image'
                  />
                  <button
                    type='button'
                    className='delete-image-button'
                    onClick={() => handleImageDelete(index)}
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          </div>
          <input
            type='file'
            accept='image/*'
            multiple
            className='image-upload-input'
            onChange={handleImageChange}
            id='imageInput'
          />
          <button
            type='button'
            className='add-image-button'
            onClick={() => document.getElementById('imageInput')?.click()}
          >
            ファイル選択
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
