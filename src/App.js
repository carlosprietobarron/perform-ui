import './App.css';
import { Route, Switch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function App() {
  const [user, setUser] = useState({
    email: "test@testing.edu",
    password: "123456",
    signed_in: true
  })

  const signin_hdl = user => {
    setUser({signed_in: !signed_in})
  }

  return (
    <div className="App">
      <div className="top-header">
        <h1>navbar and login</h1>
      </div>
      <Switch> 
      <Route
        exact
        path="/"
        render={() => {
        return (
            user.signed_in ?
            <Redirect to="/indicators" /> :
            <Redirect to="/login" /> 
        )
      }}
       />
       <Route exact path="/login" component={Login} />
       <Route path="/indicators" component={AppWrapper} />
     </Switch>
    </div>
  );
}

export default App;