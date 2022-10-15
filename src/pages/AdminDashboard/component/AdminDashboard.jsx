import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import "../../../assets/stylesheet/CSS/dashboard.css"
import LeftAdmin from "../../../components/Admin/LeftAdmin"
const AdminDashboard = () => {
  let navigate = useNavigate();
  let user = useSelector(state=>state.auth.login.currentUser);
 
  useEffect(() =>{
    if(!user){
      navigate("/");
    }
  },[])
  // let admin = useSelector(state=>state.admin.getAdminLogin.inforAdmin);
  // let accessToken = user?.accessToken;
  // const instance = CreateAxios(user, dispatch, loginSuccess);
  return (
    <div className="admin-dashboard">
        <LeftAdmin/>
        <Outlet/>
    </div>
  )
}

export default AdminDashboard