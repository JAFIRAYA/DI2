import React from 'react';
import { useSelector } from 'react-redux';
const WeatherForecast = () => {
    const currentWeather = useSelector((state) => state.weather.currentWeather);
    const forecastData = useSelector((state) => state.weather.forecastData);
    const error = useSelector((state) => state.weather.error);

    if (error) {
        return <div>Error: {error}</div>;
      }
    
      if (!currentWeather || !forecastData) {
        return null;
      }
    
      return (
        <div className='all'>
          <h2>Current Weather</h2>
          <p>Temperature: {currentWeather}°C</p>
          <p>Weather Description: {currentWeather}</p>
    
          <h2>Forecast</h2>
          {forecastData}
        </div>
      );
};
export default WeatherForecast;