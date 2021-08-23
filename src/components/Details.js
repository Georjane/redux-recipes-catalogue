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
import { LIST_MEALS, CHANGE_FILTER, MEAL_DETAILS } from '../actions/index';

function Details(props) {
  const { location } = props;
  const { aboutProps } = location;
  console.log(aboutProps);
  const { mealsInfo } = props;
  // const { meals, filter } = mealsInfo;
  console.log(props);
  console.log(mealsInfo);
  // console.log(filter);
  useEffect(() => {
    MEAL_DETAILS(aboutProps);
  });

  const handleDetails = (e) => {
    // console.log(e.target.value);
    const { MEAL_DETAILS } = props;
    MEAL_DETAILS(e.target.value);
  };

  return (
    <div>
      <h1>id</h1>
      <h2>name</h2>
      <button value={aboutProps} type="button" onClick={handleDetails}>hhh</button>
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
