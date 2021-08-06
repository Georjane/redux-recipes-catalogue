import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Meal from '../components/Meal';

function MealList(props) {
  const { mealsInfo } = props;
  const { meals } = mealsInfo;
  console.log(meals);
  return (
    <div>
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
};

const mapStateToProps = (state) => ({
  mealsInfo: state,
});

export default connect(mapStateToProps)(MealList);
