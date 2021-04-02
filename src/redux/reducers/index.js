import { combineReducers } from 'redux';
import dashboardReducer from './dashboardReducer';
import indicatorReducer from './indicatorReducer';
import measureReducer from './measureReducer';
// import recipeReducer from './recipeReducer';
 
const rootReducer = combineReducers({
  indicator: indicatorReducer,
  measure: measureReducer,
  dashboard: dashboardReducer,   
});

export default rootReducer;
