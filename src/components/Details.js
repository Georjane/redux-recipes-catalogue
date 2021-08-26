// import PropTypes from 'prop-types';

// function Details(props) {
//   const { location } = props;
//   const { aboutProps } = location;
//   console.log(aboutProps);
//   return (
//     <div className="Details">
//       Details
//     </div>
//   );
// }

// Details.propTypes = {
//   location: PropTypes.objectOf(PropTypes.any).isRequired,
// };

// export default Details;
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { LIST_MEALS, CHANGE_FILTER, MEAL_DETAILS } from '../actions/index';

function Details(props) {
  const { location } = props;
  const { aboutProps } = location;
  // console.log(aboutProps);
  const { mealsInfo } = props;
  const { mealDetails } = mealsInfo;
  const { meals } = mealDetails || [];
  // console.log(meals[0]);
  const ingre = [];
  // let count = 1;
  const history = useHistory();
  if (meals !== undefined) {
    Object.entries(meals[0]).forEach((element) => {
      if (element[0].slice(0, (element[0].length - 1)) === 'strIngredient') {
        console.log(element);
        ingre.push(element[1]);
      }
    });
    // if (meals[0][`strIngredient + ${count}`] !== '') {
    //   ingre.push(meals[0][`strIngredient + ${count}`]);
    //   count += 1;
    // }
  }
  console.log(ingre.length);
  console.log(mealDetails);
  // console.log(props);
  console.log(mealsInfo);
  // console.log(filter);
  useEffect(() => {
    MEAL_DETAILS(aboutProps);
  });

  const handleDetails = (e) => {
    // console.log(e.target.value);
    const { MEAL_DETAILS } = props;
    MEAL_DETAILS(e.target.value);
    const hidden = document.querySelectorAll('h3');
    hidden.forEach((hide) => {
      hide.classList.remove('hideDiv');
    });
  };

  return (
    <div className="details">
      <img src={aboutProps.image} alt="Logo" />
      <div>
        <h1>{aboutProps.mealname}</h1>
        <button className="view" value={aboutProps.id} type="button" onClick={handleDetails}>Click to View Ingredients and Instructions</button>
        <a className="video" href={meals === undefined ? ' ' : meals[0].strYoutube}>
          See Video
        </a>
        <h3 className="hideDiv">
          Category:
          {' '}
          {meals === undefined ? ' ' : meals[0].strCategory}
        </h3>
        <h3 className="hideDiv">
          Area:
          {' '}
          {meals === undefined ? ' ' : meals[0].strArea}
        </h3>
        <h3 className="hideDiv">Ingredients</h3>
        <ol className="grid-container-ingr">
          {ingre.map((ingr) => (
            <li key={ingr}>{ingr}</li>
          ))}
        </ol>
        <h3 className="hideDiv">Instructions</h3>
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
  // history: PropTypes.objectOf(PropTypes.any).isRequired,
  // 'history.push': PropTypes.objectOf(PropTypes.any).isRequired,
  // LIST_MEALS: PropTypes.func.isRequired,
  // CHANGE_FILTER: PropTypes.func.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(Details);
