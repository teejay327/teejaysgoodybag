import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import{ notFound, errorHandler } from './middleware/errorMiddleWare.js';
import cookieParser from 'cookie-parser';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
//const port = process.env.PORT || 5000;
const port = 5000;

connectDB();

const app = express();

// body parser for middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parser middleware
app.use(cookieParser());

app.get('/', (req,res) => {
  res.send('API is running ...');
 });

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

 //start the server
 app.listen(port, () => console.log(`Server running on port ${port}`));