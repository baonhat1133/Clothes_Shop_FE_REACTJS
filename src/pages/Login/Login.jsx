import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {useDispatch} from "react-redux";

import {loginUser} from "../../redux/apiRequest"
const Login = () => {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let handleSubmit = (e)=>{
        e.preventDefault();
        const newUser={
            email:email,
            password:password
        }
        loginUser(newUser, dispatch, navigate);
    }
    return ( 
        <section className="login-container">
            <div className="login-title"> Log in</div>
            <form>
                <label>EMAIL</label>
                <input type="text" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/>
                <label>PASSWORD</label>
                <input type="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/>
                <button type="submit" onClick={handleSubmit}> LOGIN </button>
            </form>
            <div className="login-register"> Don't have an account yet? </div>
            <Link className="login-register-link" to="/register">Register one for free </Link>
        </section>
     );
}
 
export default Login;