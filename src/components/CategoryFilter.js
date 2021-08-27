import React from 'react';
import PropTypes from 'prop-types';

function CategoryFilter(props) {
  const { handleFilterChange } = props;
  const categories = ['CATEGORIES', 'All', 'Beef', 'Chicken', 'Dessert', 'Pasta', 'Pork', 'Seafood', 'Vegan', 'Breakfast'];

  const handleFilter = (e) => {
    const newFilter = e.target.value;
    handleFilterChange(newFilter);
  };

  return (
    <div className="filtercat">
      <p>
        <label htmlFor="cat">
          Choose
          <select
            className="form-control"
            id="cat"
            onChange={handleFilter}
          >
            { categories.map((category) => <option key={category}>{category}</option>)}
          </select>
        </label>
      </p>
    </div>

  );
}

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
