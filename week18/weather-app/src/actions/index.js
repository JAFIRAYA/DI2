export const setWeatherData = (data) => {
    return { type: 'SET_WEATHER_DATA', payload: data };
  };
  
  export const addToFavorites = (location) => {
    return { type: 'ADD_TO_FAVORITES', payload: location };
  };
  
  export const removeFromFavorites = (cityName) => {
    return { type: 'REMOVE_FROM_FAVORITES', payload: cityName };
  };
  
  export const setError = (error) => {
    return { type: 'SET_ERROR', payload: error };
  };
  