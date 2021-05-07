import React from 'react'
// import { Redirect } from 'react-router-dom'
class AppWrapper extends Component{
    render(){
  
    // if(/*not login*/)
    //   return <Redirect to="/login" />
  
     return(
       <div>
         App wrapper
         <Route path='/Indicators' component={Indicators} />
       </div>
     );
    }
  }
  
export default AppWrapper
