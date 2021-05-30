import React, { useEffect } from 'react';
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import _ from 'lodash';
import { checkLoggedInStatus} from '../redux/actions'
import IndicatorsContainer from './IndicatorsContainer';

function AppWrapper (props) {
  // let history = useHistory();
  //console.log(props);
  const {status, isLoggedIn} = props;
  
  //const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    isLoggedIn();
    
  }, [isLoggedIn]);
  
  const showData = () =>{
    if (!_.isEmpty(status.data.data) && (status.data.data.loggedIn)) {
      console.log(status.data.data); 
      return(
            <div>
              <IndicatorsContainer />
            </div>
            ); 
    }else if (!_.isEmpty(status.data.data) && (!status.data.data.loggedIn))
     {
      console.log(status.data.data); 
       return(
         <Redirect to="/login" />
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
