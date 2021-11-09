import React from 'react';
import { Card } from 'react-bootstrap';

const Product = ({ product }) => {
    return (
        <>
            <Card className="my-3 p-3 rounded" style={{ height: '90%' }}>
                <a href=""></a>
                <Card.Img src={product.image} variant="top" />

                <Card.Body>
                    <a className="nav-link" href="">
                        <Card.Title as="div">
                            <strong>{product.name}</strong>
                        </Card.Title>
                    </a>
                    <Card.Text>
                        <div className="p-3">
                            {product.rating} from {product.numReviews} reviews
                        </div>
                    </Card.Text>

                    <Card.Text as="h3">${product.price}</Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};

export default Product;
