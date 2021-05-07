import React from 'react'
import logo from '../assets/TUC_POC_image.png';
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
        <>
         <Link to={"/categories"} className="navbar-brand text-white">Indicators</Link>
         <button className="btn auth-btn-b" type="button" onClick={handleLogout}>Logout</button>
        </>
      )
    }else{
      return (
        <>
         <Link to={"/"} className="navbar-brand text-white">Home</Link>
         <Link to={"/signin"} className="btn auth-btn-b text-dark">Sign In</Link>
        </>
      )
    }
  }
  
  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <img className="nav-logo" src={logo} alt={"logo"} />
          <Link to={"/"} className="navbar-brand text-white">TUC POC</Link>
        </div>
        <div className="nav-right">
         {
           showLinks()
         }
        </div>
      </nav>
    </>
  )
}

export default Navbar
