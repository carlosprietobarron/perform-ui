import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

function DashDisplay({ menu }) {
  const history = useHistory();
  
  // const handleClick = menu => {
  //   const recipe = menu.strMeal;
  //   //history.push(`/recipes/${recipe}`);
  // };

  return (
    <div className="dash-card">
      <div className="dash-card-head">
        <img className="dash-card-day" src={menu.strMealThumb} alt="date" />
      </div>
      <div className="dash-card-data">
        <div className="dash-card-name">
          <h5>{dash.measure}</h5>
          {/* <button type="button" className="btn btn-show-recipe" onClick={() => handleClick(menu)}>
            View Recipe
          </button> */}
        </div>
      </div>
    </div>
  );
}

DashDisplay.propTypes = {
  dash: PropTypes.shape({
    idx_id: PropTypes.string,
    day: PropTypes.string,
    measure: PropTypes.string,
  }),
};

DashDisplay.defaultProps = {
  dash: PropTypes.shape({
    idx_id: '',
    day: '',
    measure: '',
  }),
};

export default DashDisplay;
