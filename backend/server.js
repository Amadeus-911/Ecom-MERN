const products = require('./data/products');
const express = require('express');

const app = express();

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/products/:id', (req, res) => {
    let product = products.find((p) => p._id === req.params.id);
    res.json(product);
});

const port = 5000;
app.listen(port, console.log(`This is port ${port}`));
