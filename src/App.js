import './App.css';
import { Route, Switch, history } from 'react-router-dom';
//import { Redirect } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import Login from './components/login';
import SignUp from './components/SignUp';
import AppWrapper from './containers/AppWrapper';
import IndicatorsContainer from './containers/IndicatorsContainer';
// import AppWrapper from  './containers/AppWrapper'

function App(props) {

   
    //const { alert } = this.props;
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="col-sm-8 col-sm-offset-2">
            {/* <Router history={history}> */}
              <div className="container">
                <Switch>
                  <Route exact path="/" component={AppWrapper} />
                  {/* <Route exact path="/Indicators" component={IndicatorsContainer} /> */}
                  <Route path="/login" component={Login} />
                  <Route path="/signup" component={SignUp} />
                </Switch>
              </div>
            {/* </Router> */}
          </div>
        </div>
      </div>
    );
  };

export default App