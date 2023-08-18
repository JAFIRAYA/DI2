const initialState = {
    weatherData: null,
    favorites: [],
    error: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_WEATHER_DATA':
        return { ...state, weatherData: action.payload, error: null };
      case 'ADD_TO_FAVORITES':
        return { ...state, favorites: [...state.favorites, action.payload], error: null };
      case 'REMOVE_FROM_FAVORITES':
        return {
          ...state,
          favorites: state.favorites.filter((fav) => fav.name !== action.payload),
          error: null,
        };
      case 'SET_ERROR':
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  