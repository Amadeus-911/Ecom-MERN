import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as farfastar } from '@fortawesome/free-regular-svg-icons';

const fullStarIcon = (
    <FontAwesomeIcon icon={faStar} style={{ color: 'gold' }} />
);
const halfStarIcon = (
    <FontAwesomeIcon icon={faStarHalfAlt} style={{ color: 'gold' }} />
);
const emptyStarIcon = (
    <FontAwesomeIcon icon={farfastar} style={{ color: 'gold' }} />
);

const Rating = ({ value, reviews }) => {
    return (
        <>
            <span>
                {value >= 1
                    ? fullStarIcon
                    : value >= 0.5
                    ? halfStarIcon
                    : emptyStarIcon}
            </span>
            <span>
                {value >= 2
                    ? fullStarIcon
                    : value >= 1.5
                    ? halfStarIcon
                    : emptyStarIcon}
            </span>
            <span>
                {value >= 3
                    ? fullStarIcon
                    : value >= 2.5
                    ? halfStarIcon
                    : emptyStarIcon}
            </span>
            <span>
                {value >= 4
                    ? fullStarIcon
                    : value >= 3.5
                    ? halfStarIcon
                    : emptyStarIcon}
            </span>
            <span>
                {value >= 5
                    ? fullStarIcon
                    : value >= 4.5
                    ? halfStarIcon
                    : emptyStarIcon}
            </span>
            <span>
                {reviews} {reviews ? 'reviews' : ''}
            </span>
        </>
    );
};

export default Rating;
