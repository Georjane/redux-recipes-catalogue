const apiMiddleware = (store) => (next) => (action) => {
  if (!action.meta || action.meta.type !== 'api') {
    return next(action);
  }
  if (action.type === 'MEAL_DETAILS') {
    const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
    fetch(url + action.payload)
      .then((response) => response.json())
      .then((data) => {
        console.log('ok');
        const newActions = { ...action, payload: data };
        delete newActions.meta;
        return store.dispatch(newActions);
      });
  }
  if (action.type !== 'MEAL_DETAILS') {
    const categories = ['Beef', 'Chicken', 'Dessert', 'Pasta', 'Pork', 'Seafood', 'Vegan', 'Breakfast'];
    const apiUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
    const meals = [];
    return Promise.all(categories.map((cat) => fetch(apiUrl + cat)))
      .then((responses) => Promise.all(responses.map((res) => res.json())))
      .then((data) => {
        let i = 0;
        data.forEach((meal) => {
        // (meal.meals).forEach((element) => {
        //   meals.push(element);
        // });
          const subhash = {};
          subhash[categories[i]] = meal.meals;
          meals.push(subhash);
          i += 1;
        });
        const newAction = { ...action, payload: meals };
        delete newAction.meta;
        store.dispatch(newAction);
      });
  }
  return next(action);
};

export default apiMiddleware;
