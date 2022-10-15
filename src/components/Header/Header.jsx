import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "../../assets/stylesheet/CSS/style.css"
import NavBar from "../NavBar/NavBar"
import { useDispatch, useSelector } from 'react-redux'
import {logoutAcc} from "../../services/authServices";
import {CreateAxios} from "../../utils/http";
const Header = () => {
    let dispatch = useDispatch();
    const listProductCart = useSelector((state) =>state.cart.addToCart.selectProduct);
    const inforUser = useSelector((state) => state.auth.login.currentUser);
    let user=inforUser?.other;
    let accessTokenUser = inforUser?.accessToken;
    let username= user?.email.split("@")[0];
    let amount= listProductCart?.length;
    let logoutAccount=async ()=>{
        logoutAcc(inforUser.other.id,dispatch,await CreateAxios(inforUser,dispatch, accessTokenUser));
    }
  return (
    <header>
        <nav className="header1">
            <div className="container">
                <div className="header-left">
                   <div className="img-shop">
                        <a href="#"><i className="fas fa-tshirt" style={{color: "yellow"}} >&ensp; 
                        </i><span style={{color:"#fff",padding:"0 3px", textShadow: "0.5px 0.5px",boxSizing: "border-box"}}>BNShop</span></a>
                   </div>
                    
                   <div className="txt-sort-down" id="survey-click"><a href="#"><i className="fas fa-poll" style={{marginRight: "5px"}}></i>Khảo Sát</a></div>
                  
                   <div className="input-header">
                        <input type="text" placeholder="  Tìm sản phẩm..."/>
                        <i className="fas fa-search"></i>
                   </div>
                </div>
                <div  className="header-center">
                    <div className="type-fashion">
                        <div className="txt-sort-down txt-type txt-type-men"><a href="#">Men<i className="fas fa-sort-down"></i></a>
                            <div className="sub-menu">
                                <ul >
                                    <li><a href="#">Áo ngắn tay </a></li>
                                    <li className="flex-sub flex-sub2"><a href="#">Áo dài tay </a><i className="fas fa-caret-right"></i>
                                        <div className="sub-menu2">
                                            <ul>
                                                <li><a href="#">Áo dài tay A </a></li>
                                                <li><a href="#">Áo dài tay B </a></li>
                                                <li><a href="#">Áo dài tay C</a></li>
                                                <li className="flex-sub flex-sub3"><a href="#">Áo dài tay D</a><i className="fas fa-caret-right"></i>
                                                    <div className="sub-menu3">
                                                        <ul>
                                                            <li><a href="#">Áo dài tay F</a></li>
                                                            <li><a href="#">Áo dài tay G</a></li>
                                                            <li><a href="#">Áo dài tay H</a></li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li><a href="#">Áo dài tay E</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><a href="#">Áo Ấm </a></li>
                                </ul>
                            </div>
                        </div>
                  
                        <div className="txt-sort-down txt-type txt-type-women"><a href="#">Women<i className="fas fa-sort-down"></i></a>
                            <div className="sub-menu-women">
                                <ul >
                                    <li><a href="#">Áo ngắn tay </a></li>
                                    <li className="flex-sub flex-sub2-women"><a href="#">Áo dài tay </a><i className="fas fa-caret-right"></i>
                                        <div className="sub-menu2-women">
                                            <ul>
                                                <li><a href="#">Áo dài tay A </a></li>
                                                <li><a href="#">Áo dài tay B </a></li>
                                                <li><a href="#">Áo dài tay C</a></li>
                                                <li><a href="#">Áo dài tay D</a></li>
                                                <li><a href="#">Áo dài tay E</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><a href="#">Áo Ấm </a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="txt-sort-down txt-type txt-type-kids"><a href="#">Kids<i className="fas fa-sort-down"></i></a>
                            <div className="sub-menu-kids">
                                <ul >
                                    <li><a href="#">Áo ngắn tay </a></li>
                                    <li><a href="#">Áo dài tay </a></li>
                                    <li className="flex-sub flex-sub2-kids"><a href="#">Áo ấm </a><i className="fas fa-caret-right"></i>
                                        <div className="sub-menu2-kids">
                                            <ul>
                                                <li><a href="#">Áo ấm A </a></li>
                                                <li><a href="#">Áo ấm B </a></li>
                                                <li><a href="#">Áo ấm C</a></li>
                                                <li><a href="#">Áo ấm D</a></li>
                                                <li><a href="#">Áo ấm E</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    {/* <li><a href="#">Áo khoác </a></li>
                                    <li><a href="#">Áo chống đạn</a></li> */}
                                </ul>
                            </div>
                        </div>
                   </div>
                </div>
                <div className="header-right">
                    <div className="header-cart">
                        <NavLink to="/cart">
                            <button><i className="fas fa-cart-arrow-down"></i></button>
                            <div className="quantity-cart">
                                <div id="quantity-addcart">{amount}</div>
                            </div>
                        </NavLink>
                    </div>
                    <div className="userNameLogin">
                    <div className="login-header">
                        {inforUser&&(<p style={{color:"black"}}>Hi,{username}</p>)||<NavLink to="/register">REGISTER</NavLink>} 
                    </div>
                    </div>
                    <div className="login-header">
                        <i class="fas fa-sign-in-alt"></i>
                        {!inforUser?(<NavLink to="/login">LOGIN</NavLink>):(<NavLink onClick={logoutAccount}>LOGOUT</NavLink>)}
                    </div>
                </div>
            </div>
        </nav>
      <NavBar />
    </header>
  )
}

export default Header