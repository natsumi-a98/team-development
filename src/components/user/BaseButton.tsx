// ボタンテンプレート
import React from 'react';
import '../../styles/user/BaseButton.css';

type BaseButtonProps = {
  text: string;
  onClick: () => void;
  className?: string;  // 任意のクラス名を追加できるように
  style?: React.CSSProperties;  // インラインスタイルの追加をサポート
};

const BaseButton: React.FC<BaseButtonProps> = ({ text, onClick, className = '', style }) => {
  return (
    <button
      className={`base-button ${className}`}
      onClick={onClick} style={style}>
      {text}
    </button>
  );
};

export default BaseButton;
