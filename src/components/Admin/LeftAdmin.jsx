import React from 'react'
import { NavLink } from 'react-router-dom'
import "../../assets/stylesheet/CSS/dashboard.css"
const LeftAdmin = () => {
  return (
    <div>
            <div className="leftbox" id="myLeftBox">
            <div className="logo-Web">
                    <div className="img-shop">
                        <a href="#"><i className="fas fa-tshirt" style={{color: "yellow"}} >&ensp; 
                        </i><span style={{color:"#fff",padding:"0 3px", textShadow: "0.5px 0.5px",boxSizing: "border-box"}}>BNShop</span></a>
                   </div>
                   <div class="line-logo"></div>
            </div>
            <div className="list-txt">
                <NavLink to="/admin/dashboard" className="itemleft clickItem1 clickItem">
                    <i className="far fa-chart-bar" ></i>Dashboard </NavLink>
                <NavLink to="/admin/Product" className="itemleft clickItem5">
                    <i class="far fa-tshirt"></i>Product</NavLink>
                <NavLink to="/admin/orders" className="itemleft clickItem4">
                    <i className="fas fa-user-alt"></i>Orders</NavLink>
                <NavLink to="/admin/customers" className="itemleft clickItem2">
                    <i className="fa fa-users"  style={{fontSize: "25px"}}></i>Customers</NavLink>
                <NavLink to="/admin/logout" className="itemleft clickItem5">
                    <i className="fas fa-sign-out-alt" id="signout"></i>Logout</NavLink>
            </div>
           
        </div>

    </div>
  )
}

export default LeftAdmin