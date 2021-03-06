/* eslint-disable max-len, react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const LoggedInComp = ({ username }) => (
  <div>
    <div className="text-center p-5">
      <i className="fas fa-lock-open fa-4x text-white" />
      <h1 className="text-white">
        You are Already Logged In @
        {username}
        !!!
      </h1>
      <h5 className="text-white"><Link className="no-deco" to="/"><u>Go Home</u></Link></h5>
    </div>
  </div>
);

export default LoggedInComp;

/* eslint-enable max-len, react/prop-types */
