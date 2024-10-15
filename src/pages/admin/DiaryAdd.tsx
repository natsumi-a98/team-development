// 日記追加
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BaseButton from '../../components/user/BaseButton';
import DairyForm from '../../components/admin/DiaryForm';
import '../../styles/admin/DiaryAdd.css';

const DiaryAdd: React.FC = () => {
  const navigate = useNavigate();

  const handleAddDiary = () => {
    navigate('/admin/diary-add');
  };

  return (
    <div className='admin-container'>
      <div className='admin-top-container'>
        <h2 className='admin-title'>日記登録</h2>
      </div>
      <div className="admin-form">
        <DairyForm />
        <BaseButton
          text='日記登録'
          onClick={handleAddDiary}
          className='add-diary-button'
        />
      </div>
    </div>
  );
};

export default DiaryAdd;
