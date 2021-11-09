import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from './Rating';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    return (
        <>
            <Card
                className="my-3 p-3 rounded"
                style={{ height: '90%', boxShadow: '2px 2px 2px gray' }}
            >
                <Link to={`/product/${product._id}`}>
                    <Card.Img src={product.image} variant="top" />
                </Link>

                <Card.Body>
                    <Link className="nav-link" to={`/product/${product._id}`}>
                        <Card.Title as="div">
                            <strong>{product.name}</strong>
                        </Card.Title>
                    </Link>
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
