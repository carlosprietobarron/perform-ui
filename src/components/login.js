import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux';
import _ from 'lodash';
import { logIn, checkLoggedInStatus } from '../redux/actions';
import { Link, useHistory } from 'react-router-dom';
import LoggedInComp from './LoggedInComp';

function Login(props) {
  let history = useHistory();

  console.log("component login");
  const { login, isLoggedIn, status } = props;
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
          localStorage.setItem('token', result.token)
          setTimeout(() => {
            console.log("call history");
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

    e.preventDefault()
  }
    return (
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
    </Form>
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
