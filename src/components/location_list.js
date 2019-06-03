import React from 'react';
import PropTypes from 'prop-types';
import WheaterLocation from './WheaterLocation/index';
import './styles.css';

const LocationList = ({ cities, onSelectedLocation }) => {
    const handleWeatherLocationOnClick = city => {
        console.log('Entro');
        onSelectedLocation(city);
    }
    const cities_to_component = cities => (
        cities.map( (city) => (
            <WheaterLocation 
                key={city.key} 
                city={city.name} 
                onWeatherLocationClick={ ()=> handleWeatherLocationOnClick(city.name)}
                data={city.data} />
        )
    ));
    return (
        <div className='LocationList'>
            {cities_to_component(cities)}
        </div>
    )
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
};

export default LocationList;