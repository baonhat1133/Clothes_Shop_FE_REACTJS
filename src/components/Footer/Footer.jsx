import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="content-footer">
            <div className="subscribe">
                <div className="subscribe-email">
                    <div className="txt-subscribe">
                        <h4>Theo dõi chúng tôi và cập nhật sớm nhất những sản phẩm hàng ngày</h4>
                    </div>
                    <div className="subscribe-email-content">
                        <input placeholder="Nhập vào email của bạn..." className="input-email" size="50"/>
                        <button type="">Đăng kí</button>    
                    </div>
                </div>
            </div>
            <div className="contact-info">
                <div className="contact-info-content">
                   <div className="left-footer">
                        <div className="left-footer-ct img-shop">
                            <a href=""><i className="fas fa-tshirt" style={{color: "yellow"}} >&ensp; 
                            </i><span style={{color:"#fff",padding:"0 3px", textShadow: "0.5px 0.5px",boxSizing: "border-box"}}>BNShop</span></a>
                        </div>
                        <p className="left-footer-ct">BNShop mang đến cho bạn trải nghiệm mua sắm tuyệt vời cùng những sản phẩm chất lượng.<br/>
                        Chúng tôi luôn đặt uy tín và sự cầu toàn lên hàng đầu.</p>
                        <div className="left-footer-ct icon-contact">
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-linkedin"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-youtube"></i>
                        </div>
                   </div>
                   <div className="right-footer">
                       <div className="info-bnshop">
                           <h3>Về BNShop</h3>
                           <ul>
                               <li><a href="">Giới thiệu</a></li>
                               <li><a href="">Liên hệ</a></li>
                               <li><a href="">Tuyển dụng</a></li>
                               <li><a href="">Tin tức</a></li>
                               <li><a href="">Hệ thống cửa hàng</a></li>
                           </ul>
                       </div>
                        <div className="support-shopping">
                            <h3>Hỗ Trợ Khách Hàng</h3>
                            <ul>
                                <li><a href="">Chính sách khách hàng</a></li>
                                <li><a href="">Chính sách đổi/trả</a></li>
                                <li><a href="">Chính sách bảo mật</a></li>
                                <li><a href="">Hướng dẫn chọn size</a></li>
                                <li><a href="">Thanh toán, giao nhận</a></li>
                            </ul>
                        </div>
                        <div className="direct-contract-info">
                            <h3>Thông tin liên lạc</h3>
                            <div className="contract-right-icon contract-address">
                                <i className="fas fa-map-marker-alt"></i>
                                <p>Địa chỉ: Thành phố Đà Nẵng</p>
                            </div>
                            <div className="contract-right-icon contract-phone">
                                <i className="fas fa-phone"></i>
                                <div>
                                    <p>Liên hệ đặt hàng: 0772345678</p>
                                    <p>Góp ý khiếu nại: 18001234</p>
                                </div>
                            </div>
                            <div className="contract-right-icon contract-email">
                                <i className="far fa-envelope"></i>
                                <p>Email:baonhatshop@gmail.com</p>
                            </div>
                        </div>
                   </div>

                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer