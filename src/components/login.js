import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { logIn, checkLoggedInStatus } from '../redux/actions';
import { useHistory } from 'react-router-dom';

function Login(props) {
  let history = useHistory();

  console.log("component login");
  const { login, isLoggedIn } = props;
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = e => {
    const userData = {
      name: name,
      password: password,
    }

    console.log(userData);

    login(userData)
      .then(response => {
        const result = response.payload;
        console.log(response);
        if (result.status === "created") {

          setTimeout(() => {
            localStorage.setItem('token', result.token)
            history.push('/');
          }, 3000);
          isLoggedIn();
        }
        else if (result.status === 401) {
          alert(result.message)
        }
        else {
          alert('There was an error, check with admin')
        }
      }).catch(e => console.log(e))

    e.preventDefault()
  }

  const handleCallSigUp = e => {
    history.push('/signup');
  }

  return (
    <div className="container row auth-of">
      <div className="auth-col-height col-md-4 auth-bg">
      </div>
      <div className="auth-col-height bg-dark col-md-8 d-flex flex-column mb-2">
        <div className='p-3'>
          <div className="d-flex justify-content-between p-3">
            <Link to={"/signup"} className='btn auth-btn text-white'>Sign Up</Link>
          </div>
          <h1 className='text-white'>WELCOME TO LOGIN</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicInput">
              <Form.Label>User Name</Form.Label>
              <Form.Control type="text" placeholder="Enter user name" value={name} onChange={e => setName(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
            {/* <Button variant="warning" onClick={handleCallSigUp} type="button">
              Sign UP
            </Button> */}
          </Form>

        </div>

      </div>
    </div>

  )
}

const mapStateToProps = state => ({
  status: state.loggedIn,
});

const mapDispatchToProps = dispatch => ({
  login: data => dispatch(logIn(data)),
  isLoggedIn: () => dispatch(checkLoggedInStatus()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Login)
