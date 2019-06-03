import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './forecast_item/index';
import './styles.css';

const renderForecastItemDays = (forecastData) => {
    return forecastData.map( forecast => 
        <ForecastItem key={`${forecast.weekDay}${forecast.hour}`} weekDay={forecast.weekDay} hour={forecast.hour} data={forecast.data}></ForecastItem>
    )
}

const renderProgress = () =>{
    return <h3>Cargando Pronóstico extendido...</h3>;    
}

const Forecast_extended = ({city, forecastData}) => (
    <div>
        <h2 className='forecast-title'>Pronóstico para la ciudad {city}</h2>
        {forecastData ?
            renderForecastItemDays(forecastData) :
            renderProgress()
        }
    </div>
);

Forecast_extended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
}

export default Forecast_extended;