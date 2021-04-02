import { FETCH_INDICATORS_REQUEST, FETCH_INDICATORS_FAILURE, FETCH_INDICATORS_SUCCESS } from '../types/catTypes';

const fetchIndRequest = () => ({
  type: FETCH_INDICATORS_REQUEST,
});

const fetchIndSuccess = data => ({
  type: FETCH_INDICATORS_SUCCESS,
  payload: data,
});

const fetchIndFailure = error => ({
  type: FETCH_INDICATORS_FAILURE,
  payload: error,
});

const changeFilter = key => ({
  type: 'CHANGE_FILTER',
  payload: key,
});

const fetchIndicator = () => dispatch => {
  dispatch(fetchIndRequest());

  fetch('http://localhost:3000/indicators')
    .then(response => response.json())
    .then(data => {
      dispatch(fetchIndSuccess(data.categories));
    })
    .catch(err => {
      dispatch(fetchIndFailure(err));
    });
};

export {
  fetchIndRequest, fetchIndSuccess, fetchIndFailure, fetchIndicator, changeFilter,
};
