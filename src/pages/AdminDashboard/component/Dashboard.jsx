import React from 'react'
import "../../../assets/stylesheet/CSS/dashboard.css"
const Dashboard = () => {
  return (
    <div className="container-main">
    <div id="main" >
        <div className="head">
            <div className="left-head">
                <h1 className="title-list">Dashboard</h1>
            </div>  
            
{/*          <!--      <div className="item-user">
                    <i className="far fa-user-circle"></i>
                </div>
            --> */}
            
        </div>
        <div className="line1"></div>
        <br/>
        <div className="head-bottom">

                <div className="box">
                    <div className="content-box">
                        <p>100<br/><span>Users</span></p>
                    <i className="fa fa-users box-icon"></i>
                    </div>
                </div>
                <div className="box">
                    <div className="content-box">
                        <p>88<br/><span>Success</span></p>
                        <i className="fa fa-list box-icon"></i>
                    </div>
                
                </div>

                <div className="box">
                    <div className="content-box">
                        <p>12<br/><span>Pending</span></p>
                        <i className="fa fa-shopping-bag box-icon"></i>
                    </div>  
                </div>
                <div className="box">
                    <div className="content-box">
                        <p>4<br/>Total Order<span></span></p>
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
                                    <div className="inside-circle"> 65% </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="chart2">
               <div className="charttop">
                    <table className="box-topU">
                        <tr className="txt-topU">
                            <th>USERS</th>
                        </tr>
                        <tr className="title-topU">
                            <td className="chart2U">User Name</td>
                            <td>Total Client</td>
                        </tr>
                    </table>
                    <table className="list-top-user">
                      
                    </table>
               </div>
                    
            </div>
          
            
        </div>
</div>
  )
}

export default Dashboard