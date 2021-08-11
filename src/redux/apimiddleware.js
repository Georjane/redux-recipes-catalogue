const apiMiddleware = (store) => (next) => (action) => {
  if (!action.meta || action.meta.type !== 'api') {
    return next(action);
  }
  // This is an api request
  // const apiUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';
  const categories = ['Starter', 'Vegan', 'Breakfast'];
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
  // categories.forEach((category) => {
  //   const url = apiUrl + category;
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // console.log('This are your meals', data);
  //       data.meals.forEach((meal) => {
  //         meals.push(meal);
  //       });
  //     })
  //     .then(() => {
  // const newAction = { ...action, payload: meals, meals };
  // delete newAction.meta;
  // return store.dispatch(newAction);
  //     });
  // });
  // console.log(meals);
// console.log(me);
  // return fetch(apiUrl)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log('This is your data', data.categories);
  //     const meals = [];
  //     data.categories.forEach((cat) => {
  //       meals.push(cat.strCategory);
  //     });
  //     const newAction = { ...action, payload: meals };
  //     delete newAction.meta;
  //     store.dispatch(newAction);
  //   });
};

export default apiMiddleware;
