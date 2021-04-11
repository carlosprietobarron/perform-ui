import { FETCH_DASHBOARD_REQUEST, FETCH_DASHBOARD_FAILURE, FETCH_DASHBOARD_SUCCESS } from '../types/IndicatorTypes';

const initailState = {
  loading: true,
  data: [],
  error: '',
};

const dashboardReducer = (state = initailState, action) => {
  switch (action.type) {
    case FETCH_DASHBOARD_REQUEST: return {
      ...state,
      loading: true,
    };

    case FETCH_DASHBOARD_SUCCESS: return {
      loading: false,
      data: action.payload,
      error: '',
    };

    case FETCH_DASHBOARD_FAILURE: return {
      loading: true,
      data: [],
      error: action.payload,
    };

    default: return state;
  }
};

export default dashboardReducer;
