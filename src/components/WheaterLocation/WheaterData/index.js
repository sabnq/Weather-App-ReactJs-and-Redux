import React from 'react';
import PropTypes from 'prop-types';
import WheaterExtraInfo from './WheaterExtraInfo';
import WheaterTemperature from './WheaterTemperature';
import './styles.css';

const WheaterData = ({data:{temperature, humidity, wind, weatherState}}) => {
    return (
    <div className='weatherDataCount'>
        <WheaterTemperature temperature={temperature} weatherState={weatherState}/>
        <WheaterExtraInfo humidity={humidity} wind={wind}/>
    </div>
    )
};

WheaterData.protoTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    })
}

export default WheaterData;