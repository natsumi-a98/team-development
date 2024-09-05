// 商品を検索するための入力フィールドとボタン。
import React, { useState } from 'react';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // 検索処理をここに記述
  };

  return (
    <div className='search-bar'>
      <input
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder='Search for products'
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
