const initialState = {
  meals: [],
  filter: 'All',
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LIST_MEALS': {
      const newState = { ...state, meals: [...state.meals, ...action.payload] };
      return newState;
    }
    case 'CHANGE_FILTER':
      return { ...state, filter: action.payload };
    case 'MEAL_DETAILS': {
      const newState = { ...state, mealDetails: action.payload };
      return newState;
    }
    default:
      return state;
  }
};

export default filterReducer;
