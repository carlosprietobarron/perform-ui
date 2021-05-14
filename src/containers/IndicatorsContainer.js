import React, { useState, useEffect } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import {
  fetchIndicators,
  fetchDash,
  changeFilter,
  checkLoggedInStatus,
} from "../redux/actions";
import Jumbotron from "react-bootstrap/Jumbotron";
import ControlledCarousel from "../components/ControledCarousel"


function IndicatorsContainer(props) {
  const {
    indData,
    fetchInd,
  } = props;

  
  useEffect(() => {
    fetchInd();
  }, []);

  const showData = () => {
    
    if (!_.isEmpty(indData.data.result)) {
     
      console.log(indData.data.result);
      return (
        <div>
          <Jumbotron className="headerApp">
            <h1>INDICATORS</h1>
            <ControlledCarousel indicators={indData.data.result}/>
          </Jumbotron>
        </div>
      );
    }
  };

  return (
  <div>
    {showData()}
  </div>);
  }

const mapStateToProps = (state) => ({
  status: state.loggedIn.data,
  indData: state.indicator,
  dashData: state.dashboard,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  fetchInd: () => {
    dispatch(fetchIndicators());
  },
  fetchDash: (indicator) => {
    dispatch(fetchDash(indicator));
  },
  changeIndicatorFilter: (indicator) => {
    dispatch(changeFilter(indicator));
  },
  isLoggedIn: () => {
    dispatch(checkLoggedInStatus());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndicatorsContainer);
