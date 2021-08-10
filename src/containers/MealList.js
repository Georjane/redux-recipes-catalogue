import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Meal from '../components/Meal';
import LIST_MEALS from '../actions/index';

function MealList(props) {
  const { mealsInfo } = props;
  const { meals } = mealsInfo;
  console.log(props);
  console.log(meals);

  const handleFilterChange = (e) => {
    e.preventDefault();
    const { LIST_MEALS } = props;
    LIST_MEALS();
  };

  return (
    <div>
      <button type="button" onClick={handleFilterChange}>Click</button>
      <table>
        <tbody>
          {meals.map((meal) => (
            <Meal meal={meal} key={meal} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

MealList.propTypes = {
  mealsInfo: PropTypes.objectOf(PropTypes.any).isRequired,
  LIST_MEALS: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  mealsInfo: state,
});

const mapDispatchToProps = (dispatch) => ({
  // REMOVE_BOOK: (book) => { dispatch(REMOVE_BOOK(book)); },
  // CHANGE_FILTER: (filter) => { dispatch(CHANGE_FILTER(filter)); },
  LIST_MEALS: () => { dispatch(LIST_MEALS); },
});

export default connect(mapStateToProps, mapDispatchToProps)(MealList);
