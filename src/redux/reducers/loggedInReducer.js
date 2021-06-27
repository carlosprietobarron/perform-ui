import { CHECK_LOGGED_IN_FAILURE, CHECK_LOGGED_IN_REQUEST, CHECK_LOGGED_IN_SUCCESS } from '../types/loggedInTypes';

const initialState = {
  loading: true,
  data: [],
  errorMsg: '',
};

const loggedInReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_LOGGED_IN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CHECK_LOGGED_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        errorMsg: '',
      };
    case CHECK_LOGGED_IN_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};

export default loggedInReducer;
