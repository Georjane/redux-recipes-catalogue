import { connect } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Meal from '../components/Meal';
import {
  LIST_MEALS, CHANGE_FILTER, MEAL_DETAILS,
} from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';
import foodlogo from '../images/foodlogo2.png';

function MealList(props) {
  const { mealsInfo } = props;
  const { meals, filter } = mealsInfo;
  const filteredmeals = [];
  useEffect(() => {
    const { LIST_MEALS } = props;
    LIST_MEALS();
  }, []);

  const handleFilterChange = (newFilter) => {
    const { CHANGE_FILTER } = props;
    CHANGE_FILTER(newFilter);
  };

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

  return (
    <div>
      <header className="nav">
        <ul>
          <li><img src={foodlogo} alt="foodlogo" className="foodlogo" /></li>
          <li>
            <CategoryFilter handleFilterChange={handleFilterChange} />
          </li>
        </ul>
      </header>
      <div className="main landingpagediv">
        <div>
          <h1>Welcome To Our Catalogue of Recipes</h1>
          <p>
            <i>
              Choose a recipe, try it out and eat to your heart&apos;s content.
              <br />
              We bring you the best recipes from around the world! Enjoy as you browse through below
            </i>
          </p>
        </div>
      </div>
      <div data-testid="gridcon" className="grid-container">
        {filteredmeals.map((meal) => (
          <div key={meal} className="hover">
            <Link
              to={{
                pathname: '/details',
                aboutProps: {
                  id: meal.idMeal,
                  mealname: meal.strMeal,
                  image: meal.strMealThumb,
                },
              }}
              key={meal}
            >
              <button className="meal" value={meal.idMeal} type="button">
                <Meal meal={meal} key={meal} />
              </button>
            </Link>
          </div>
        ))}
      </div>
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
  CHANGE_FILTER: (filter) => { dispatch(CHANGE_FILTER(filter)); },
  MEAL_DETAILS: (id) => { dispatch(MEAL_DETAILS(id)); },
  LIST_MEALS: () => { dispatch(LIST_MEALS()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(MealList);
