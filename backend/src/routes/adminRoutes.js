// adminRoutes.js
import express from 'express';
import { loginAdmin, registerAdmin } from '../controllers/adminController.js';
const router = express.Router();

router.post('/login', loginAdmin);
router.post('/register', registerAdmin);  // 管理者登録ルートを追加

export default router;
