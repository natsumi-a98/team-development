// 特定商取引法に基づく表記
import React from 'react';
import '../styles/LegalNotice.css';

const LegalNotice: React.FC = () => {
  return (
    <div className="container">
      <h2 className="title">特定商取引法に基づく表記</h2>
      <div className="legal-notice-container">
        <section className="legal-notice-section">
          <h3 className="legal-notice-section-title">
            事業者名称
          </h3>
          <p className="legal-notice-section-item">
            Plants Shop
          </p>
        </section>
        <section className="legal-notice-section">
          <h3 className="legal-notice-section-title">
            運営統括責任者名
          </h3>
          <p className="legal-notice-section-item">
            安里なつみ
          </p>
        </section>
        <section className="legal-notice-section">
          <h3 className="legal-notice-section-title">
            事業者所在地
          </h3>
          <p className="legal-notice-section-item">
            群馬県伊勢崎市今泉町2丁目410
          </p>
        </section>
        <section className="legal-notice-section">
          <h3 className="legal-notice-section-title">
            電話番号
          </h3>
          <p className="legal-notice-section-item">
            ご注文方法や配送状況など原則としてお電話によるお問い合わせは承っておりません。<br />
            問い合わせフォームにて問い合わせをお願いしております。<br />
            ※ 特定商取引法に基づき、取引時にご請求があれば遅滞なくメール等により電話番号をご連絡いたします。
          </p>
        </section>
        <section className="legal-notice-section">
          <h3 className="legal-notice-section-title">
            メールアドレス
          </h3>
          <p className="legal-notice-section-item">
            お問い合わせは問い合わせフォームからお願いします。
          </p>
        </section>
        <section className="legal-notice-section">
          <h3 className="legal-notice-section-title">
            販売価格
          </h3>
          <p className="legal-notice-section-item">
            各商品詳細ページに表示
          </p>
        </section>
        <section className="legal-notice-section">
          <h3 className="legal-notice-section-title">
            送料
          </h3>
          <p className="legal-notice-section-item">
            商品代金とは別途に発生いたします。
          </p>
        </section>
        <section className="legal-notice-section">
          <h3 className="legal-notice-section-title">
            代金の支払い方法
          </h3>
          <p className="legal-notice-section-item">
            銀行振込<br />
            各種クレジットカード
          </p>
        </section>
        <section className="legal-notice-section">
          <h3 className="legal-notice-section-title">
            販売数量
          </h3>
          <p className="legal-notice-section-item">
            商品詳細ページに記載された在庫数が販売数量になります。
          </p>
        </section>
        <section className="legal-notice-section">
          <h3 className="legal-notice-section-title">
            商品の引渡時期
          </h3>
          <p className="legal-notice-section-item">
            ご注文確認後1〜5営業日以内に発送いたします。
          </p>
        </section>
        <section className="legal-notice-section">
          <h3 className="legal-notice-section-title">
            返品に関する特約
          </h3>
          <p className="legal-notice-section-item">
            発送時にチェックをしておりますが、虫、虫食い、傷、痛み等、苗の大きさはご了承ください。<br />
            配送中の蒸れや徒長の場合など交換、返品は応じかねますのでご了承ください。
          </p>
        </section>
        <section className="legal-notice-section">
          <h3 className="legal-notice-section-title">
            お問い合わせについて
          </h3>
          <p className="legal-notice-section-item">
            各種お問い合わせにつきましては、原則としてお問い合わせフォームにてお願いしております。
          </p>
        </section>
      </div>
    </div>
  );
};

export default LegalNotice;
