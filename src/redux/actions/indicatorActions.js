import axios from 'axios'
import { FETCH_INDICATORS_REQUEST, FETCH_INDICATORS_FAILURE, FETCH_INDICATORS_SUCCESS,
          CREATE_INDICATORS_REQUEST, CREATE_INDICATORS_FAILURE, CREATE_INDICATORS_SUCCESS } from '../types/IndicatorTypes';

const fetchIndRequest = () => ({
  type: FETCH_INDICATORS_REQUEST,
});

const fetchIndSuccess = response => ({
  type: FETCH_INDICATORS_SUCCESS,
  payload: response,
});

const fetchIndFailure = error => ({
  type: FETCH_INDICATORS_FAILURE,
  payload: error,
});

const changeFilter = key => ({
  type: 'CHANGE_FILTER',
  payload: key,
});

const fetchIndicators = () => dispatch => {
  console.log("calling indicators fetch");
  const token = localStorage.getItem('token');
  dispatch(fetchIndRequest());

  return axios.get('http://localhost:3000/indicators', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }
  })
    .then(response => response.json())
    .then(response => {
      console.log("data returned");
      
      dispatch(fetchIndSuccess(response));
    })
    .catch(err => {
      dispatch(fetchIndFailure(err));
    });
};


const createIndRequest = () => ({
  type: CREATE_INDICATORS_REQUEST,
});

const createIndSuccess = response => ({
  type: CREATE_INDICATORS_SUCCESS,
  payload: response,
});

const createIndFailure = error => ({
  type: CREATE_INDICATORS_FAILURE,
  payload: error,
});

const createIndicators = (data) => dispatch => {
  console.log("calling indicators create");
  const token = localStorage.getItem('token')
  dispatch(fetchIndRequest());

  return axios.post('http://localhost:3000/indicators', data, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }
  }).then(response => response.json())
    .then(response => {
      console.log("data returned");
      
      dispatch(fetchIndSuccess(response));
    })
    .catch(err => {
      dispatch(fetchIndFailure(err));
    });
};

export {
  fetchIndRequest, fetchIndSuccess, fetchIndFailure, fetchIndicators, changeFilter,
  createIndRequest, createIndSuccess, createIndFailure, createIndicators,
};
