import React from 'react';
import { Container, Row, Col, Image, ListGroup, Button } from 'react-bootstrap';
import products from '../products';
import { Link, useParams } from 'react-router-dom';
import Rating from '../components/Rating';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProductScreen = () => {
    const { id } = useParams();
    const product = products.find((p) => p._id === id);

    return (
        <div>
            <Link className="btn btn-light my-3" to="/">
                <span>
                    <FontAwesomeIcon icon={faArrowLeft} /> Go Back
                </span>
            </Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating
                                value={product.rating}
                                reviews={product.numReviews}
                            />
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </div>
    );
};

export default ProductScreen;
