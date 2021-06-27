/* eslint-disable max-len, react/prop-types, no-restricted-globals */
import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
// import { Redirect } from 'react-router-dom'
import React from 'react';
import Login from './components/login';
import SignUp from './components/SignUp';
import AppWrapper from './containers/AppWrapper';
// import IndicatorsContainer from './containers/IndicatorsContainer';
// import AppWrapper from  './containers/AppWrapper'

function App() {
  // const { alert } = this.props;
  return (

    <div id="app-caontainer " className="row">
      <div id="col12-displaycomp" className="col-sm-12">
        <Router history={history}>
          <div>
            <Switch>
              <Route exact path="/" component={AppWrapper} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
            </Switch>
          </div>
        </Router>
      </div>
    </div>

  );
}

export default App;

/* eslint-enable max-len, react/prop-types, no-restricted-globals */
