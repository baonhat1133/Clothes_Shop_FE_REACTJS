import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {useDispatch} from "react-redux";
// import {CreateAxios} from "../../../axiosInterceptor"
import {loginUser} from "../../services/authServices"
// import {loginAdmin} from "../../../services/authServices"

const Login = () => {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let dispatch = useDispatch();
    let navigate = useNavigate();
    
    // const CreateAxios()
    let handleSubmit = (e)=>{
        e.preventDefault();
        const newUser={
            email:email,
            password:password
        }
        loginUser(newUser, dispatch, navigate);
    }
    return ( 
        <div className="box-login">

        <div className="login-page-container">
                <div className="login-page-title"> Log in</div>
                <form className="login-page-form">
                    <label>EMAIL</label>
                    <input className ="login-page-input" type="text" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/>
                    <label>PASSWORD</label>
                    <input className ="login-page-input" type="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/>
                    <button className ="login-page-button" type="submit" onClick={handleSubmit}> LOGIN </button>
                </form>
                <div className="login-page-register"> Don't have an account yet? </div>
                <Link className="login-page-register-link" to="/register">Register one for free </Link>
        </div>
        </div>

     );
}
 
export default Login;