import {
  FETCH_INDICATORS_REQUEST, FETCH_INDICATORS_SUCCESS, FETCH_INDICATORS_FAILURE,
  CREATE_INDICATORS_REQUEST, CREATE_INDICATORS_SUCCESS, CREATE_INDICATORS_FAILURE,
} from '../types/IndicatorTypes';

const initailState = {
  loading: true,
  data: [],
  error: '',
};

const indicatorReducer = (state = initailState, action) => {
  switch (action.type) {
    case FETCH_INDICATORS_REQUEST: return {
      ...state,
      loading: true,
    };

    case FETCH_INDICATORS_SUCCESS: return {
      loading: false,
      data: action.payload,
      error: '',
    };

    case FETCH_INDICATORS_FAILURE: return {
      loading: true,
      data: [],
      error: action.payload,
    };

    case CREATE_INDICATORS_REQUEST: return {
      ...state,
      loading: true,
    };

    case CREATE_INDICATORS_SUCCESS: return {
      loading: false,
      data: action.payload,
      error: '',
    };

    case CREATE_INDICATORS_FAILURE: return {
      loading: true,
      data: [],
      error: action.payload,
    };

    default: return state;
  }
};

export default indicatorReducer;
