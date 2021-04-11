import {LOGIN_SUCCESS, ADD_USER_SUCCESS, FORM_SUBMITION, LOGIN_FAILURE} from '../types/loginTypes'

const formSubmition = () => ({
  type: FORM_SUBMITION,
});

const loginSuccess = data => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

const addUserSuccess = data => ({
    type: ADD_USER_SUCCESS,
    payload: data,
  });

const loginFailure = error => ({
  type: LOGIN_FAILURE,
  payload: error,
});

const loginRequest = user => dispatch => {
  dispatch(formSubmition());

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ indictor_id: '1', measure: '10', day: '04-30-2021' })
};

  fetch(`http://localhost:3000/users/login?email=${user.id}&password=${user.id}`)
    .then(response => response.json())
    .then(data => {
      dispatch(loginSuccess(data.MEASURES));
    })
    .catch(err => {
      dispatch(loginFailure(err));
    });
};

const signUpRequest = user => dispatch => {
  dispatch(formSubmition());

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: user.name, email: user.email, password: user.password })
};

  fetch(`http://localhost:3000/users/login?email=${user.id}&password=${user.id}`)
    .then(response => response.json())
    .then(data => {
      dispatch(ADD_USER_SUCCESS(data.MEASURES));
    })
    .catch(err => {
      dispatch(loginFailure(err));
    });
};

export {
  formSubmition, loginSuccess, loginRequest, loginFailure, addUserSuccess
};
