import PropTypes from 'prop-types';

function Meal(props) {
  const { meal } = props;
  return (
    <div className="Meal">
      {meal}
    </div>
  );
}

Meal.propTypes = {
  meal: PropTypes.string.isRequired,
};

export default Meal;
