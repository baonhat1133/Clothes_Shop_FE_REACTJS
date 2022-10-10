import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
const NavBar = () => {
  return (
    <div className="navbar-container">
      <div clasName="nav-link">
          <NavLink end to="/"> Trang Chủ / </NavLink>
          <NavLink to="/cart"> Giỏ hàng</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
