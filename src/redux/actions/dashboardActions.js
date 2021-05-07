import { FETCH_DASHBOARD_REQUEST, FETCH_DASHBOARD_FAILURE, FETCH_DASHBOARD_SUCCESS } from '../types/dashboardTypes';

const fetchDashRequest = () => ({
  type: FETCH_DASHBOARD_REQUEST,
});

const fetchDashSuccess = data => ({
  type: FETCH_DASHBOARD_SUCCESS,
  payload: data,
});

const fetchDashFailure = error => ({
  type: FETCH_DASHBOARD_FAILURE,
  payload: error,
});

const fetchDash = indicator => dispatch => {
  dispatch(fetchDashRequest());
  console.log("fetchdash request");
  fetch('http://localhost:3000/indicators/1/measures')
    .then(response => response.json())
    .then(data => {
      dispatch(fetchDashSuccess(data));
    })
    .catch(err => {
      dispatch(fetchDashFailure(err));
    });
};

export {
  fetchDashRequest, fetchDashSuccess, fetchDashFailure, fetchDash,
};
