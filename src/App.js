import './App.css';
import { Route, Switch, history } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import React, { useState } from 'react';
import Login from './components/login'
import IndicatorsContainer from './containers/IndicatorsContainer'
// import AppWrapper from  './containers/AppWrapper'

function App(props) {

  render() {
    //const { alert } = this.props;
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="col-sm-8 col-sm-offset-2">
            {/* <Router history={history}> */}
              <div>
                <switch>
                  <PrivateRoute exact path="/" component={IndicatorsContainer} />
                  <Route path="/login" component={LoginPage} />
                  <Route path="/signup" component={SignUp} />
                </switch>
              </div>
            {/* </Router> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;