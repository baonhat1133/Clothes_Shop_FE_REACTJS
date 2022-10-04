import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
const NavBar = () => {
  let fullname= useSelector(state=>state.auth.login.currentUser);
  let username = fullname?.other.fullname
  return (
    <nav className="navbar-container">
      <NavLink end to="/" className="navbar-home"> Home </NavLink>
      {username? (
        <>
        <p className="navbar-user">Hi, <span> {username}  </span> </p>
        <NavLink to="/logout" className="navbar-logout"> Log out</NavLink>
        </>
      ) : (    
        <>
      <NavLink to="/login" className="navbar-login"> Login </NavLink>
      <NavLink to="/register" className="navbar-register"> Register</NavLink>
      </>
)}
    </nav>
  );
};

export default NavBar;
