import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import adminRoutes from './src/routes/adminRoutes';
import userRoutes from './src/routes/userRoutes';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/admin', adminRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
