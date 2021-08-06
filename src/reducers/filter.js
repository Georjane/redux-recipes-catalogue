const initialState = {
  meals: ['rice', 'chicken', 'stew'],
  filter: 'All',
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default filterReducer;
