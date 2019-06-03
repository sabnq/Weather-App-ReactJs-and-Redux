import { api_key, base_url_forecast } from '../constants/apir_url';
import transformForecast from '../services/transform_forecast';
import trasnform_weather from '../services/transform_weather';
import get_url_by_city from '../services/get_url_weather_by_city';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';

const setCity = value => ({ type: SET_CITY, value});
const setForecastData = value => ({ type: SET_FORECAST_DATA, value});

const getWeatherCity = value => ({type: GET_WEATHER_CITY, value});
const setWeatherCity = value => ({type: SET_WEATHER_CITY, value});

export const setSelectedCity = value => {
    return (dispatch, getState) => {
        const url_forecast = `${base_url_forecast}?q=${value}&appid=${api_key}`;
        dispatch(setCity(value));
        const state = getState();
        const date = state.cities[value] && state.cities[value].forecastDataDate;
        const now = new Date();

        if(date && (now - date) < 1*60*1000) {
            return;
        }
        
        // Activar el estado de busqueda de datos
        return fetch(url_forecast)
        .then( data => data.json())
        .then( weather_data => {
            const forecastData = transformForecast(weather_data);
            dispatch(setForecastData({city: value, forecastData}))
            // Modificar el estado con resultado del fetch

        })
        .catch( (error)=> {
            console.log(error);
        }) 
    };
};

export const setWeather = value => {
    return dispatch => {     
        value.forEach(city => {
            dispatch(getWeatherCity(city));
            const api_weather = get_url_by_city(city);
            fetch(api_weather).then((resolve) => {
                return resolve.json();
            })
            .then((weather_data) => {
                const weather = trasnform_weather(weather_data);
                dispatch(setWeatherCity({city, weather}));
            })
        });
    }
}