import React from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const Navbar = ({loggedIn}) => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('token')
    setTimeout(() => {
      history.push("/");
      window.location.reload(true);
    },1000);
  }

  const showLinks = () => {
    if(loggedIn) {
      return (
        <div>
         <Link to={"/"} className="navbar-brand text-white">Indicators</Link>
         <button className="btn auth-btn-b" type="button" onClick={handleLogout}>Logout</button>
        </div>
      )
    }else{
      return (
        <div>
         {/* <Link to={"/"} className="navbar-brand text-white">Home</Link> */}
         <Link to={"/login"} className="btn auth-btn-b text-dark">Sign In</Link>
        </div>
      )
    }
  }
  
  return (
    <div>
      <nav className="navbar">
        <div className="nav-left">
          {/* <img className="nav-logo" src={logo} alt={"logo"} /> */}
          <Link to={"/"} className="navbar-brand text-white">c a p b</Link>
        </div>
        <div className="nav-right">
         {
           showLinks()
         }
        </div>
      </nav>
    </div>
  )
}

export default Navbar
