import PropTypes from 'prop-types';

function Meal(props) {
  const { meal } = props;
  const { strMeal, strMealThumb } = meal;

  return (
    <div className="meal">
      <img src={strMealThumb} alt="Logo" />
      <h2>{strMeal}</h2>
    </div>
  );
}

Meal.propTypes = {
  meal: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Meal;
