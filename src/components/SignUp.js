import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import _ from 'lodash';
import { createUser, checkLoggedInStatus } from '../redux/actions/';
import { Link } from 'react-router-dom';
import LoggedInComp from './LoggedInComp';

const SignUp = ({ status, history, isLoggedIn, createUser }) => {

  useEffect(() => {
    isLoggedIn();
  }, [isLoggedIn]);

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")

  const handleSubmit = event => {
    const userData = {
      name: username,
      email: email,
      password: password,
      password_confirmation: passwordConfirmation
    }
    createUser(userData)
      .then(response => {
        const result = response.payload
        if (result.status === 201) {
          localStorage.setItem('token', result.token)
          setTimeout(() => {
            history.push('/');
          }, 2000);
        }
        else if (result.status === 401) {
          alert(result.message)
        }
        else {
          alert('There was an error, check with admin')
        }
      }).catch(e => console.log(e))
    event.preventDefault()
  }

  const showData = () => {
    if (!_.isEmpty(status.data) && status.data.loggedIn) {
      return (
        <div>
          <LoggedInComp username={status.data.user.username} />
        </div>
      );
    }
    if (!_.isEmpty(status.data) && !status.data.loggedIn) {
      return (
        <div>
          <div className="row auth-of">
            <div className="auth-col-height col-md-4 auth-bg">
            </div>
            <div className="auth-col-height bg-dark col-md-8 d-flex flex-column">
              <div className="d-flex justify-content-between p-3">
                <Link to={"/login"} className='btn auth-btn text-white'>Sign In</Link>
              </div>
              <div className='p-3'>
                <h1 className='text-white'>WELCOME TO SIGN UP</h1>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="username" className="custom-font-b text-white p-2">
                      Username
                </label>
                    <input className="form-control" type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="custom-font-b text-white p-2">
                      Email
                </label>
                    <input className="form-control" type="text" name="email" value={email} onChange={e => setEmail(e.target.value)} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="w-50 custom-font-b text-white p-2">
                      Password
                </label>
                    <input className="form-control" type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} required />
                    <small id="passwordHelpBlock" className="form-text text-white">
                      Your password must be 6-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password_confirmation" className="w-50 custom-font-b text-white p-2">
                      Password confirmation
                 </label>
                    <input className="form-control" type="password" name="password_confirmation" value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)} required />
                  </div>
                  <button className="btn btn-success mt-3 text-dark auth-btn-b" type="submit">Sign Up</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  return (
    <div>
      {
        showData()
      }
    </div>
  )
}

const mapStateToProps = state => ({
  status: state.loggedIn,
});

const mapDispatchToProps = dispatch => ({
  createUser: data => dispatch(createUser(data)),
  isLoggedIn: () => dispatch(checkLoggedInStatus()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
