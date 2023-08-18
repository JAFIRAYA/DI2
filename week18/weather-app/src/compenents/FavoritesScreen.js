import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const FavoritesScreen = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <div>
      <h2>Favorites</h2>
      {favorites.map((fav) => (
        <div key={fav.id}>
          <Link to={`/location/${fav.name}`}>
            <h3>{fav.name}</h3>
            <p>Current Weather: {fav.currentWeather.condition.text}</p>
            <p>Temperature: {fav.currentWeather.temp_c}°C</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FavoritesScreen;
