import React from 'react';
import PropTypes from 'prop-types';

function CategoryFilter(props) {
  const { handleFilterChange } = props;
  console.log(props);
  const categories = ['CATEGORIES', 'All', 'Starter', 'Vegan', 'Breakfast'];

  const handleFilter = (e) => {
    const newFilter = e.target.value;
    handleFilterChange(newFilter);
  };

  return (
    <div className="filtercat">
      <h4>
        <select
          className="form-control"
          id="filter"
          onChange={handleFilter}
        >
          { categories.map((category) => <option key={category}>{category}</option>)}
        </select>
      </h4>
    </div>

  );
}

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
