


import axios from 'axios';

const API_KEY = '2aa0b94d190dc5d6091d8cc721724ef3';

export const fetchWeatherSuccess = (data) => {
  return {
    type: 'FETCH_WEATHER_SUCCESS',
    payload: data,
  };
};

export const fetchWeatherFailure = (error) => {
  return {
    type: 'FETCH_WEATHER_FAILURE',
    payload: error,
  };
};

export const fetchWeatherData = (location) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`);
      dispatch(fetchWeatherSuccess(response.data));

    } catch (error) {
      dispatch(fetchWeatherFailure(error.message));
      
    }
  };
};
