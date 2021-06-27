import {
  FETCH_MEASURES_REQUEST, FETCH_MEASURES_FAILURE, FETCH_MEASURES_SUCCESS,
  CREATE_MEASURES_REQUEST, CREATE_MEASURES_FAILURE, CREATE_MEASURES_SUCCESS,
} from '../types/measuresTypes';

const initailState = {
  loading: true,
  data: [],
  error: '',
};

const measureReducer = (state = initailState, action) => {
  switch (action.type) {
    case FETCH_MEASURES_REQUEST: return {
      ...state,
      loading: true,
    };

    case FETCH_MEASURES_SUCCESS: return {
      loading: false,
      data: action.payload,
      error: '',
    };

    case FETCH_MEASURES_FAILURE: return {
      loading: true,
      data: [],
      error: action.payload,
    };

    case CREATE_MEASURES_REQUEST: return {
      ...state,
      loading: true,
    };

    case CREATE_MEASURES_SUCCESS: return {
      loading: false,
      data: action.payload,
      error: '',
    };

    case CREATE_MEASURES_FAILURE: return {
      loading: true,
      data: [],
      error: action.payload,
    };

    default: return state;
  }
};

export default measureReducer;
