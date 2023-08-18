const initialState = {
    currentWeather: "",
    forecastData: "",
    error: null,
  };


  
  const weatherReducer = (state = initialState, action) => {

   
    switch (action.type) {
      case 'FETCH_WEATHER_SUCCESS':
        return {
          ...state,
          currentWeather: action.payload.main.temp,
          forecastData: action.payload.weather[0].description,
          error: null,
        };
      case 'FETCH_WEATHER_FAILURE':
        return {
          ...state,
          currentWeather: null,
          forecastData: null,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default weatherReducer;
  