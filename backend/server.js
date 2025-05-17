import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import path from 'path';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js';

const PORT = process.env.PORT || 8000;

const app = express();

const __dirname = path.resolve();

app.use(express.json());

app.use('/api/products', productRoutes)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/dist')));

  app.all('/{*any}', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
  });
}

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

