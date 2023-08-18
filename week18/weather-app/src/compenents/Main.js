import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setWeatherData, addToFavorites, removeFromFavorites, setError } from '../actions/index';
import WeatherAPI from '../utils/WeatherApi';




 const MainScreen = () => {
  const [city, setCity] = useState('Tel Aviv');
  const weatherData = useSelector((state) => state.weatherData);
  const favorites = useSelector((state) => state.favorites);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  const handleSearch = async () => {
    try {
      const data = await WeatherAPI.getWeatherData(city);
      dispatch(setWeatherData(data));
    } catch (error) {
      dispatch(setError('City not found!'));
    }
  };

  const handleFavorite = () => {
    if (favorites.some((fav) => fav.name === city)) {
      dispatch(removeFromFavorites(city));
    } else {
      dispatch(addToFavorites({ id: Date.now(), name: city, currentWeather: weatherData.current }));
    }
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search city"
      />
      <button onClick={handleSearch}>Search</button>
      {error && <div className="error">{error}</div>}
      {weatherData && (
        <div>
          <h2>{weatherData.LocalizedName}</h2>
          <p>Current Weather: {weatherData.current.condition.text}</p>
          <p>Temperature: {weatherData.current.temp_c}°C</p>
          <button onClick={handleFavorite}>
            {favorites.some((fav) => fav.name === city) ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
      )}
    </div>
  );
};

export default MainScreen;
