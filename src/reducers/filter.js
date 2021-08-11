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
    case 'CHANGE_FILTER':
      console.log('yes this is me filter reducer');
      console.log(action.payload);
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export default filterReducer;
