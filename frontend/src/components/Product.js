import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const Product = ({ product }) => {
    return (
        <>
            <Card className="my-3 p-3 rounded" style={{ height: '90%' }}>
                <a href="/">
                    <Card.Img src={product.image} variant="top" />
                </a>

                <Card.Body>
                    <a className="nav-link" href="/">
                        <Card.Title as="div">
                            <strong>{product.name}</strong>
                        </Card.Title>
                    </a>
                    <Card.Text className="p-2 my-2">
                        <div className="rating">
                            <Rating
                                value={product.rating}
                                reviews={product.numReviews}
                            />
                        </div>
                    </Card.Text>

                    <Card.Text as="h3">${product.price}</Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};

export default Product;
