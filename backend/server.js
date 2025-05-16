import dotenv from 'dotenv';
dotenv.config(); 

import express from 'express';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js';

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());

app.use('/api/products', productRoutes)

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server started at: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to connect to DB, server not started');
  }
};

startServer();

