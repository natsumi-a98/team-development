// トップページ用コンポーネント（例としてコンセプトメッセージとおすすめ商品表示するようなコード）
import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      <h2>Welcome to taniku</h2>
      <p>Your one-stop shop for beautiful indoor plants.</p>
      <section>
        <h3>Recommended Products</h3>
        {/* ここにおすすめ商品のコンポーネントを追加 */}
      </section>
    </div>
  );
};

export default Home;
