const initialState = {
  meals: [],
  // categories: ['Beef', 'Chicken', 'Dessert', 'Pasta', 'Pork', 'Seafood', 'Vegan', 'Breakfast'],
  filter: 'All',
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LIST_MEALS': {
      const newState = { ...state, meals: [...state.meals, ...action.payload] };
      return newState;
    }
    default:
      return state;
  }
};

export default filterReducer;
