import { FETCH_MEASURES_REQUEST, FETCH_MEASURES_FAILURE, FETCH_MEASURES_SUCCESS } from '../types/measuresTypes';

const fetchMeasRequest = () => ({
  type: FETCH_MEASURES_REQUEST,
});

const fetchMeasSuccess = data => ({
  type: FETCH_MEASURES_SUCCESS,
  payload: data,
});

const fetchMeasFailure = error => ({
  type: FETCH_MEASURES_FAILURE,
  payload: error,
});

const fetchMeasures = () => dispatch => {
  dispatch(fetchMeasRequest());

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ indictor_id: '1', measure: '10', day: '04-30-2021' })
};

  fetch('http://localhost:3000/measures')
    .then(response => response.json())
    .then(data => {
      dispatch(fetchMeasSuccess(data.MEASURES));
    })
    .catch(err => {
      dispatch(fetchMeasFailure(err));
    });
};

export {
  fetchMeasRequest, fetchMeasSuccess, fetchMeasFailure, fetchMeasures, 
};
