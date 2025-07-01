import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
const PORT = process.env.PORT || 3000;

import connectDB from './config/db.js'; 
import studentRoutes from './routes/studentRoute.js'; 

dotenv.config();

connectDB(); // Connect to MongoDB
const app = express();
app.use(cors(
  {
    origin: 'https://jfkvhs.vercel.app', // allow frontend domain
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  }
));
app.use(express.json());
app.use('/uploads', express.static('uploads')); // Serve static files from 'uploads' directory


app.use('/api/student', studentRoutes); // Use student routes

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});