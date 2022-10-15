import React, { useEffect, useRef, useState } from 'react'
import { sliderRight, sliderLeft, product } from "../../../assets/image/TotalImage"
import Header from "../../../components/Header/Header"
import Footer from "../../../components/Footer/Footer"
import {getAllProduct} from "../../../services/productServices"
import { useDispatch, useSelector } from 'react-redux'
import { addToCartSuccess} from "../../../redux/cartSlice";

export default function HomePage() {
 const dispatch= useDispatch();
  let [nameSlice, setNameSlice] =useState("Săn Sale");
  let slice =useRef(0);
  
  switch (nameSlice){
        case "Săn Sale":{
            slice.current=0;
            break;
        }
        case "Quầy 1":{
            slice.current=1;
            break;
        }
        case "Quầy 2":{
            slice.current=2;
            break;
        }
        case "Quầy 3":{
            slice.current=3;
            break;
        }
        default:{
            slice.current=4;
            break;
        }
    }

  let allProduct = useSelector(state=>state.product.getAllProduct.allProduct?.data);
  useEffect(()=>{
    getAllProduct(dispatch);
  },[])

  let handleAddCart =(e, prd)=>{
        console.log(prd)
        dispatch(addToCartSuccess(prd));
  }
  return (
    <div>
        <Header/>
        <main>
            <div className="slider">
                <div className="container-main">
                    <div className="slider-content">
                        <div className="slider-content-left">
                            <div className="slider-content-left-top-container">
                                <div className="slider-content-left-top">
                                <a href=""><img src={sliderLeft[slice.current]} alt="slider" /></a>
                                </div>
                                <div className="icon-arrow">
                                    <i className="fas fa-chevron-left"></i>
                                    <i className="fas fa-chevron-right"></i>
                                </div>
                            </div>
                        
                            <div className="slider-content-left-bottom">
                                <ul>
                                    <li onClick={e=>setNameSlice(e.target.textContent)}>Săn Sale</li>
                                    <li onClick={e=>setNameSlice(e.target.textContent)}>Quầy 1</li>
                                    <li onClick={e=>setNameSlice(e.target.textContent)}>Quầy 2</li>
                                    <li onClick={e=>setNameSlice(e.target.textContent)}>Quầy 3</li>
                                    <li onClick={e=>setNameSlice(e.target.textContent)}>Quầy 4</li>
                                </ul>
                            </div>
                        </div>
                        <div className="slider-content-right">
                            <a href=""><img src={sliderRight[0]} alt="slider-right1" /></a>
                            <a href=""><img src={sliderRight[1]} alt="slider-right2" /></a>
                            <a href=""><img src={sliderRight[2]} alt="slider-right3" /></a>
                            <a href=""><img src={sliderRight[3]} alt="slider-right4" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="title-bestsell">
                <div className="title-txt">
                    <h2>Sản Phẩm Bán Chạy Nhất</h2>
                    <div className="title-line">
                        <div className="line-circle"></div>
                        <i className="far fa-circle"></i>
                        <div className="line-circle"></div>
                    </div>
                </div>
                    <div className="content-bestsell">
                        <div className="content-bestsell-product">
                                <ul className="bestsell-products">
                                    {
                                        allProduct?.map((prd,i)=>{
                                            if(prd.category_id ===5){
                                                return (
                                                    <li key={prd.id}>
                                                    <div class="img-product">
                                                        <img src={prd.image} alt={prd.id}/> 
                                                        
                                                        <p>{prd.discount}%</p>
                                                        <button class="addlocal" onClick={(e)=>handleAddCart(e,prd)}>Add Cart</button>
                                                    </div>
                                                    <div class="txt-product">
                                                        <h3>{prd.title}</h3>
                                                        <div class="price-product">
                                                            <p class="current-price">{prd.price -(prd.discount*prd.price)/100} <sup>đ</sup></p>
                                                            <p style={{textDecoration:"line-through"}}>{prd.price} <sup>đ</sup></p>
                                                        </div>
                                                    </div>
                                                </li> 
                                                )
                                            }
                                        })
                                    }
                                </ul>
                        </div>
                    </div>
                </div>
            <div className="title-bestsell title-new">
                <div className="title-txt">
                    <h2>Sản Phẩm Mới</h2>
                    <div className="title-line">
                        <div className="line-circle"></div>
                        <i className="far fa-circle"></i>
                        <div className="line-circle"></div>
                    </div>
                </div>
                <div className="content-bestsell">
                    
                    <div className="content-bestsell-product">
                            <ul className="new-products">
                                {
                                    allProduct?.map((prd,i)=>{
                                        if(prd.category_id ===4){
                                            return (
                                                <li key={i}>
                                                <div class="img-product">
                                                    <img src={prd.image} alt={prd.id}/> 
                                                    <p>{prd.discount}%</p>
                                                    <button class="addlocal" onClick={(e)=>handleAddCart(e,prd)}>Add Cart</button>
                                                </div>
                                                <div class="txt-product">
                                                    <h3>{prd.title}</h3>
                                                    <div class="price-product">
                                                        <p class="current-price">{prd.price -(prd.discount*prd.price)/100} <sup>đ</sup></p>
                                                        <p style={{textDecoration:"line-through"}}>{prd.price} <sup>đ</sup></p>
                                                    </div>
                                                </div>
                                            </li> 
                                            )
                                        }
                                    })
                                }
                                
                            </ul>
                    </div>
                </div>
            </div>
        
            <div className="title-txt txt-more-info">
                <h2>Về Chúng Tôi</h2>
                <div className="title-line">
                    <div className="line-circle"></div>
                    <i className="far fa-circle"></i>
                    <div className="line-circle"></div>
                </div>
            </div>
        <div className="more-info-box">
            <div className="more-info">
                
                <div className="us-info freeship">
                    <i className="fas fa-truck"></i>
                    <h4>Miễn phí giao hàng</h4>
                    <p>Tất cả các giao dịch mua trên 400.000<sup>đ</sup> đều đủ điều kiện để được giao hàng miễn phí toàn quốc.</p>
                </div>
                <div className="us-info payment">
                    <i className="far fa-money-bill-alt"></i>
                    <h4>Thanh toán dễ dàng</h4>
                    <p>Tất cả các khoản thanh toán được xử lý ngay lập tức thông qua một giao thức thanh toán an toàn.</p>
                </div>
                <div className="us-info moneyback">
                    <i className="fas fa-undo"></i>
                    <h4>Hoàn lại tiền trong 7 ngày</h4>
                    <p>Nếu một mặt hàng đến nơi bị hỏng hoặc bạn đã đổi ý, bạn có thể gửi lại mặt hàng đó để được hoàn lại toàn bộ tiền.</p>
                </div>
                <div className="us-info freeship">
                    <i className="fas fa-check-double"></i>
                    <h4>Chất lượng tốt nhất</h4>
                    <p>Tất cả các sản phẩm đều được kiểm định về chất lượng đầy đủ trước khi đưa đến người sử dụng </p>
                </div>
            </div>
        </div>
        </main>
        <Footer />
    </div>
  )
}
