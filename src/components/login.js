/* eslint-disable max-len, react/prop-types, no-alert */
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { logIn, checkLoggedInStatus } from '../redux/actions';

function Login(props) {
  const history = useHistory();

  const { login, isLoggedIn } = props;
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    const userData = {
      name,
      password,
    };

    login(userData)
      .then((response) => {
        const result = response.payload;

        if (result.status === 'created') {
          localStorage.setItem('token', result.token);
          isLoggedIn().then(() => {
            history.push('/');
          });
        } else if (result.status === 401) {
          alert(result.message);
        } else {
          alert('There was an error, check with admin');
        }
      });

    e.preventDefault();
  };

  // const handleCallSigUp = (e) => {
  //   history.push('/signup');
  // };

  return (
    <div>
      <div />
      <div>
        <div className="signing-form">
          <div className="signing-form-header">
            <Link to="/signup" className="btn auth-btn text-white">Please Sign Up</Link>
          </div>
          <div className="form-div">
            <h1 className="text-black">WELCOME TO LOGIN</h1>
            <Form onSubmit={handleSubmit}>

              <Form.Group controlId="formBasicInput">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" placeholder="Enter user name" value={name} onChange={(e) => setName(e.target.value)} />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>

            </Form>
          </div>
        </div>
      </div>
    </div>

  );
}

const mapStateToProps = (state) => ({
  status: state.loggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  login: (data) => dispatch(logIn(data)),
  isLoggedIn: () => dispatch(checkLoggedInStatus()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

/* eslint-enable max-len, react/prop-types, no-alert */
