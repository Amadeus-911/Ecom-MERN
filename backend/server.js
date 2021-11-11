import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';

import productRoutes from './routes/productRoutes.js';

connectDB();
const app = express();

dotenv.config();

app.get('/', (req, res) => {
    res.send('Server Running ...');
});

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(
    PORT,
    console.log(`This server running in ${process.env.NODE_ENV} port ${PORT}`)
);
