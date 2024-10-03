// authMiddleware.js
import jwt from 'jsonwebtoken';

export const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).send('アクセスが拒否されました。');

  jwt.verify(token.split(' ')[1], process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).send('トークンが無効です。');
    req.user = user;
    next();
  });
};
