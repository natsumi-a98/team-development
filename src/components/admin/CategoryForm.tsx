import React from 'react';
import '../../styles/admin/CategoryForm.css'

interface CategoryFormProps {
  categoryName: string;
  setCategoryName: React.Dispatch<React.SetStateAction<string>>;
  images: File[];
  setImages: React.Dispatch<React.SetStateAction<File[]>>;
}

const CategoryForm: React.FC<CategoryFormProps> = ({
  categoryName,
  setCategoryName,
  images,
  setImages,
}) => {
  // 画像追加の処理
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages([...images, ...Array.from(e.target.files)]);
    }
  };

  return (
    <form className='category-add-form'>
      {/* カテゴリ名フィールド */}
      <div className='category-form-field'>
        <label htmlFor='categoryName'>カテゴリ名</label>
        <input
          type='text'
          id='categoryName'
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          required
        />
      </div>

      {/* カテゴリ写真追加 */}
      <div className='category-form-field'>
        <label>カテゴリ画像</label>
        <div className='image-upload-container'>
          <div className="drag-and-drop-area">
            {images.length === 0 && (
              <p className='drag-and-drop-text'>画像をドラッグ&ドロップ</p>
            )}
            <div className='image-preview'>
              {images.map((image, index) => (
                <div key={index} className="preview-container">
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`カテゴリ画像 ${index + 1}`}
                    className='product-preview-image'
                  />
                  <button
                    type='button'
                    className='delete-image-button'
                    onClick={() => setImages(images.filter((_, i) => i !== index))}
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
    </form>
  );
};

export default CategoryForm;
