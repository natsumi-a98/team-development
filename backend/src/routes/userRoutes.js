// userRoutes.js
import express from 'express';
import { loginUser, registerUser } from '../controllers/userController.js';
const router = express.Router();

router.post('/login', loginUser);
router.post('/register', registerUser);  // ユーザー登録ルートを追加

export default router;
