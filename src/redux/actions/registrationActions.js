/* eslint-disable max-len */
import axios from 'axios';
import { BASEURL } from '../apiData';
import { CREATE_USER_FAILURE, CREATE_USER_REQUEST, CREATE_USER_SUCCESS } from '../types/registrationTypes';

export const createUserRequest = () => ({
  type: CREATE_USER_REQUEST,
});

export const createUserSuccess = (response) => ({
  type: CREATE_USER_SUCCESS,
  payload: response,
});

export const createUserFailure = (error) => ({
  type: CREATE_USER_FAILURE,
  payload: error,
});

export const createUser = (data) => (dispatch) => {
  dispatch(createUserRequest());
  return axios.post(`${BASEURL}users`, data)
    .then((response) => dispatch(createUserSuccess(response.data))).catch((error) => dispatch(createUserFailure(error)));
};

/* eslint-enable max-len */
