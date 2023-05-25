import React from 'react'
import './login.scss' 
import Background from '../../assets/images/backgroundesign.jpg'
import Dashboard from '../../assets/images/dashboard.webp'
import { Link, useNavigate , useLocation } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState()
    const check = document.querySelector('#checkbox')
    const move = useNavigate()
    const location = useLocation()
    const [error, setError] = useState('')

    React.useEffect(() => {
        document.title = "Login"
        if(location.state){
            toast.success(location.state.message)
        }
    }, [location])

const login = (email, password) => {
    console.log(email, password)
    axios.post('http://localhost:6969/api/admin/login', {email:email, password:password}).then((res) => {
        if(res.data.message === 'Valid'){
            setUser(res.data.user)
            setError('')
            window.localStorage.setItem("token", res.data.token);
            window.localStorage.setItem("user", JSON.stringify(res.data.user));
            window.localStorage.setItem("email", email);
            move('/home', { state: { "message": "Login successful" }}) 
        }
        else{
            setError(res.data.message)
            toast.error(error, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress:undefined,
                theme:'light'
                });
        }
    }
    ).catch((err) => {
        console.log(err)
    }
    )
}

const handleSubmit = (e) => {
    e.preventDefault()
    if(check.checked){
        login(email, password)
    } else {
        toast.warn("Please agree to the terms and conditions", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress:undefined,
        theme:'light'
        });
    }
}


return (
    <div className="login">
        <div className="login-wrapper">
            <div className="login-left"> 
                <h2 className="title">Welcome Back !</h2>
                <span className="signdetails">Please enter your details</span>
                <div className="signup">Sign In With...</div>
                <div className="social">
                    <div className="socialbox">
                            <img src="https://img.icons8.com/fluent/48/000000/facebook-new.png" alt="" />
                            <span>Facebook</span>
                    </div>
                    <div className="socialbox">
                            <img src="https://img.icons8.com/fluent/48/000000/google-logo.png" alt="" />
                            <span>Google</span>
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}> 
                    <div style={{height: '0.2px', border: "0.4px solid rgb(192, 192, 192, 0.3)", width: "30%"}} />
                    <div><p style={{width: '20px', textAlign: 'center',color:'black',fontWeight:'20'}}> Or </p></div>
                    <div style={{height: '0.2px', border: "0.4px solid rgb(192, 192, 192, 0.3)", width: "30%"}} />
                </div>

                <div className="form">
                    <span className="username">Username/ Email Address</span>
                    <input type="email" className="userinput" onChange={(e) => {setEmail(e.target.value)}} />
                    <span className="password">Password</span>
                    <input type="password" className="passinput" onChange={(e) => {setPassword(e.target.value)}} />
                </div>

                <div className="forgot-pass">
                    <Link to='/forgot' style={{textDecoration:'none'}}>
                        <span >Forgot Password ?</span>
                    </Link>
                </div>
                <div className="termscond">
                    <input type="checkbox" className="checkbox" id='checkbox'/>
                    &nbsp;
                    <span className="remember">I agree to </span>
                    &nbsp;
                    <span className="terms"> terms & conditions</span>
                </div>
                <input classame='submit' type="button" value="Sign In" onClick={handleSubmit}/>
                <div className="signupacc">
                    <span className="text"> Don't have an account ? </span>
                    <span className="create">Create Account</span>
                </div>
            </div>
            <div className="login-right">
                <img src={Background} alt="" className="login-img" />
                <img src={Dashboard} alt="" className="login-img" />
            </div>
        </div>
        <ToastContainer />
    </div>
)
}

export default Login