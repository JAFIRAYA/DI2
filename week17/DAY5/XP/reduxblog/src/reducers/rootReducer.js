const initialState = {
    posts: [
      { id: '1', title: 'Post 1', body: 'This is the content of Post 1' },
      { id: '2', title: 'Post 2', body: 'This is the content of Post 2' },
      { id: '3', title: 'Post 3', body: 'This is the content of Post 3' },
    ],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'DELETE_POST':
        return {
          ...state,
          posts: state.posts.filter((post) => post.id !== action.id),
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  