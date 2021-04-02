import { FETCH_INDICATORS_REQUEST, FETCH_INDICATORS_FAILURE, FETCH_INDICATORS_SUCCESS } from '../types/IndicatorTypes';

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

    default: return state;
  }
};

export default indicatorReducer;
