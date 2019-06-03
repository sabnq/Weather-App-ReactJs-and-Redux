import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import PropTypes from 'prop-types';
import WheaterData from '../WheaterLocation/WheaterData/index';
import './styles.css';


const WheaterLocation = ({onWeatherLocationClick, city , data}) => (
    <div className='weatherLocationCount' onClick={onWeatherLocationClick}>
        <Location city={city}></Location>
        {data ?
            <WheaterData data={data}></WheaterData>
            : <CircularProgress size={60} thickness={7} />
        }
    </div>
);

WheaterLocation.propTypes = {
    city: PropTypes.string.isRequired, 
    onWeatherLocationClick: PropTypes.func,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    })
}

export default WheaterLocation;