import axios from 'axios';
import {
  FETCH_MEASURES_REQUEST,
  FETCH_MEASURES_FAILURE,
  FETCH_MEASURES_SUCCESS,
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

export { fetchMeasRequest, fetchMeasSuccess, fetchMeasFailure, fetchMeasures };
