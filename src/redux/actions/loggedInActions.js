import axios from 'axios';
import { BASEURL } from '../apiData';
import { CHECK_LOGGED_IN_FAILURE, CHECK_LOGGED_IN_REQUEST, CHECK_LOGGED_IN_SUCCESS } from '../types/loggedInTypes';


export const checkLoggedInRequest = () => ({
  type: CHECK_LOGGED_IN_REQUEST,
});

export const checkLoggedInSuccess = response => ({
  type: CHECK_LOGGED_IN_SUCCESS,
  payload: response,
});
export const checkLoggedInFailure = error => ({
  type: CHECK_LOGGED_IN_FAILURE,
  payload: error,
});

export const checkLoggedInStatus = () => dispatch => {
  const token = localStorage.getItem('token')
  dispatch(checkLoggedInRequest());
  
  return axios.get(`${BASEURL}auto_login`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }
  })
    .then(response => dispatch(checkLoggedInSuccess(response.data)))
    .catch(error => dispatch(checkLoggedInFailure(error.message)));
};