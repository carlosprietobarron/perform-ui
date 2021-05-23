import axios from 'axios';
import {
  FETCH_MEASURES_REQUEST,
  FETCH_MEASURES_FAILURE,
  FETCH_MEASURES_SUCCESS,
  CREATE_MEASURES_REQUEST,
  CREATE_MEASURES_FAILURE,
  CREATE_MEASURES_SUCCESS,
} from "../types/measuresTypes";

const fetchMeasRequest = () => ({
  type: FETCH_MEASURES_REQUEST,
});

const fetchMeasSuccess = (response) => ({
  type: FETCH_MEASURES_SUCCESS,
  payload: response,
});

const fetchMeasFailure = (error) => ({
  type: FETCH_MEASURES_FAILURE,
  payload: error,
});

const fetchMeasures = () => (dispatch) => {
  console.log("calling measures fetch");
  dispatch(fetchMeasRequest());
  const token = localStorage.getItem('token');
  return axios
    .get("http://localhost:3000/indicators", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response.json())
    .then((response) => {
      console.log("data returned");

      dispatch(fetchMeasSuccess(response));
    })
    .catch((err) => {
      dispatch(fetchMeasFailure(err));
    });
};

const createMeasRequest = () => ({
  type: CREATE_MEASURES_REQUEST,
});

const createMeasSuccess = response => ({
  type: CREATE_MEASURES_SUCCESS,
  payload: response,
});

const createMeasFailure = error => ({
  type: CREATE_MEASURES_FAILURE,
  payload: error,
});

const createMeasure = (data, indId) => dispatch => {
  alert(`http://localhost:3000/indicators/${indId}/measures`);
  const token = localStorage.getItem('token')
  dispatch(fetchMeasRequest());

  return axios.post(`http://localhost:3000/indicators/${indId}/measures`, data, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }
  }).then(response => response.json())
    .then(response => {
      console.log("data returned");
      
      dispatch(fetchMeasSuccess(response));
    })
    .catch(err => {
      dispatch(fetchMeasFailure(err));
    });
};

export { fetchMeasRequest, fetchMeasSuccess, fetchMeasFailure, fetchMeasures,
  createMeasRequest, createMeasSuccess, createMeasFailure, createMeasure };
