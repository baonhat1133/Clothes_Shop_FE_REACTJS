import React, { useEffect } from 'react'
import "../../../assets/stylesheet/CSS/dashboard.css"
import {getAllUser} from "../../../services/authServices";
import {getAllOrder} from "../../../services/productServices";
import {useDispatch, useSelector} from "react-redux"
const Dashboard = () => {
    const dispatch = useDispatch();
    let allUser = useSelector(state =>state.auth.getAllUser?.allUser?.data);
    let allOrder = useSelector(state => state.order.getAllOrderAdmin?.allOrderAdmin?.data);
    let total_success=0;
    let total_pending=0;
    let total_order=0;
    allOrder?.map((order)=>{
        total_order++;
        if(order.status==="Pending"){
            total_pending++;
        }
        if(order.status==="Success"){
            total_success++;
        }
    })
    useEffect(() =>{
        getAllUser(dispatch);
        getAllOrder("All", dispatch);
    },[])
  return (
    <div className="container-main">
    <div id="main" >
        <div className="head">
            <div className="left-head">
                <h1 className="title-list">Dashboard</h1>
            </div>  
                  
        </div>
        <div className="line1"></div>
        <br/>
        <div className="head-bottom">

                <div className="box">
                    <div className="content-box">
                        <p>{allUser?.length}<br/><span>Users</span></p>
                    <i className="fa fa-users box-icon"></i>
                    </div>
                </div>
                <div className="box">
                    <div className="content-box">
                        <p>{total_success}<br/><span>Success</span></p>
                        <i className="fa fa-list box-icon"></i>
                    </div>
                
                </div>

                <div className="box">
                    <div className="content-box">
                        <p>{total_pending}<br/><span>Pending</span></p>
                        <i className="fa fa-shopping-bag box-icon"></i>
                    </div>  
                </div>
                <div className="box">
                    <div className="content-box">
                        <p>{total_order}<br/>Total Order<span></span></p>
                    <i className="fa fa-tasks box-icon" ></i>
                    </div>
                    
                </div>
                
             </div>
        </div>
   

    <div className="line"></div>
        <div  id="footer">
            <div className="chart1">
                    
                    <h3>ANALYSIS CHART</h3>
                    <div className="note">
                        <div className="green">
                            <div className="cirgreen">

                            </div>
                            <h4>Orders Success</h4>
                        </div>
                        <div className="red">
                            <div className="cirred">

                            </div>
                            <h4>Orders Pending</h4>
                        </div>

                    </div>
                    <div className="all">
                        
                        <div className="circle-wrap">
                            <div className="circle">
                                    <div className="mask full-1">
                                    <div className="fill-1"></div>
                                    </div>
                                    <div className="mask half">
                                    <div className="fill-1"></div>
                                    </div>
                                    <div className="inside-circle"> {Math.round((total_success/total_order)*100)}% </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="chart2">
               <div className="charttop">
                    <table className="box-topU">
                        <div className="txt-topU">
                           <p>TOP ORDER USER</p>
                        </div>
                        <tr className="title-topU">
                            <th className="chart2U">User Name</th>
                            <th>Total Product </th>
                        </tr>
                        {
                            allOrder?.map((order)=>(
                                <tr>
                                    <td>{order.fullname}</td>
                                    <td>{order.total_product}</td>
                                </tr>
                            ))
                        }
                    </table>
                    {/* <table className="list-top-user">
                        
                    </table> */}
               </div>
                    
            </div>
          
            
        </div>
</div>
  )
}

export default Dashboard