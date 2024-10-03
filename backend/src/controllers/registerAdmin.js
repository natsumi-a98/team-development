import { db } from '../db.js';  // データベース接続をインポート
import bcrypt from 'bcrypt';    // パスワードのハッシュ化に bcrypt を使用
import jwt from 'jsonwebtoken'; // トークン生成に jsonwebtoken を使用

// 管理者新規登録用のコントローラー
export const registerAdmin = async (req, res) => {
  const { first_name, last_name, email, password } = req.body; // フォームからデータを取得

  try {
    // パスワードをハッシュ化
    const hashedPassword = await bcrypt.hash(password, 10);

    // データベースに管理者情報を挿入
    await db.query(
      'INSERT INTO admin_users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)',
      [first_name, last_name, email, hashedPassword]
    );

    // JWTトークンの生成
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // 成功メッセージとトークンを返す
    res.status(201).json({ message: '管理者登録成功', token });
  } catch (err) {
    // エラーハンドリング
    res.status(500).json({ message: 'サーバーエラー', error: err.message });
  }
};
