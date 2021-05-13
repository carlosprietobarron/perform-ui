import React, { useState, useEffect } from 'react';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchIndicators, fetchDash, changeFilter, checkLoggedInStatus} from '../redux/actions'
import IndCarousel from '../components/carrousel'
import IndicatorDisplay from '../components/indicatorDisplay'
import IndicatorFilter from '../components/IndicatorFilter'



function IndicatorsContainer(props) {

  const {
    indData ,dashData, fetchInd, fetchDash, changeIndicatorFilter, status, isLoggedIn,
  } = props;

  const [ind, setInd] = useState({
    strId: '',
    strName: '',
    strGoal: '',
    strImage: '',
  });

  const returnInd = indicator => {
    setInd({
      strId: indicator.id,
      strName: indicator.name,
      strGoal: indicator.goal,
      strImage: indicator.image,
    });
  };

  //const callDash = ind_id => <DashDisplay key={ind.id} dash={dashData} />;

  // const result = key => {
  //   console.log("indata data");
  //   console.log(indData.data);
  //   indData.data.find(obj => obj.strId === key)
  // };

  // const changeFilter = key => {
  //   changeIndicatorFilter(key);
  //   fetchDash(key);
  //   returnInd(result(key));
  // };

  const allIndicators = indData;

  useEffect(() => { fetchInd(); }, []);
  //useEffect(() => { fetchDash(ind); }, []);
  
  
  return indData.loading ? (
    <h2>Data loading</h2>
  ) : indData.error ? (
    <h2>{indData.error}</h2>
  ) : (
    <div>
      <header className="header-indicator">
        <div className="header-indi-indicator">
          <IndicatorDisplay ind={ind} />
        </div>
        <div className="header-ind-filter">
          <IndicatorFilter updateFilter={changeFilter} indicators={allIndicators.data.data} />
        </div>
      </header>
      <IndCarousel updateFilter={changeFilter} indicators={allIndicators} />
      <div className="dash-display">
        {/* {dashData.data.map(callDash)} */}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  status: state.loggedIn.data,
  indData: state.indicator,
  dashData: state.dashboard,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  fetchInd: () => {
    dispatch(fetchIndicators());
  },
  fetchDash: indicator => {
    dispatch(fetchDash(indicator));
  },
  changeIndicatorFilter: indicator => {
    dispatch(changeFilter(indicator));
  },
  isLoggedIn: () => {dispatch(checkLoggedInStatus())},
});

export default connect(mapStateToProps, mapDispatchToProps)(IndicatorsContainer);


