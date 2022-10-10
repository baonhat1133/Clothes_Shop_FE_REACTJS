import React from 'react'
import "../../../assets/stylesheet/CSS/cart.css"
import {product} from "../../../assets/image/TotalImage"
import Header from "../../../components/Header/Header"
import Footer from "../../../components/Footer/Footer"
const Cart = () => {
  return (
        <div>
            <Header/>
            <div className="main">
            <div className="wrap-cart">
                <div className="content-cart">
                    <div className="left-cart">
                            <div className="header-left-cart">
                                <h3>GIỎ HÀNG CỦA BẠN</h3>
                                <div className="free-ship">
                                    <span>Đơn hàng của bạn được miễn phí giao hàng</span>
                                </div>
                            </div>
                            <div className="txt-left-cart">
                                <h4>Bạn đang có trong giỏ hàng</h4>
                            </div>
                            <div className="content-left-cart">
                                    <div className="list-product-cart">
                                        {/* <!-- Load data --> */}
                                        <div className="product-cart">
                                            <div className="infoCartPrd">
                                                <img src={product[0]} alt="prd1"/>
                                                <div className="name-product">
                                                    <p>product name</p>
                                                </div>
                                            </div>
                                            <div className="input-amount">
                                                <button className="btn-state decrease" >-</button>
                                                <input className="input-quantity" name="" value="5" min="1" />
                                                <button className="btn-state increase">+</button>
                                            </div>
                                            <div className="box-moneypay">
                                                <div className="price-product">
                                                    <p style={{fontWeight:"bold"}}>400.000đ</p>
                                                    <del style={{color:"rgb(131, 131, 131)"}}>500.000 đ</del>
                                                    <p style={{color:"red"}}>Giảm 10%</p>
                                                </div>
                                                <div className="pay-money">
                                                    <p style={{fontWeight:"bold"}}>Thành tiền:</p>
                                                    <span style={{color:"rgb(151, 8, 8)",fontWeight:"bold"}}>1.200.000 đ</span>
                                                </div>
                                            </div>
                                            <div className="delete-product">
                                                <button type="text" className="delItem">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                    </div>
                    <div className="right-cart">
                        {/* <!--info payment --> */}
                        <div className="content-right-cart">
                            <h4>Thông tin đơn hàng</h4>
                            <div className="temp-money">
                                <p className="txt-m-ord">Tạm tính:</p>
                                <p >totalPay đ</p>
                            </div>
                            <div className="fee-ship ">
                                <p className="txt-m-ord">Phí vận chuyển:</p>
                                <p>Miễn phí ( 400k)</p>
                            </div>
                            <div className="note-ship">
                                <span><i className="fas fa-shipping-fast"></i>Đơn hàng từ 400,000đ sẽ được miễn phí giao hàng (-40.000đ)</span>
                            </div>
                            <div className="total-payment">
                                <p className="txt-m-ord">Tổng tiền:</p>
                                <p>totalPay-freeship đ</p>
                            </div>
                            <div className="btn-payment">
                                <button type="text">THANH TOÁN</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Cart