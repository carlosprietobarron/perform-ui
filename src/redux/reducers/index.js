import { combineReducers } from 'redux';
import dashboardReducer from './dashboardReducer';
import indicatorReducer from './indicatorReducer';
import measureReducer from './measureReducer';
import loginReducer from './loginReducer'
 
const rootReducer = combineReducers({
  indicator: indicatorReducer,
  measure: measureReducer,
  dashboard: dashboardReducer,
  userlogin: loginReducer,   
});

export default rootReducer;
