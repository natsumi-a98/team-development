const { resolve } = require('path');

const path = require('path');
module.exports = {
  // モジュールバンドルを行う起点となるファイルの指定
  // 指定できる値としては、ファイル名の文字列や、それを並べた配列やオブジェクト
  // 下記はオブジェクトとして指定した例
  entry: {
    bundle: './src/index.tsx'
  },
  // モジュールバンドルを行った結果を出力する場所やファイル名の指定
  output: {
    path: path.join(__dirname, 'dist'), // "__dirname"はファイルが存在するディレクトリ
    filename: '[name].js',  // [name]はentryで記述した名前（この設定ならbundle）
    publicPath: '/'  // 正しいパスに設定
  },
  // import文でファイル拡張子を書かずに名前解決するための設定
  // 例...「import World from './world'」と記述すると"world.ts"という名前のファイルをモジュールとして探す
  resolve: {
    extensions: ['.ts', '.js','.tsx'] // import分で.tsを書かなくても扱える　Reactの.tsxや.jsxの拡張子も扱いたい場合は配列内に追加する
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // webpack-dev-serverの公開フォルダ
    open: true, // サーバー起動時にブラウザを開く
    historyApiFallback: true, // これを追加することでReact Routerのリロードでの404エラーを防ぐ
  },
  // モジュールに適用するルールの設定（ローダーの設定を行う事が多い）
  module: {
    rules: [
      {
        // 拡張子が.tsのファイルに対してTypeScriptコンパイラを適用する
        // Reactで用いる.tsxの拡張子にも適用する場合は test:/\.(ts|tsx)$/,
        test: /\.(ts|tsx)$/, // .ts と .tsx の両方を対象
        use: 'babel-loader', // babel-loaderを使用
        exclude: /node_modules/
      },
      {
        test: /\.css$/,  // CSSファイルの処理
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,  // SVGファイルの処理を追加
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,  // サイズが10KB未満のSVGをData URIとして処理
            }
          }
        ]
      }
    ]
  }
}
