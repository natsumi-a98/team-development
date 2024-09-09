// トップページ用コンポーネント（例としてコンセプトメッセージとおすすめ商品表示するようなコード）
import React from 'react';
import Categories from '../components/Categories';

const Home: React.FC = () => {
  return (
    <div className="container">
      <h2 className="title">カテゴリ</h2>
      <section>
        <Categories />{/* カテゴリのコンポーネントを表示 */}
      </section>
    </div>

  );
};

export default Home;
