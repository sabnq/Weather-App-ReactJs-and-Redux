import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
const Location = (props) => {
    const { city } = props;
    return (
        <div className='LocationCount'>
            <h1>{city}</h1>
        </div>
    );
};

Location.protoTypes = {
    city: PropTypes.string.isRequired,
}

export default Location;