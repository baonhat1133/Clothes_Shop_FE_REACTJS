import React from 'react'
import "../../../assets/stylesheet/CSS/customers.css"
const Customers = () => {
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
                        <th>FullName</th>
                        <th>Email</th>
                        <th>Phone_number</th>
                        <th>Authenticated</th>
                      </tr>
                  </thead>
                  <tbody>

                      <tr className="title-products-table product-table-ad">
                      <td>ád</td>
                      <td>ádda</td>
                      <td>àwafdf</td>
                      <td>ăfdsđ</td>
                      <td className="btn-product-ad">
                      <i class="fas fa-check"></i>
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

export default Customers