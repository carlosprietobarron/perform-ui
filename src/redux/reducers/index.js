import { combineReducers } from 'redux';
import dashboardReducer from './dashboardReducer';
import indicatorReducer from './indicatorReducer';
import measureReducer from './measureReducer';
import loggedInReducer from './loggedInReducer'

const rootReducer = combineReducers({
  indicator: indicatorReducer,
  measure: measureReducer,
  dashboard: dashboardReducer,
  loggedIn: loggedInReducer, 
});

export default rootReducer;
