export const insertTransaction = (data) => {
    return {
      type: 'INSERT',
      payload: data,
    };
  };
  
  export const updateTransaction = (index, data) => {
    return {
      type: 'UPDATE',
      payload: { index, data },
    };
  };
  
  export const deleteTransaction = (index) => {
    return {
      type: 'DELETE',
      payload: index,
    };
  };
  
  export const updateIndex = (index) => {
    return {
      type: 'UPDATE-INDEX',
      payload: index,
    };
  };
  