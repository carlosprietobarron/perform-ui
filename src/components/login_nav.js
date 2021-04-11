import React from 'react'

function login_nav() {
    
        return(
          <div>
          <nav class="navbar navbar-default">
           <div class="container-fluid">
           <ul class="nav navbar-nav">
            <li><Link to={Login}>Login</Link></li>
            <li><Link to={Login}>SignUp</Link></li>
          </ul>
          </div>
          </nav>
      
          </div>
         );
}

export default login_nav
