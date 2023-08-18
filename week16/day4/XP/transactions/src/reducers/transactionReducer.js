const initialState = {
    currentIndex: -1,
    list: JSON.parse(localStorage.getItem('transactions')) || [],
  };
  
  const transactionReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INSERT':
        return { ...state, list: [...state.list, action.payload] };
      case 'UPDATE':
        state.list[action.payload.index] = action.payload.data;
        return { ...state, list: [...state.list] };
      case 'DELETE':
        state.list.splice(action.payload, 1);
        return { ...state, list: [...state.list] };
      case 'UPDATE-INDEX':
        return { ...state, currentIndex: action.payload };
      default:
        return state;
    }
  };
  
  export default transactionReducer;
  