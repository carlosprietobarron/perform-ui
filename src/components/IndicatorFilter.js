import React from 'react';
import propTypes from 'prop-types';

function IndicatorFilter({ indicators, updateFilter }) {
  const allCategories = [...indicators];

  const handleChange = e => {
    updateFilter(e.target.value);
  };

  const MakeIndicator = ind => <option id={ind} key={ind}>{ind}</option>;
  return (
    <div>
      <form>
        <select className="ind-filter" id="indicatorFilter" onChange={e => { handleChange(e); }}>
          {allCategories.map(MakeIndicator)}
        </select>
      </form>
    </div>
  );
}

CategoryFilter.propTypes = {
  categories: propTypes.arrayOf(propTypes.string),
  updateFilter: propTypes.func.isRequired,
};

CategoryFilter.defaultProps = {
  categories: [],
};

export default CategoryFilter;
