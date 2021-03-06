export const LIST_MEALS = () => ({
  type: 'LIST_MEALS',
  meta: {
    type: 'api',
    url: 'www.themealdb.com/api/json/v1/1/categories.php',
  },
});

export const CHANGE_FILTER = (filter) => ({
  type: 'CHANGE_FILTER',
  payload: filter,
});

export const MEAL_DETAILS = (id) => ({
  type: 'MEAL_DETAILS',
  payload: id,
  meta: {
    type: 'api',
  },
});
