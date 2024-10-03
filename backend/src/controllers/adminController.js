//管理者ログイン用のコントローラー

import { db } from '../db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const [admin] = await db.query('SELECT * FROM admin_users WHERE email = ?', [email]);

    if (admin.length === 0) {
      return res.status(404).json({ message: '管理者が見つかりません。' });
    }

    const validPassword = await bcrypt.compare(password, admin[0].password);

    if (!validPassword) {
      return res.status(401).json({ message: 'パスワードが間違っています。' });
    }

    const token = jwt.sign({ id: admin[0].id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token, message: 'ログイン成功' });

  } catch (err) {
    res.status(500).json({ message: 'サーバーエラー', error: err.message });
  }
};

// 新規登録処理

export const registerAdmin = async (req, res) => {
  const { first_name, last_name, email, password } = req.body;  // first_name, last_name を username に変更
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
   await db.query(
  'INSERT INTO admin_users (first_name, last_name, email, password, created_at) VALUES (?, ?, ?, ?, NOW())',
  [first_name, last_name, email, hashedPassword]
);
    res.status(201).json({ message: '管理者登録成功' });
  } catch (err) {
    res.status(500).json({ message: 'サーバーエラー', error: err.message });
  }
};
