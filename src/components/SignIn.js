import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { logIn, checkLoggedInStatus } from '../redux';
import LoggedInComp from './LoggedInComp';

const SignIn = ({
  status, history, login, isLoggedIn,
}) => {
  useEffect(() => {
    isLoggedIn();
  }, [isLoggedIn]);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    const userData = {
      username,
      password,
    };

    login(userData)
      .then((response) => {
        const result = response.payload;
        if (result.status === 201) {
          localStorage.setItem('token', result.token);
          setTimeout(() => {
            history.push('/');
          }, 2000);
        } else if (result.status === 401) {
          alert(result.message);
        } else {
          alert('There was an error, check with admin');
        }
      });

    e.preventDefault();
  };

  const showData = () => {
    if (!_.isEmpty(status.data) && status.data.loggedIn) {
      return (
        <>
          <LoggedInComp username={status.data.user.username} />
        </>
      );
    }
    if (!_.isEmpty(status.data) && !status.data.loggedIn) {
      return (
        <>
          <div className="row auth-of">
            <div className="auth-col-height col-md-4 auth-bg" />
            <div className="auth-col-height bg-dark col-md-8 d-flex flex-column">
              <div className="d-flex justify-content-between p-5">
                <Link to="/signup" className="btn auth-btn text-white">Sign Up</Link>
              </div>
              <div className="row p-5">
                <div className="col-md-5 text-center">
                  <h1 className="text-white">
                    WELCOME
                    <br />
                    {' '}
                    TO
                    <br />
                    {' '}
                    LOGIN
                  </h1>
                </div>
                <div className="col-md-7">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="username" className="custom-font-b text-white p-2">
                        Username
                      </label>
                      <input className="form-control" type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password" className="w-50 custom-font-b text-white p-2">
                        Password
                      </label>
                      <input className="form-control" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button className="btn btn-success mt-3 text-dark auth-btn-b" type="submit">Sign In</button>
                    <button className="btn btn-success mt-3 text-dark auth-btn-b" type="submit">Sign Up</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <>
      {
        showData()
      }
    </>
  );
};

const mapStateToProps = (state) => ({
  status: state.loggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  login: (data) => dispatch(logIn(data)),
  isLoggedIn: () => dispatch(checkLoggedInStatus()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
