const initialStateRobots = {
    isPending: false,
    robots: [],
    error: '',
  };
  
  const robotsReducer = (state = initialStateRobots, action = {}) => {
    switch (action.type) {
      case REQUEST_ROBOTS_PENDING:
        return { ...state, isPending: true };
      case REQUEST_ROBOTS_SUCCESS:
        return { ...state, isPending: false, robots: action.payload };
      case REQUEST_ROBOTS_FAILED:
        return { ...state, isPending: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default robotsReducer;
  