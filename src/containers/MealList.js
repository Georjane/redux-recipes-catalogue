import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Meal from '../components/Meal';
import { LIST_MEALS, CHANGE_FILTER, MEAL_DETAILS } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

function MealList(props) {
  const { mealsInfo } = props;
  const { meals, filter } = mealsInfo;
  console.log(props);
  // console.log(meals);
  // console.log(filter);

  const listMeals = (e) => {
    e.preventDefault();
    const { LIST_MEALS } = props;
    LIST_MEALS();
  };

  const handleFilterChange = (newFilter) => {
    // console.log(newFilter);
    const { CHANGE_FILTER } = props;
    CHANGE_FILTER(newFilter);
  };

  const handleDetails = (e) => {
    // console.log(e.target.value);
    const { MEAL_DETAILS } = props;
    MEAL_DETAILS(e.target.value);
  };
  // const allMeals = [];
  const filteredmeals = [];

  meals.forEach((meal) => {
    if (Object.keys(meal)[0] === filter) {
      (meal[filter]).forEach((element) => {
        filteredmeals.push(element);
      });
    } else if (filter === 'All' || filter === 'CATEGORIES') {
      (Object.values(meal)).forEach((element) => {
        element.forEach((i) => {
          filteredmeals.push(i);
        });
      });
    }
  });
  // const filteredmeals = meals.filter(filterByCategory);
  // console.log(filteredmeals);
  // console.log(allMeals);

  return (
    <div>
      <CategoryFilter handleFilterChange={handleFilterChange} />
      <button type="button" onClick={listMeals}>Click</button>
      <table>
        <tbody>
          {filteredmeals.map((meal) => (
            <div key={meal}>
              <Link
                to={{
                  pathname: '/details',
                  aboutProps: meal.idMeal,
                }}
                key={meal}
              >
                <button value={meal.idMeal} type="button" onClick={handleDetails}>
                  <Meal meal={meal} key={meal} />
                </button>
              </Link>
              <button type="button" onClick={() => { meal.history.push('/details'); }}>Press</button>
              <button value={meal.idMeal} type="button" onClick={handleDetails}>{meal.strMeal}</button>
              <Meal meal={meal} key={meal} />
            </div>
          ))}
        </tbody>
      </table>
    </div>
  );
}

MealList.propTypes = {
  mealsInfo: PropTypes.objectOf(PropTypes.any).isRequired,
  // history: PropTypes.objectOf(PropTypes.any).isRequired,
  // 'history.push': PropTypes.objectOf(PropTypes.any).isRequired,
  LIST_MEALS: PropTypes.func.isRequired,
  CHANGE_FILTER: PropTypes.func.isRequired,
  MEAL_DETAILS: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  mealsInfo: state,
});

const mapDispatchToProps = (dispatch) => ({
  // REMOVE_BOOK: (book) => { dispatch(REMOVE_BOOK(book)); },
  CHANGE_FILTER: (filter) => { dispatch(CHANGE_FILTER(filter)); },
  MEAL_DETAILS: (id) => { dispatch(MEAL_DETAILS(id)); },
  LIST_MEALS: () => { dispatch(LIST_MEALS()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(MealList);
