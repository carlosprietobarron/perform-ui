import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import modalForm from '../components/modalForm';

function DashDisplay({ dash }) {
  // const history = useHistory();
  
  const handleClick = ind_id => {
   return (  
    <modalForm />
  )
  //   //history.push(`/recipes/${recipe}`);
  };

  return (
    <div className="dash-card">
      <div className="dash-card-head">
        <h2>DATE</h2>
      </div>
      <div className="dash-card-data">
        <div className="dash-card-name">
          <h5>{dash.measure}</h5>
          <button type="button" className="btn" onClick={() => handleClick(1)}>
            Modal Form
          </button> 
        </div>
      </div>
      <modalForm />
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
