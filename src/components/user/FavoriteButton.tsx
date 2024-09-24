// お気に入りの追加と削除を行うボタン。
import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import '../../styles/user/FavoriteButton.css';

interface FavoriteButtonProps {
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ isFavorite, onToggleFavorite }) => {
  return (
    <button className='favorite-button' onClick={onToggleFavorite}>
      {isFavorite ? (
        <FavoriteIcon className='favorite-icon filled' />
      ) : (
        <FavoriteBorderIcon className='favorite-icon' />
      )}
    </button>
  );
};

export default FavoriteButton;
