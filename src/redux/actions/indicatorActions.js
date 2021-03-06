import axios from 'axios';
import { BASEURL } from '../apiData';
import {
  FETCH_INDICATORS_REQUEST, FETCH_INDICATORS_FAILURE, FETCH_INDICATORS_SUCCESS,
  CREATE_INDICATORS_REQUEST, CREATE_INDICATORS_FAILURE, CREATE_INDICATORS_SUCCESS,
} from '../types/IndicatorTypes';

const fetchIndRequest = () => ({
  type: FETCH_INDICATORS_REQUEST,
});

const fetchIndSuccess = (response) => ({
  type: FETCH_INDICATORS_SUCCESS,
  payload: response,
});

const fetchIndFailure = (error) => ({
  type: FETCH_INDICATORS_FAILURE,
  payload: error,
});

const fetchIndicators = () => (dispatch) => {
  const token = localStorage.getItem('token');
  dispatch(fetchIndRequest());

  return axios.get(`${BASEURL}indicators`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      dispatch(fetchIndSuccess(response.data));
    })
    .catch((err) => {
      dispatch(fetchIndFailure(err));
    });
};

const createIndRequest = () => ({
  type: CREATE_INDICATORS_REQUEST,
});

const createIndSuccess = (response) => ({
  type: CREATE_INDICATORS_SUCCESS,
  payload: response,
});

const createIndFailure = (error) => ({
  type: CREATE_INDICATORS_FAILURE,
  payload: error,
});

const createIndicator = (data) => (dispatch) => {
  const token = localStorage.getItem('token');
  dispatch(fetchIndRequest());

  return axios.post(`${BASEURL}indicators`, data, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => response.json())
    .then((response) => {
      dispatch(fetchIndSuccess(response));
    })
    .catch((err) => {
      dispatch(fetchIndFailure(err));
    });
};

export {
  fetchIndRequest, fetchIndSuccess, fetchIndFailure, fetchIndicators,
  createIndRequest, createIndSuccess, createIndFailure, createIndicator,
};
