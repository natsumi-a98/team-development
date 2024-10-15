// 日記追加、編集用フォーム
import React, { useState } from 'react';
import '../../styles/admin/DiaryForm.css';

const DiaryForm: React.FC = () => {
  const [diaryName, setDiaryName] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [date, setDate] = useState('');
  const [growthDescription, setGrowthDescription] = useState('');

  // 画像追加の処理
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages([...images, ...Array.from(e.target.files)]);
    }
  };

  const handleImageDelete = (indexToDelete: number) => {
    setImages((prevImages) => prevImages.filter((_, index) => index !== indexToDelete));
  };

  // ドラッグ&ドロップのイベントハンドラ
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      setImages([...images, ...Array.from(e.dataTransfer.files)]);
    }
  };

  return (
    <form className='diary-add-form'>
      {/* 日記名フィールド */}
      <div className='diary-form-field'>
        <label htmlFor='diaryName'>日記名</label>
        <input
          type='text'
          id='diaryName'
          value={diaryName}
          onChange={(e) => setDiaryName(e.target.value)}
          required
        />
      </div>

      {/* 日記写真追加 */}
      <div className='diary-form-field'>
        <label>写真追加</label>
        <div className='image-upload-container'>
          <div
            className="drag-and-drop-area"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            {images.length === 0 && (
              <p className='drag-and-drop-text'>画像をドラッグ&ドロップ</p>
            )}
            <div className='image-preview'>
              {images.map((image, index) => (
                <div key={index} className="preview-container">
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`日記写真 ${index + 1}`}
                    className='diary-preview-image'
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

      {/* 日付選択 */}
      <div className='diary-form-field'>
        <label htmlFor='diaryDate'>日付</label>
        <input
          type='date'
          id='diaryDate'
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      {/* 成長記録の入力フィールド */}
      <div className='diary-form-field'>
        <label htmlFor='growthDescription'>成長状況</label>
        <textarea
          id='growthDescription'
          value={growthDescription}
          onChange={(e) => setGrowthDescription(e.target.value)}
          rows={5}
          required
        />
      </div>
    </form>
  );
};

export default DiaryForm;
