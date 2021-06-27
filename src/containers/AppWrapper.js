/* eslint-disable max-len, react/prop-types, no-alert */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import _ from 'lodash';
import { checkLoggedInStatus } from '../redux/actions';
import IndicatorsContainer from './IndicatorsContainer';

function AppWrapper(props) {
  const { status, isLoggedIn } = props;

  useEffect(() => {
    isLoggedIn();
  }, []);

  const showData = () => {
    if (!_.isEmpty(status.data) && (status.data.loggedIn)) {
      return (
        <div>
          <IndicatorsContainer />
        </div>
      );
    } if (!_.isEmpty(status.data) && (!status.data.loggedIn)) {
      return (
        <Redirect to="/login" />
      //  <h1>PLASE LOG IN TO CONTINUE</h1>
      );
    }
    return '';
  };

  return (
    <div>
      {showData()}
    </div>
  );
}

const mapStateToProps = (state) => ({
  status: state.loggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  isLoggedIn: () => { dispatch(checkLoggedInStatus()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(AppWrapper);

/* eslint-enable max-len, react/prop-types, no-alert */
