import React, { useRef, useState } from 'react'
import "../../../assets/stylesheet/CSS/cart.css"
import {product} from "../../../assets/image/TotalImage"
import Header from "../../../components/Header/Header"
import Footer from "../../../components/Footer/Footer"
import { useDispatch, useSelector } from 'react-redux'
import { deletePrdCartSuccess, updateAmountSuccess ,addToCartSuccess,addToCartRefresh} from '../../../redux/cartSlice'
import {getAllOrderSuccess} from "../../../redux/orderSlice";
import { useEffect } from 'react'
import {createOrder,getAllOrder,updateOrder,getAllOrderUser} from "../../../services/productServices"
import { CreateAxios} from '../../../utils/http'
const Cart =  () => {
    const dispatch = useDispatch();
    let elementHistory=useRef();
    let elementInforOrder=useRef();
    // let [history, setHistory] = useState({});
    let [address, setAddress] = useState("");
    let listSelectProduct = useSelector(state =>state.cart.addToCart?.selectProduct);
    let listOrder= useSelector(state =>state.order.getAllOrder?.allOrder);
    let inforUser = useSelector((state) => state.auth.login?.currentUser);
    let user=inforUser?.other;
    // let orderHistory = listOrder?.data[0];
    // console.log("listOrder", listOrder?.data[0]);
    console.log("infor",inforUser)
    console.log("listSelectProduct", listSelectProduct)
  let delPrdCart =(e, prd)=>{
    console.log(prd)
    dispatch(deletePrdCartSuccess(prd.id))
  }
  let increaseBtn=(e,prd)=>{
    dispatch(updateAmountSuccess({
        id:prd.id,
        click:"+"
    }))
  }
  let decreaseBtn =(e, prd)=>{
    dispatch(updateAmountSuccess({
        id:prd.id,
        click:"-"
    }))
  }
  let addressInfor=(e)=>{
    setAddress(e?.target.value);
  }
  let total_money = 0;
  let total_product=0;
  let total_money_old_order= (listOrder?.data)?(listOrder?.data[0]?.total_money):0;
  let total_product_old_order= (listOrder?.data)?(listOrder?.data[0]?.total_product):0;
  listSelectProduct.forEach((prd)=>{
    total_money += (prd.price - (prd.price * prd.discount)/100)*prd.amount;
    total_product += prd.amount;
  })

let historyInfor = {
    amount:(listOrder?.data)&&listOrder?.data[0]?.total_product,
    total:(listOrder?.data)&&listOrder?.data[0]?.total_money,
    address:(listOrder?.data)&&listOrder?.data[0]?.address,
    status:(listOrder?.data)&&listOrder?.data[0]?.status
}
  let toggleHistory = async (e)=>{
    if(e.target.innerText==="L???ch s??? mua h??ng"){
        await getAllOrder(user?.id, dispatch);
        elementHistory.current.style.display="block";
        elementInforOrder.current.style.display="none";
        return e.target.innerText="Th??ng tin ????n h??ng"
    }
    if(e.target.innerText==="Th??ng tin ????n h??ng"){
        elementHistory.current.style.display="none";
        elementInforOrder.current.style.display="block";

        return e.target.innerText="L???ch s??? mua h??ng"
    }
  }
  useEffect(()=>{ 
    getAllOrder(user?.id, dispatch);
  },[])

  let handlePayment=async()=>{
    if(listSelectProduct?.length!==0&&inforUser){
        if(!address){
            alert("Please fill in your address information...")
        }
        if(listOrder.data?.length===0){
            let newOrder = {
                user_id:user.id,
                fullname:user.fullname,
                email:user.email,
                phone_number:user.phone_number,
                address:address,
                total_product:total_product,
                status:"Pending",
                total_money:total_money,
            }
           
            await createOrder(newOrder,dispatch, await CreateAxios(inforUser,dispatch,inforUser.accessToken));
        }
        if(listOrder.data?.length!==0){
            let upOrder = {
                user_id:user.id,
                fullname:user.fullname,
                email:user.email,
                phone_number:user.phone_number,
                address:address,
                total_product:total_product+total_product_old_order,
                status:"Pending",
                total_money:total_money+total_money_old_order,
            }
            await updateOrder(user?.id,upOrder,dispatch,await CreateAxios(inforUser,dispatch,inforUser.accessToken));
            dispatch(getAllOrderSuccess(upOrder))
            dispatch(addToCartRefresh());
        }

    }
    else {
        alert("Please login and select products before payment...")
    }
  }
  return (
        <div>
            <Header/>
            <div className="main">
            <div className="wrap-cart">
                <div className="content-cart">
                    <div className="left-cart">
                            <div className="header-left-cart">
                                <h3>GI??? H??NG C???A B???N</h3>
                                <div className="free-ship">
                                    <span>????n h??ng c???a b???n ???????c mi???n ph?? giao h??ng</span>
                                </div>
                            </div>
                            <div className="txt-left-cart">
                                <h4>B???n ??ang c?? trong gi??? h??ng</h4>
                            </div>
                            <div className="content-left-cart">
                                <div className="list-product-cart">
                                        {/* <!-- Load data --> */}
                                    {
                                        listSelectProduct?.map((prd)=>{
                                            return (
                                            <div className="product-cart" key={prd.id}>
                                                <div className="infoCartPrd">
                                                    <img src={prd.image} alt={prd.id}/>
                                                    <div className="name-product">
                                                        <p>{prd.title}</p>
                                                    </div>
                                                </div>
                                                <div className="input-amount">
                                                    <button className="btn-state decrease" onClick={e=>decreaseBtn(e,prd)}>-</button>
                                                    <input className="input-quantity" name="" value={prd.amount} min="1" />
                                                    <button className="btn-state increase" onClick={e=>increaseBtn(e,prd)}>+</button>
                                                </div>
                                                <div className="box-moneypay">
                                                    <div className="price-product">
                                                        <div className="pricePrd">
                                                            <p style={{fontWeight:"bold"}}>{prd.price - (prd.price * prd.discount)/100}??</p>
                                                            <del style={{color:"rgb(131, 131, 131)"}}>{prd.price}??</del>
                                                        </div>
                                                        <p style={{color:"red"}} className="discountPrd">Gi???m {prd.discount}%</p>
                                                    </div>
                                                    <div className="pay-money">
                                                        <p style={{fontWeight:"bold"}}>Th??nh ti???n:</p>
                                                        <span style={{color:"rgb(151, 8, 8)",fontWeight:"bold"}}>{(prd.price - (prd.price * prd.discount)/100)*prd.amount}??</span>
                                                    </div>
                                                </div>
                                                <div className="delete-product">
                                                    <button type="text" className="delItem" onClick={(e)=>delPrdCart(e, prd)}>Delete</button>
                                                </div>
                                            </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                    </div>
                    <div className="right-cart">
                        {/* <!--info payment --> */}
                        {inforUser&& (  
                            <div className="btnHistory">
                                <button onClick={e=>toggleHistory(e)}>L???ch s??? mua h??ng</button>
                            </div>)}
                      
                        <div className="content-right-cart">
                          <div className="toggleInforOrder" ref={elementInforOrder}>
                            <h4>Th??ng tin ????n h??ng</h4>
                                <div className="temp-money">
                                    <p className="txt-m-ord">T???m t??nh:</p>
                                    <p >{total_money}??</p>
                                </div>
                                <div className="fee-ship ">
                                    <p className="txt-m-ord">Ph?? v???n chuy???n:</p>
                                    <p>{total_money>=400000?"Mi???n Ph??":"T??nh ph??"}</p>
                                </div>
                                <div className="note-ship">
                                    <span><i className="fas fa-shipping-fast"></i>????n h??ng t??? 400,000?? s??? ???????c mi???n ph?? giao h??ng ...</span>
                                </div>
                                <div className="total-payment">
                                    <p className="txt-m-ord">T???ng ti???n:</p>
                                    <p>{total_money!==0&&total_money>=400000?(total_money):total_money+40000}??</p>
                                </div>
                                <div className="AddressUser">
                                        <label>?????a ch???:</label>
                                        <textarea  rows="4" cols="50" onChange={e=>addressInfor(e)}/>
                                </div>
                                <div className="btn-payment">
                                    <button  style={{cusor:"pointers"}} onClick={handlePayment}>THANH TO??N</button>
                                </div>
                          </div>
                          <div className="toggleHistory" ref={elementHistory} style={{display: 'none'}}>
                                 <h4>L???ch S??? Mua H??ng</h4>
                             
                                <tr className="titleHistory">
                                        <td className="contentHistory">S??? L?????ng:</td>
                                        <td>{historyInfor?.amount||0}</td>
                                        </tr>
                                        <tr className="titleHistory">
                                            <td className="contentHistory">T???ng Ti???n:</td>
                                            <td>{historyInfor?.total||0}</td>
                                        </tr>
                                        <tr className="titleHistory">
                                            <td className="contentHistory">?????a ch??? nh???n:</td>
                                            <td className="addressHistory"><span>{historyInfor?.address||"Empty"}</span></td>
                                        </tr>
                                        <tr className="titleHistory">
                                            <td className="contentHistory">V???n Chuy???n:</td>
                                            {
                                                historyInfor?.status==="Pending"?(<td><button className="pendingHistory" >Pending</button></td>):<td><button className="successHistory">Success</button></td>
                                            }
                                </tr>
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