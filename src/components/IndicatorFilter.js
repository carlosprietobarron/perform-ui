import React from 'react';
import propTypes from 'prop-types';

function IndicatorFilter({ indicators, updateFilter }) {
  const allindicators = [...indicators];

  const handleChange = e => {
    updateFilter(e.target.value);
  };

  const MakeIndicator = ind => <option id={ind} key={ind}>{ind}</option>;
  return (
    <div>
      <form>
        <select className="ind-filter" id="indicatorFilter" onChange={e => { handleChange(e); }}>
          {allindicators.map(MakeIndicator)}
        </select>
      </form>
    </div>
  );
}

IndicatorFilter.propTypes = {
  indicators: propTypes.arrayOf(propTypes.object),
  updateFilter: propTypes.func.isRequired,
};

IndicatorFilter.defaultProps = {
  categories: [],
};

export default IndicatorFilter;
