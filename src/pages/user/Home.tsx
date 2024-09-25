// トップページ用コンポーネント（例としてコンセプトメッセージとおすすめ商品表示するようなコード）
import React from 'react';
import CategoryList from '../../components/user/CategoryList';

const Home: React.FC = () => {
  return (
    <div className="container">
      <h2 className="title">カテゴリ</h2>
      <section>
        <CategoryList />{/* カテゴリのコンポーネントを表示 */}
      </section>
    </div>

  );
};

export default Home;
