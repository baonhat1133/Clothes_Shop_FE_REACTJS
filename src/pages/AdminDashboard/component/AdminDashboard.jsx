import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import "../../../assets/stylesheet/CSS/dashboard.css"
import LeftAdmin from "../../../components/Admin/LeftAdmin"
import { loginAdmin } from '../../../services/authServices'
import {CreateAxios} from "../../../utils/http"
import { loginSuccess } from '../../../redux/authSlice'
const AdminDashboard = () => {
  // let dispatch = useDispatch();
  // let navigate = useNavigate();
  // let user = useSelector(state=>state.auth.login.currentUser);
  // let admin = useSelector(state=>state.admin.getAdminLogin.inforAdmin);
  // let accessToken = user?.accessToken;
  // const instance = CreateAxios(user, dispatch, loginSuccess);
  // useEffect(()=>{
  //   if (!user ||!user.accessToken) {
  //     return navigate("/");
  //   }
  //   // setInterval(()=>{
  //     loginAdmin(accessToken, dispatch,navigate, instance);
  //   // },5000)
  // },[])
  return (
    <div className="admin-dashboard">
        <LeftAdmin/>
        <Outlet/>
    </div>
  )
}

export default AdminDashboard