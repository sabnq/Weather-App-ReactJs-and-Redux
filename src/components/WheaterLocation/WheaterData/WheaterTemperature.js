import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import { CLOUD, SNOW, SUN, RAIN, THUNDER, DRIZZLE } from '../../../constants/wheater';
import './styles.css';

const icons = {
    [CLOUD]: 'cloud',
    [SUN]:'day-sunny',
    [RAIN]: 'rain',
    [SNOW]: 'snow',
    [THUNDER]: 'day-thunderstorm',
    [DRIZZLE]: 'day-showers'
};

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    const sizeIcon = '4x';
    if(icon) {
        return <WeatherIcons className='wicon' name={icon} size={sizeIcon} />;
    }
    else {
        return <WeatherIcons className='wicon' name={'day-sunny'} size={sizeIcon}></WeatherIcons>;    
    }
} 

const WheaterTemperature = ({temperature, weatherState}) => (
    <div className='weaterTemperatureCount'>
        {
            getWeatherIcon(weatherState) 
        }
        <span className='temperature'>{`${temperature}`}</span>
        <span className='temperatureType' >{`C°`}</span>
    </div>
);

WheaterTemperature.propTypes = {
    temperature: PropTypes.number,
    weatherState: PropTypes.string.isRequired
};


export default WheaterTemperature;