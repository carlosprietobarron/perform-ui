import React, { useState, useEffect } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import {
  fetchIndicators,
  createIndicator,
  fetchDash,
  changeFilter,
  checkLoggedInStatus,
} from "../redux/actions";
import IndModal from '../components/indModal'
import Jumbotron from "react-bootstrap/Jumbotron";
import ControlledCarousel from "../components/ControledCarousel";

function IndicatorsContainer(props) {
  const {
    indData,
    fetchInd,
    createIndicator,
  } = props;

  const [open, setOpen] = useState(false);

  const openModal = () => {
    console.log("setOpen true");
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
  }

  const renderModal = () => {
    console.log("renderModal");
    console.log("indData.data",indData.data);
    console.log("loggedIn",indData.data.loggedIn);
    console.log("result",indData.data.result);
    if (!_.isEmpty(indData.data.result) && indData.data.loggedIn){
      console.log("resturn modal open?",  open);
      return (
        //<div>empty div</div>
        <IndModal closeModal={closeModal} isOpen={open} handleSubmit={handleSubmit}/>
      )
    }
  }

  const handleSubmit = (name, description, goal) => {
    console.log("data", name, description, goal);
    const newIndicator = {
      name: name,
      description:description,
      goal: goal,
      image: "fields_attributes"
    }

    console.log("newIndicator", newIndicator);
    
    createIndicator(newIndicator);
    setTimeout(() => {
     window.location.reload(true);
    }, 1000);
  }

  useEffect(() => {
    fetchInd();
  }, []);

  const showData = () => {
    
    if (!_.isEmpty(indData.data.result)) {
     
      console.log(indData.data.result);
      return (
        <div>
          <Jumbotron className="headerApp">
            <div className="d-flex justify-content-between p-3">
              <button className="btn auth-btn-b" onClick={openModal}>New Indicator</button>
            </div>
            <h1>INDICATORS</h1>
            <ControlledCarousel indicators={indData.data.result}/>
          </Jumbotron>
          <div className="chart-display">
            <h1>display chart</h1>
          </div>
        </div>
      );
    }
  };

  return (
  <div>
    {renderModal()}
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
  createIndicator: (data) =>{
    dispatch(createIndicator(data))
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
