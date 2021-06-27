import React from 'react';

function login_nav() {
  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            <li><Link to={Login}>Login</Link></li>
            <li><Link to={Login}>SignUp</Link></li>
          </ul>
        </div>
      </nav>

    </div>
  );
}

export default login_nav;
