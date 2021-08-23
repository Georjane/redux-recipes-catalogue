import PropTypes from 'prop-types';

function Meal(props) {
  const { meal } = props;
  const { strMeal, strMealThumb, idMeal } = meal;
  const handleDetails = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="Meal">
      {strMeal}
      <button type="button" value={idMeal} onClick={handleDetails}>{strMeal}</button>
      <img src={strMealThumb} alt="Logo" />
    </div>
  );
}

Meal.propTypes = {
  meal: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Meal;
