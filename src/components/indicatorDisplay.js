import React from 'react';
import { PropTypes } from 'prop-types';

function IndicatorDisplay({ ind }) {
  return (
    <div className="indicator-card">
      <div className="indicator-card-head">
        <img className="indicator-card-img" src={cat.strCategoryThumb} alt="categpry" />
      </div>
      <div className="indicator-card-data">
        <div className="indicator-card-catname">
          <h5>{ind.strCategory}</h5>
        </div>
      </div>
    </div>
  );
}

IndicatorDisplay.propTypes = {
  cat: PropTypes.shape({
    strCategory: PropTypes.string,
    strCategoryDescription: PropTypes.string,
    strCategoryThumb: PropTypes.string,
  }),
};

IndicatorDisplay.defaultProps = {
  ind: PropTypes.shape({
    strIndName: '',
    strIndGoal: '',
    strIndImage: '',
  }),
};

export default IndicatorDisplay;
