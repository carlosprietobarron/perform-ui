import React, { useEffect } from 'react';
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import _ from 'lodash';
import { checkLoggedInStatus} from '../redux/actions'
import IndicatorsContainer from './IndicatorsContainer';
import { useHistory } from 'react-router-dom';


function AppWrapper (props) {
  const {status, isLoggedIn} = props;
  let history = useHistory();
  
  useEffect(() => {
    isLoggedIn();
    console.log("inside useeffect", status.data);
  }, []);
 
  const showData = () =>{
    console.log("status at wrapper showdata",status.data);
    console.log("is logedin", isLoggedIn);
    if (!_.isEmpty(status.data) && (status.data.loggedIn)) {
      return(
            <div>
              <IndicatorsContainer />
            </div>
            ); 
    }else if (!_.isEmpty(status.data) && (!status.data.loggedIn))
     {
       console.log("before returning to login", status.data);
       return(
         <Redirect to="/login" />
        //  <h1>PLASE LOG IN TO CONTINUE</h1>
       )
     }
  }

  return (
    <div>
      {showData()}
    </div>
  )

  }
  

  const mapStateToProps = state => ({
    status: state.loggedIn,
  });
  
  const mapDispatchToProps = dispatch => ({
    isLoggedIn: () => {dispatch(checkLoggedInStatus())},
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(AppWrapper)
