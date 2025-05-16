import dotenv from 'dotenv';
dotenv.config(); 
import express from 'express';
import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    console.log('Mongo URI:', process.env.MONGO_URI);  
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected ${conn.connection.host}`);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello!');
});

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

