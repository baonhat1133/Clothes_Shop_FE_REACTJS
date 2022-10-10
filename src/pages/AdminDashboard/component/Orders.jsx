import React from 'react'
import "../../../assets/stylesheet/CSS/order.css"
const Orders = () => {

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
                        <th>User ID</th>
                        <th>FullName</th>
                        <th>Email</th>
                        <th>Phone_Number</th>
                        <th>Order_date</th>
                        <th>Total Money</th>
                        <th>Actions</th>
                      </tr>
                  </thead>
                <tbody>
                <tr className="title-products-table product-table-ad">
                    <td>1</td>
                    <td>Truong Nhat</td>
                    <td>bao@gmail.com</td>
                    <td>0123456789</td>
                    <td>10</td>
                    <td>5/10/2022</td>
                    <td className="btn-product-ad-orders">
                      <button type="text">Pending...</button>
                    </td>
                  </tr>
                </tbody>

                </table>
              </div>
        </div>
    </div>
  
  </div>
  )
}

export default Orders