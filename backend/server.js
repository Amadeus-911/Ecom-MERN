import products from './data/products.js';
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';

connectDB();
const app = express();

dotenv.config();

app.get('/', (req, res) => {
    res.send('Server Running ...');
});

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/products/:id', (req, res) => {
    let product = products.find((p) => p._id === req.params.id);
    res.json(product);
});

const PORT = process.env.PORT || 5000;
app.listen(
    PORT,
    console.log(`This server running in ${process.env.NODE_ENV} port ${PORT}`)
);
