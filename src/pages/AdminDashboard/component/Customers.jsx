import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "../../../assets/stylesheet/CSS/customers.css"
import {getAllUser} from "../../../services/authServices";
const Customers = () => {
  const dispatch = useDispatch();
  let allUser = useSelector(state =>state.auth.getAllUser?.allUser?.data);
  console.log(allUser);
  useEffect(() =>{
    getAllUser(dispatch);
  },[])
  return (
    <div className="container-main">
    <div id="main" >
        <div className="head">
            <div className="left-head">
                <h1 className="title-list">Customers</h1>
            </div>  
        </div>   
        <div className="main-admin-product-order">
        <div className="table-list-product">
                <table>
                  <thead className="title-bold-prd">
                      <tr className="title-products-table head-title-products">
                        <th>ID</th>
                        <th>User_id</th>
                        <th>FullName</th>
                        <th>Email</th>
                        <th>Phone_number</th>
                        <th>Role</th>
                        <th>Authenticated</th>
                      </tr>
                  </thead>
                  <tbody>
                  {
                      allUser?.map((user,i)=>{
                        if(user.role_id===2){
                          return (
                            <tr className="title-products-table product-table-ad" key={user.id}>
                              <td>{i}</td>
                            <td>{user.id}</td>
                            <td>{user.fullname}</td>
                            <td>{user.email}</td>
                            <td>{user.phone_number}</td>
                            <td>User</td>
                            <td className="btn-product-ad">
                            <i class="fas fa-check"></i>
                            </td>
                          </tr>
                          )
                        }
                      })
                  }
          
     
                  </tbody>

                </table>
              </div>
        </div>
    </div>
  </div>
  )
}

export default Customers