import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "../../../assets/stylesheet/CSS/order.css"
import {getAllOrder,updateOrderAdmin} from "../../../services/productServices";
import { CreateAxios } from '../../../utils/http';
const Orders = () => {
  console.log("render")
  let btnOrder =useRef();
  const dispatch= useDispatch();
  let allOrderAdmin = useSelector(state=>state.order.getAllOrderAdmin.allOrderAdmin?.data);
  let inforAdmin = useSelector(state=>state.auth.login?.currentUser);
  console.log("aa", inforAdmin)
let toggleOrderBtn =async (e, order)=>{
  console.log(e.target.innerText)
  let {id,...rest} = order;
    if( e.target.innerText==="Pending"){
      rest.status = "Success";
      e.target.innerText="Success";
      e.target.className="btnSuccess"
    }
    else{
      rest.status = "Pending";
      e.target.innerText="Pending";
      e.target.className="btnPending"
    }
  updateOrderAdmin(order.user_id, rest, dispatch,await CreateAxios(inforAdmin, dispatch, inforAdmin?.accessToken));
}


useEffect(() =>{
  getAllOrder("All",dispatch);
},[])
  return (
    <div className="container-main">
    <div id="main" >
        <div className="head">
            <div className="left-head">
                <h1 className="title-list">Orders</h1>
            </div>  
        </div>   
        <div className="main-admin-product-order">
                
              <div className="table-list-product">
                
                <table>
                  <thead className="title-bold-prd">
                      <tr className="title-products-table head-title-products">
                        <th>ID</th>
                        <th>FullName</th>
                        <th>Email</th>
                        <th>Phone_Number</th>
                        <th>Total_Product</th>
                        <th>Total Money</th>
                        <th>Actions</th>
                      </tr>
                  </thead>
                <tbody>

                  {
                    allOrderAdmin?.map((order)=>(
                      <tr className="title-products-table product-table-ad" key={order.id}>
                          <td>{order.id}</td>
                          <td>{order.fullname}</td>
                          <td>{order.email}</td>
                          <td>{order.phone_number}</td>
                          <td>{order.total_product}</td>
                          <td>{order.total_money}</td>
                          <td className="btn-product-ad-orders">

                             {
                              order.status==="Pending"?(<button className="btnPending" onClick={e=>toggleOrderBtn(e, order)} ref={btnOrder} >Pending</button>)
                              :(<button className="btnSuccess" onClick={e=>toggleOrderBtn(e, order)} ref={btnOrder} >Success</button>)
                             } 
                            {/* <button type="text" className="btnSuccess" onClick={e=>toggleOrderBtnSS(e, order)} ref={btnSuccess}>{order.status}</button> */}
                          </td>
                      </tr>
                    ))
                  }
        
                </tbody>

                </table>
              </div>
        </div>
    </div>
  
  </div>
  )
}

export default Orders