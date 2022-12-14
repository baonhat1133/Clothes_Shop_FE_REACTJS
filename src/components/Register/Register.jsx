import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/authServices";
import "./register.css";
const Register = () => {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let [fullname, setFullname]= useState("");
    let [email, setEmail]= useState("");
    let [phone, setPhone]= useState("");
    let [password, setPassword]= useState("");
    let [role, setRole]= useState(2);
    let handleSubmitRegister = (e)=>{
        e.preventDefault();
        const regUser={
            fullname,
            email,
            phone_number:phone,
            password,
            role_id:role
        }
        console.log(regUser);
        registerUser(regUser, dispatch, navigate);
    }
    return ( 
        <div className="box-register">
                <div className="register-page-container">
              <div className="register-page-title"> Sign up </div>
            <form className="register-page-form">
                <label>FULLNAME</label>
                <input type="text" placeholder="Enter your Full Name..." onChange={e=>setFullname(e.target.value)}/>
                <label>EMAIL</label>
                <input type="text" placeholder="Enter your Email..." onChange={e=>setEmail(e.target.value)}/>
                <label>PHONE NUMBER</label>
                <input type="text" placeholder="Enter your Phone Number..." onChange={e=>setPhone(e.target.value)}/>
                <label>PASSWORD</label>
                <input type="password" placeholder="Enter your Password..." onChange={e=>setPassword(e.target.value)}/>
                <label>ROLE_ID (User:2)</label>
                <select style={{marginTop:"10px"}}>
                    <option value="2">2</option>
                </select>
                <button type="submit" onClick ={handleSubmitRegister}> REGISTER </button>
            </form>
        </div>
        </div>
        
     );
}
 
export default Register;