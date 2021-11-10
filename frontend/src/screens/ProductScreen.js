import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, ListGroup, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Rating from '../components/Rating';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

const ProductScreen = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const fetchProduct = async () => {
            const res = await axios.get(`/api/products/${id}`);
            setProduct(res.data);
        };

        fetchProduct();
    }, []);

    return (
        <Container>
            <Link className="btn btn-light my-3" to="/">
                <span>
                    <FontAwesomeIcon icon={faArrowLeft} /> Go Back
                </span>
            </Link>
            <Row>
                <Col md={5}>
                    <Image src={product.image} fluid />
                </Col>
                <Col md={4}>
                    <ListGroup
                        variant="flush"
                        style={{ boxShadow: '2px 2px 2px #fff' }}
                    >
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating
                                value={product.rating}
                                reviews={product.numReviews}
                            />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h4> Price: ${product.price}</h4>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h3>Description:</h3>
                            <h6>{product.description}</h6>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <ListGroup style={{ boxShadow: '2px 2px 2px #fff' }}>
                        <ListGroup.Item>
                            <Row>
                                <Col>Price:</Col>
                                <Col>${product.price}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Status:</Col>
                                <Col>
                                    {product.countInStock > 0
                                        ? 'In Stock'
                                        : 'Out of Stock'}
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button
                                className="btn btn-dark"
                                style={{ width: '100%' }}
                                disabled={product.countInStock === 0}
                            >
                                Add to Cart
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductScreen;
