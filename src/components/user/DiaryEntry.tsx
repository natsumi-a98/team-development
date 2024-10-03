// 出品者が記録する商品の成長日記を表示。
import React from 'react';

interface DiaryEntryProps {
  date: string;
  content: string;
}

const DiaryEntry: React.FC<DiaryEntryProps> = ({ date, content }) => {
  return (
    <div className='diary-entry'>
      <h4>{date}</h4>
      <p>{content}</p>
    </div>
  );
};

export default DiaryEntry;
