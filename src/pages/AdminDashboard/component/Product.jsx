import React, { useState } from 'react'
import { useRef } from 'react';
import "../../../assets/stylesheet/CSS/product.css"
import {createProduct, getAllProduct, updateProduct,deleteProduct } from "../../../services/productServices";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
export let getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (err) => reject(err);
  });
};


const Product = () => {
  //set state để render lại
  let elementCreate = useRef();
  let elementDelEdit = useRef();
  let elementBtn =useRef();
  let elementBtnUpdate =useRef();
  const dispatch = useDispatch();
  let allProduct = useSelector(state => state.product.getAllProduct.allProduct?.data);
  //Form handle
  let [id, setId]= useState()
  let [title, setTitle] = useState("");
  let [price, setPrice] = useState();
  let [category, setCategory] = useState(1);
  let [discount, setDiscount] = useState();
  let [baseImg, setBaseImg] = useState("");
  let toggleState=(e)=>{
    if(e.target.innerText==="CREATE" ){
      elementCreate.current.style.display="none";
      elementDelEdit.current.style.display="block";
      elementBtnUpdate.current.innerText="CREATE";
      setTitle("");
      setPrice();
      setCategory(1);
      setDiscount();
      setBaseImg("");
      return e.target.innerText="DELETE/EDIT"
    }
    else {
      elementCreate.current.style.display="block";
      elementDelEdit.current.style.display="none";
      return e.target.innerText="CREATE"
    }
  }

  let toggleStateEdit=(e,prd)=>{
    if(e.target.innerText==="Edit"){
      elementCreate.current.style.display="none";
      elementDelEdit.current.style.display="block";
      elementBtn.current.innerText="BACK";
      elementBtnUpdate.current.innerText="UPDATE";
      setTitle(prd.title);
      setPrice(prd.price);
      setCategory(prd.category_id);
      setDiscount(prd.discount);
      setBaseImg(prd.image);
      setId(prd.id);
    }
  }

  let handleDeleteProduct = (e,prd)=>{
    deleteProduct(prd.id, dispatch);
  }
  //convert ảnh được chọn
  let getInput =async (e)=>{
    let file = e.target.files[0];
    let imgBase64= await getBase64(file);
    setBaseImg(imgBase64);
  }
  let handleSubmit=(e)=>{
    e.preventDefault();
    if(e.target.innerText ==="CREATE"){
        // category_id, title, price, discount, image
        let inforProduct = {
          category_id:category, title:title, price:price, discount:discount, image:baseImg
        }
        createProduct(inforProduct, dispatch);
    }
    if(e.target.innerText ==="UPDATE"){
      let upProduct = {
        category_id:category, title:title, price:price, discount:discount, image:baseImg
      }
      updateProduct(id,upProduct,dispatch);
    }
   
  }
  useEffect(()=>{
    getAllProduct(dispatch);
  },[])
  return (
    <div className="container-main">
    <div id="main" >
        <div className="head">
            <div className="left-head">
                <h1 className="title-list">Product</h1>
            </div>  
        </div>
        <div className="create-product-ad">
            <button onClick={toggleState} ref={elementBtn}>CREATE</button>
        </div>
        <div className="CreateForm" ref={elementDelEdit} style={{display:"none"}}>
          <form className="form-create-product">
              <label>Product Title:</label>
              <input type="text" onChange={e=>setTitle(e.target.value)} value={title}/>
              <label>Price:</label>
              <input type="text" onChange={e=>setPrice(e.target.value)} value={price} />
              <label>Category:</label>
              <select class="category_id" onChange={e=>setCategory(e.target.value)} value={category}>
                <option value="1">Women</option>
                <option value="2">Men</option>
                <option value="3">Kids</option>
                <option value="4">New</option>
                <option value="5">BestSell</option>
              </select>
              <label>Discount:</label>
              <input type="text" onChange={e=>setDiscount(e.target.value)} value={discount}/>
              <label>Upload Image:</label>
              <input type="file" onChange={getInput}/>
              <div className="previewImg">
                {baseImg&&<img src={baseImg} alt="success" width="50px" height="60px" />}
              </div>
              <div className="btn-form-create-prd">
                  <button type="submit" onClick={handleSubmit} ref={elementBtnUpdate}>CREATE</button>
              </div>
          </form>
        </div>
        <div className="main-admin-product" ref={elementCreate} style={{display:"block"}}>
                
              <div className="table-list-product">
                <table>
                  <thead className="title-bold-prd">
                      <tr className="title-products-table head-title-products">
                        <th>ID</th>
                        <th>Category</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Discount</th>
                        <th>Image_Product</th>
                        <th>Actions</th>
                      </tr>
                  </thead>
                  <tbody>
                  {
                    allProduct?.map((prd,i)=>(
                      <tr className="title-products-table product-table-ad" key={prd.id}>
                      <td>{prd.id}</td>
                      <td>{prd.category_id}</td>
                      <td>{prd.title}</td>
                      <td>{prd.price}đ</td>
                      <td>{prd.discount}</td>
                      <td>
                        <img src={prd.image} alt="success" width="50px" height="60px"/>
                      </td>
                      <td className="btn-product-ad">
                        <button type="text" onClick={e=>handleDeleteProduct(e,prd)}>Delete</button>
                        <button type="text" onClick={e=>toggleStateEdit(e,prd)}>Edit</button>
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

export default Product