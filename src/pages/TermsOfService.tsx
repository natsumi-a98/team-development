// 利用規約
import React from 'react';
import '../styles/TermsOfService.css';

const TermsOfService: React.FC = () => {
  return (
    <div className="container">
      <h2 className="title">利用規約</h2>
      <div className="term-of-service-container">
        <h3 className="term-of-service-preface">
          この利用規約（以下,「本規約」といいます。）は,Plants Shop（以下,「当社」といいます。）がこのウェブサイト上で提供するオンラインショップ（以下,「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下,「ユーザー」といいます。）には,本規約に従って,本サービスをご利用いただきます。
        </h3>
        <section className="term-of-service-section">
          <h4 className="term-of-service-section-title">
            第1条（適用）
          </h4>
          <ul className="term-of-service-section-item">
            <li>本規約は,ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。</li>
            <li>当社は本サービスに関し,本規約のほか,ご利用にあたってのルール等,各種の定め（以下,「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず,本規約の一部を構成するものとします。</li>
            <li>本規約の定めが前項の個別規定の定めと矛盾する場合には,個別規定において特段の定めなき限り,個別規定の定めが優先されるものとします。</li>
          </ul>
        </section>
        <section className="term-of-service-section">
          <h4 className="term-of-service-section-title">
            第2条（利用登録）
          </h4>
          <ul className="term-of-service-section-item">
            <li>本サービスにおいては,登録希望者が本規約に同意の上,当社の定める方法によって利用登録を申請し,当社がこれに対する承認を登録希望者に通知することによって,利用登録が完了するものとします。</li>
            <li>当社は,利用登録の申請者に以下の事由があると判断した場合,利用登録の申請を承認しないことがあり,その理由については一切の開示義務を負わないものとします。
              <ul className="nested-list">
                <li>利用登録の申請に際して虚偽の事項を届け出た場合</li>
                <li>本規約に違反したことがある者からの申請である場合</li>
                <li>その他,当社が利用登録を相当でないと判断した場合</li>
              </ul>
            </li>
          </ul>
        </section>
        <section className="term-of-service-section">
          <h4 className="term-of-service-section-title">
            第3条（ユーザーIDおよびパスワードの管理）
          </h4>
          <ul className="term-of-service-section-item">
            <li>ユーザーは,自己の責任において,本サービスのユーザーIDおよびパスワードを管理するものとします。</li>
            <li>ユーザーは,いかなる場合にも,ユーザーIDおよびパスワードを第三者に譲渡または貸与し,もしくは第三者と共用することはできません。当社は,ユーザーIDとパスワードの組み合わせが登録情報と一致してログインされた場合には,そのユーザーIDを登録しているユーザー自身による利用とみなします。</li>
            <li>ユーザーID及びパスワードが第三者に使用されたことによって生じた損害は,当社に故意又は重大な過失がある場合を除き,当社は一切の責任を負わないものとします。</li>
          </ul>
        </section>
        <section className="term-of-service-section">
          <h4 className="term-of-service-section-title">
            第4条（売買契約）
          </h4>
          <ul className="term-of-service-section-item">
            <li>本サービスにおいては,ユーザーが当社に対して購入の申し込みをし,これに対して当社が当該申し込みを承諾した旨の通知をすることによって売買契約が成立するものとします。なお,当該商品の所有権は,当社が商品を配送業者に引き渡したときに,ユーザーに移転するものとします。</li>
            <li>当社は,ユーザーが以下のいずれかの事由に該当する場合には,当該ユーザーに事前に通知することなく,前項の売買契約を解除することができるものとします。
              <ul className="nested-list">
                <li>ユーザーが本規約に違反した場合</li>
                <li>届け先不明や長期の不在のため商品の配送が完了しない場合</li>
                <li>その他当社とユーザーの信頼関係が損なわれたと認める場合</li>
              </ul>
            </li>
            <li>本サービスに関する決済方法,配送方法,購入の申し込みのキャンセル方法,または返品方法等については,別途当社が定める方法によります。</li>
          </ul>
        </section>
        <section className="term-of-service-section">
          <h4 className="term-of-service-section-title">
            第5条（知的財産権）
          </h4>
          <p className="term-of-service-section-content">
            本サービスによって提供される商品写真その他のコンテンツ（以下「コンテンツ」といいます）の著作権又はその他の知的所有権は,当社及びコンテンツ提供者などの正当な権利者に帰属し,ユーザーは,これらを無断で複製,転載,改変,その他の二次利用をすることはできません。
          </p>
        </section>
        <section className="term-of-service-section">
          <h4 className="term-of-service-section-title">
            第6条（禁止事項）
          </h4>
          <p className="term-of-service-section-content">
            ユーザーは,本サービスの利用にあたり,以下の行為をしてはならないものとします。
          </p>
          <ul className="term-of-service-section-item">
            <li>法令または公序良俗に違反する行為</li>
            <li>犯罪行為に関連する行為</li>
            <li>本サービスに含まれる著作権,商標権その他の知的財産権を侵害する行為</li>
            <li>当社のサーバーまたはネットワークの機能を破壊したり,妨害したりする行為</li>
            <li>本サービスによって得られた情報を商業的に利用する行為</li>
            <li>当社のサービスの運営を妨害するおそれのある行為</li>
            <li>不正アクセスをし,またはこれを試みる行為</li>
            <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
            <li>他のユーザーに成りすます行為</li>
            <li>当社のサービスに関連して,反社会的勢力に対して直接または間接に利益を供与する行為</li>
            <li>その他,当社が不適切と判断する行為</li>
          </ul>
        </section>
        <section className="term-of-service-section">
          <h4 className="term-of-service-section-title">
            第7条（本サービスの提供の停止等）
          </h4>
          <ul className="term-of-service-section-item">
            <li>当社は,以下のいずれかの事由があると判断した場合,ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
              <ul className="nested-list">
                <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                <li>地震,落雷,火災,停電または天災などの不可抗力により,本サービスの提供が困難となった場合</li>
                <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                <li>その他,当社が本サービスの提供が困難と判断した場合</li>
              </ul>
            </li>
            <li>当社は,本サービスの提供の停止または中断により,ユーザーまたは第三者が被ったいかなる不利益または損害について,理由を問わず一切の責任を負わないものとします。</li>
          </ul>
        </section>
        <section className="term-of-service-section">
          <h4 className="term-of-service-section-title">
            第8条（利用制限および登録抹消）
          </h4>
          <ul className="term-of-service-section-item">
            <li>当社は,以下のいずれかに該当する場合には,事前の通知なく,ユーザーに対して,本サービスの全部もしくは一部の利用を制限し,またはユーザーとしての登録を抹消することができるものとします。
              <ul className="nested-list">
                <li>本規約のいずれかの条項に違反した場合</li>
                <li>登録事項に虚偽の事実があることが判明した場合</li>
                <li>決済手段として当該ユーザーが届け出たクレジットカードが利用停止となった場合</li>
                <li>料金等の支払債務の不履行があった場合</li>
                <li>当社からの連絡に対し,一定期間返答がない場合</li>
                <li>本サービスについて,最終の利用から一定期間利用がない場合</li>
                <li>その他,当社が本サービスの利用を適当でないと判断した場合</li>
              </ul>
            </li>
            <li>当社は,本条に基づき当社が行った行為によりユーザーに生じた損害について,一切の責任を負いません。</li>
          </ul>
        </section>
        <section className="term-of-service-section">
          <h4 className="term-of-service-section-title">
            第9条（退会）
          </h4>
          <p className="term-of-service-section-content">
            ユーザーは,所定の退会手続により,本サービスから退会できるものとします。
          </p>
        </section>
        <section className="term-of-service-section">
          <h4 className="term-of-service-section-title">
            第10条（保証の否認および免責事項）
          </h4>
          <ul className="term-of-service-section-item">
            <li>当社は,本サービスに事実上または法律上の瑕疵（安全性,信頼性,正確性,完全性,有効性,特定の目的への適合性,セキュリティなどに関する欠陥,エラーやバグ,権利侵害などを含みます。）がないことを保証するものではありません。
            </li>
            <li>当社は,本サービスによってユーザーに生じたあらゆる損害について,一切の責任を負いません。ただし,本サービスに関する当社とユーザーとの間の契約（本規約を含みます。）が消費者契約法に定める消費者契約となる場合,この免責規定は適用されませんが,この場合であっても,当社は,当社の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害のうち特別な事情から生じた損害（当社またはユーザーが損害発生につき予見し,または予見し得た場合を含みます。）について一切の責任を負いません。</li>
            <li>当社は,本サービスに関して,ユーザーと他のユーザーまたは第三者との間において生じた取引,連絡または紛争等について一切責任を負いません。</li>
          </ul>
        </section>
        <section className="term-of-service-section">
          <h4 className="term-of-service-section-title">
            第11条（サービス内容の変更等）
          </h4>
          <p className="term-of-service-section-content">
            当社は,ユーザーに通知することなく,本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし,これによってユーザーに生じた損害について一切の責任を負いません。
          </p>
        </section>
        <section className="term-of-service-section">
          <h4 className="term-of-service-section-title">
            第12条（利用規約の変更）
          </h4>
          <p className="term-of-service-section-content">
            当社は,必要と判断した場合には,ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお,本規約の変更後,本サービスの利用を開始した場合には,当該ユーザーは変更後の規約に同意したものとみなします。
          </p>
        </section>
        <section className="term-of-service-section">
          <h4 className="term-of-service-section-title">
            第13条（個人情報の取扱い）
          </h4>
          <p className="term-of-service-section-content">
            当社は,本サービスの利用によって取得する個人情報については,当社「プライバシーポリシー」に従い適切に取り扱うものとします。
          </p>
        </section>
        <section className="term-of-service-section">
          <h4 className="term-of-service-section-title">
            第14条（通知または連絡）
          </h4>
          <p className="term-of-service-section-content">
            ユーザーと当社との間の通知または連絡は,当社の定める方法によって行うものとします。当社は,ユーザーから,当社が別途定める方式に従った変更届け出がない限り,現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い,これらは,発信時にユーザーへ到達したものとみなします。
          </p>
        </section>
        <section className="term-of-service-section">
          <h4 className="term-of-service-section-title">
            第15条（権利義務の譲渡の禁止）
          </h4>
          <p className="term-of-service-section-content">
            ユーザーは,当社の書面による事前の承諾なく,利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し,または担保に供することはできません。らは,発信時にユーザーへ到達したものとみなします。
          </p>
        </section>
        <section className="term-of-service-section">
          <h4 className="term-of-service-section-title">
            第16条（準拠法・裁判管轄）
          </h4>
          <ul className="term-of-service-section-item">
            <li>本規約の解釈にあたっては,日本法を準拠法とします。なお,本サービスに関しては,国際物品売買契約に関する国際連合条約の適用を排除するものとします。</li>
            <li>本サービスに関して紛争が生じた場合には,当社の本店所在地を管轄する裁判所を専属的合意管轄裁判所とします。</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
