import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { LIST_MEALS, CHANGE_FILTER, MEAL_DETAILS } from '../actions/index';

function Details(props) {
  const { location } = props;
  const { aboutProps } = location;
  const { mealsInfo } = props;
  const { mealDetails } = mealsInfo;
  const { meals } = mealDetails || [];
  const ingre = [];
  const history = useHistory();
  if (meals !== undefined) {
    Object.entries(meals[0]).forEach((element) => {
      if (element[0].slice(0, (element[0].length - 1)) === 'strIngredient') {
        ingre.push(element[1]);
      }
    });
  }
  useEffect(() => {
    const { MEAL_DETAILS } = props;
    MEAL_DETAILS(aboutProps.id);
  }, []);

  return (
    <div className="details">
      <img src={aboutProps.image} alt="Logo" />
      <div>
        <h1>{aboutProps.mealname}</h1>
        <a className="video" href={meals === undefined ? ' ' : meals[0].strYoutube}>
          See Video
        </a>
        <h3>
          Category:
          {' '}
          {meals === undefined ? ' ' : meals[0].strCategory}
        </h3>
        <h3>
          Area:
          {' '}
          {meals === undefined ? ' ' : meals[0].strArea}
        </h3>
        <h3>Ingredients</h3>
        <ol className="grid-container-ingr">
          {ingre.map((ingr) => (
            <li key={ingr}>{ingr}</li>
          ))}
        </ol>
        <h3>Instructions</h3>
        <p>
          {meals === undefined ? ' ' : meals[0].strInstructions}
        </p>
        <button type="button" onClick={() => history.goBack()}>Go Back</button>
      </div>
    </div>
  );
}

Details.propTypes = {
  mealsInfo: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  MEAL_DETAILS: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  mealsInfo: state,
});

const mapDispatchToProps = (dispatch) => ({
  CHANGE_FILTER: (filter) => { dispatch(CHANGE_FILTER(filter)); },
  MEAL_DETAILS: (id) => { dispatch(MEAL_DETAILS(id)); },
  LIST_MEALS: () => { dispatch(LIST_MEALS()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
