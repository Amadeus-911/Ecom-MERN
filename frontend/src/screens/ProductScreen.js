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
        </div>
    );
};

export default ProductScreen;
