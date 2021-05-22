import React, { useState, useEffect } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import {
  fetchIndicators,
  createIndicator,
  createMeasure,
  fetchDash,
  changeFilter,
  checkLoggedInStatus,
} from "../redux/actions";
import IndModal from "../components/indModal";
import MeasModal from "../components/measModal"
import Jumbotron from "react-bootstrap/Jumbotron";
import ControlledCarousel from "../components/ControledCarousel";
import CalendarChart from "../components/CalendarChart";

function IndicatorsContainer(props) {
  const { indData, measData, fetchInd, createIndicator, createMeasure } = props;

  const [open, setOpen] = useState(false);
  const [openM, setOpenM] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const openMeModal = () => {
    setOpenM(true);
  };

  const closeMeModal = () => {
    setOpenM(false);
  };

  const renderModal = () => {
    if (!_.isEmpty(indData.data.result) && indData.data.loggedIn) {
      console.log("resturn modal open?", open);
      return (
        //<div>empty div</div>
        <IndModal
          closeModal={closeModal}
          isOpen={open}
          handleSubmit={handleSubmit}
        />
      );
    }
  };

  const renderMeModal = () => {
    if (!_.isEmpty(indData.data.result) && indData.data.loggedIn) {
      console.log("resturn modal open?", openM);
      return (
        //<div>empty div</div>
        <MeasModal
          closeModal={closeMeModal}
          isOpen={openM}
          handleSubmit={handleSubmitMe}
        />
      );
    }
  };

  const [idx, setIdx] = useState(0);

  const handleSubmit = (name, description, goal) => {
    const newIndicator = {
      name: name,
      description: description,
      goal: goal,
      image: "fields_attributes",
    };

    console.log("newIndicator", newIndicator);

    createIndicator(newIndicator);
    setTimeout(() => {
      window.location.reload(true);
    }, 1000);
  };

  const handleSubmitMe = (day, measure, comentary) => {
    const indId = indData.data.result.id;
    const newMeasure = {
      day: day,
      measure: measure,
      comentary: comentary,
      };

    console.log("newMeasure", newMeasure);

    createMeasure(newMeasure, indId) ;
    setTimeout(() => {
      window.location.reload(true);
    }, 1000);
  };

  const handleSelect = (index) => {
    console.log("index selected", index);
    setIdx(index);
  };

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
              <button className="btn auth-btn-b" onClick={openModal}>
                New Indicator
              </button>
            </div>
            <h1>INDICATORS</h1>
            <ControlledCarousel
              handleChange={handleSelect}
              indicators={indData.data.result}
            />
          </Jumbotron>
          <div className="chart-display">
            <div className="d-flex justify-content-between p-3">
              <button className="btn auth-btn-b" onClick={openMeModal}>
                New Measure
              </button>
            </div>
            <CalendarChart rawData={indData.data.result} idx={idx} />
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      {renderModal()}
      {showData()}
      {renderMeModal()}
    </div>
  );
}

const mapStateToProps = (state) => ({
  status: state.loggedIn.data,
  indData: state.indicator,
  measData: state.measure,
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
  createIndicator: (data) => {
    dispatch(createIndicator(data));
  },
  createMeasure: (data, indId) => {
    dispatch(createMeasure(data, indId));
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
