import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import React, { useState } from 'react';
import Login from './components/login'
import Indicators from './containers/Indicators'
// import AppWrapper from  './containers/AppWrapper'

function App(props) {

  console.log(`props ${props}`);
  console.log(props);
  const [user, setUser] = useState({
    email: "test@testing.edu",
    password: "123456",
    signed_in: true
  })

  const signin_hdl = user => {
    setUser({
      ...user,
      signed_in: !user.signed_in})
  }
  if (user.signed_in) {
    console.log("user signed");
  }
  return (
    <div className="App">
      <div className="top-header">
        <h1>navbar and login</h1>
      </div>
      <Switch> 
        <Route exact path="/login" component={Login} />
        <Route path="/indicators" component={Indicators} />
     </Switch>
    </div>
  );
}

export default App;