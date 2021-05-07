import React from 'react';
import { PropTypes } from 'prop-types';

function IndicatorDisplay({ ind }) {
  return (
    <div className="indicator-card">
      <div className="indicator-card-head">
        <img className="indicator-card-img" src={ind.strImage} alt="categpry" />
      </div>
      <div className="indicator-card-data">
        <div className="indicator-card-catname">
          <h5>{ind.strName}</h5>
        </div>
      </div>
    </div>
  );
}

IndicatorDisplay.propTypes = {
  ind: PropTypes.shape({
    strId: PropTypes.string,
    strName: PropTypes.string,
    strGoal: PropTypes.string,
    strImage: PropTypes.string,
  }),
};

IndicatorDisplay.defaultProps = {
  ind: PropTypes.shape({
    strId: '1',
    strName: '',
    strGoal: '',
    strImage: '',
  }),
};

export default IndicatorDisplay;
