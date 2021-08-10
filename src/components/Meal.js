import PropTypes from 'prop-types';

function Meal(props) {
  const { meal } = props;
  const { strMeal, strMealThumb } = meal;
  return (
    <div className="Meal">
      {strMeal}
      <img src={strMealThumb} alt="Logo" />
    </div>
  );
}

Meal.propTypes = {
  meal: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Meal;
