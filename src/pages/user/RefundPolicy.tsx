// 返金ポリシー
import React from 'react';
import '../../styles/user/RefundPolicy.css';

const RefundPolicy: React.FC = () => {
  return (
    <div className='container'>
      <h2 className='title'>返金ポリシー</h2>
      <div className='refund-policy-container'>
        <p>発送時にチェックをしておりますが、虫、虫食い、傷、痛み等、苗の大きさはご了承ください。配送中の蒸れや徒長の場合など交換、返品には応じかねますのでご了承ください。</p>
      </div>
    </div>
  );
};

export default RefundPolicy;
