/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import indicatorDisplay from '../components/indicatorDisplay'


function Indicators(props) {
  const {
    catData, dashData, fetchIndicator, fetcDashboard, changeIndicatorFilter,
  } = props;

  const [ind, setInd] = useState({
    strIndicator: 'Beef',
    strIndicatorName: 'Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]',
    strGoal: '20',
    strImage: 'https://www.themealdb.com/images/category/beef.png',
  });

  const returnInd = indicator => {
    setCat({
      strId: indicator.id,
      strName: indicator.name,
      strGoal: indicator.goal,
      strImage: indicator.image,
    });
  };

  const callDash = ind_id => <DashDisplay key={id} menu={menu} />;

  const result = key => indData.data.find(obj => obj.strId === key);

  const changeFilter = key => {
    changeIndicatorFilter(key);
    fetchDash(key);
    returnInd(result(key));
  };

  const allCategories = catData.data.map(x => x.strCategory);

  useEffect(() => { fetchInd(); }, []);
  useEffect(() => { fetchMenu(ind.id); }, []);

  return indData.loading ? (
    <h2>Data loading</h2>
  ) : indData.error ? (
    <h2>{indData.error}</h2>
  ) : (
    <div>
      <header className="header-menu">
        <div className="header-menu-category">
          <indicatorDisplay ind={ind} />
        </div>
        <div className="header-menu-filter">
          <IndicatorFilter updateFilter={changeFilter} indicators={allIndicators} />
        </div>
      </header>
      <div className="menu-display">
        {dashData.data.map(callMenu)}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  indData: state.indicator,
  dashData: state.dashboard,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  fetchInd: () => {
    dispatch(fetchIndicator());
  },
  fetchDash: indicator => {
    dispatch(fetchDash(indicator));
  },
  changeIndicatorFilter: indicator => {
    dispatch(changeFilter(indicator));
  },
});

export default Indicators
