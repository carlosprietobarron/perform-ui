import React, { Component } from 'react';

import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (isAuth, Component, ...rest) => (
  <div />
);

export default PrivateRoute;
