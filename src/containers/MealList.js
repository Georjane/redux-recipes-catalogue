import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Meal from '../components/Meal';
import { LIST_MEALS, CHANGE_FILTER } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

function MealList(props) {
  const { mealsInfo } = props;
  const { meals, filter } = mealsInfo;
  console.log(props);
  console.log(meals);
  console.log(filter);

  const listMeals = (e) => {
    e.preventDefault();
    const { LIST_MEALS } = props;
    LIST_MEALS();
  };

  const handleFilterChange = (newFilter) => {
    console.log(newFilter);
    const { CHANGE_FILTER } = props;
    CHANGE_FILTER(newFilter);
  };

  const allMeals = [];
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
  console.log(filteredmeals);
  console.log(allMeals);

  return (
    <div>
      <CategoryFilter handleFilterChange={handleFilterChange} />
      <button type="button" onClick={listMeals}>Click</button>
      <table>
        <tbody>
          {filteredmeals.map((meal) => (
            <Link to="/details" key={meal}><Meal meal={meal} key={meal} /></Link>
          ))}
        </tbody>
      </table>
    </div>
  );
}

MealList.propTypes = {
  mealsInfo: PropTypes.objectOf(PropTypes.any).isRequired,
  LIST_MEALS: PropTypes.func.isRequired,
  CHANGE_FILTER: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  mealsInfo: state,
});

const mapDispatchToProps = (dispatch) => ({
  // REMOVE_BOOK: (book) => { dispatch(REMOVE_BOOK(book)); },
  CHANGE_FILTER: (filter) => { dispatch(CHANGE_FILTER(filter)); },
  LIST_MEALS: () => { dispatch(LIST_MEALS()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(MealList);
