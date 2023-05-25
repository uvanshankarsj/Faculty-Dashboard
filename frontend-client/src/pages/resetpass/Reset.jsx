import './reset.scss'
import { Link, useLocation,useNavigate } from 'react-router-dom'
import ArrowBackIosSharpIcon from "@mui/icons-material/ArrowBackIosSharp";
import ResetImg from '../../assets/images/reset.jpg'
import React, { useState } from 'react'
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

const Reset = () => {
    
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')
    const location = useLocation()
    const token = location.state.token
    const move = useNavigate()
    React.useEffect(() => {
        document.title = "Reset Password"
        if(location.state){
            console.log("Valid Token")
            console.log(location.state.token)
            toast.success("OTP verified", {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }, [location])



    const resetPassword = () => {
        if(password === confirmpassword){
            axios.post('http://localhost:6969/api/admin/reset-password', {password:password,token:token}).then((res) => {
                console.log(res)
                setTimeout(() => {}, 4000);
                if(res.data.message === "Password Updated"){
                    toast.success("Password Reset Successfully", {
                        position: "top-right",
                        autoClose: 4000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                    move('/',{state:{"message":"Password Reset Successfully"}})
                }
                else{
                    toast.error("Error in Resetting Password", {
                        position: "top-right",
                        autoClose: 4000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                }
            })
        }
        else{
            toast.warn("Password and Confirm Password should be same", {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
    }

return (
    <div className="reset">
        <div className="reset-wrapper">
            <div className="reset-left">
                <div className="reset-back">
                    <Link to='/login' style={{textDecoration:'none'}}>
                        <ArrowBackIosSharpIcon className="reset-back-icon"/>
                        <span className="reset-back-text">Back</span>
                    </Link>
                </div>
                <h4 className="reset-desc">
                    Reset Password
                </h4>
                <div className="reset-des">
                    Enter the New password and Confirm the same to change your Account's password</div>
                    <div className="reset-form-group">
                        <label htmlFor="password" className="reset-label">New Password</label>
                        <input type="password" className="reset-input" onChange={(e) =>{setPassword(e.target.value)}}/>
                        <label htmlFor="password" className="reset-label">Confirm Password</label>
                        <input type="password" className="reset-input" onChange={(e) =>{setConfirmPassword(e.target.value)}}/>
                        <input classname='submit' type="button" value="Reset Password" onClick={resetPassword}/>
                    </div>
            </div>
            <div className="reset-right">
                <img src={ResetImg} alt="" className="reset-img"/>
            </div>
        </div>
        <ToastContainer />
    </div>
)
}

export default Reset