import {LOGIN_SUCCESS, LOGIN_FAILURE, FORM_SUBMITION, ADD_USER_SUCCESS} from '../types/loginTypes'

const initailState = {
    loading: true,
    data: [],
    error: '',
  };
  
  const loginReducer = (state = initailState, action) => {
    switch (action.type) {
      case FORM_SUBMITION: return {
        ...state,
        loading: true,
      };
  
      case LOGIN_SUCCESS: return {
        loading: false,
        data: action.payload,
        error: '',
      };

      case LOGIN_FAILURE: return {
        loading: true,
        data: [],
        error: action.payload,
      };
  
      default: return state;
    }
  };
  
  export default loginReducer;
  