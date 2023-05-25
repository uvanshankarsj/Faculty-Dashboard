import React from 'react'
import './forgot.scss'
import { useState } from 'react'
import ArrowBackIosSharpIcon from "@mui/icons-material/ArrowBackIosSharp";
import { Link, useNavigate } from 'react-router-dom'
import Forget from '../../assets/images/forgot.jpg'
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Forgot = () => {
    const  [email, setEmail] = useState('')
    const [otp, setOtp] = useState('')
    const [otpdisplay, setotpdisplay] = useState(false)
    const [verfiyotp, setVerifyOtp] = useState('')
    const resetnavigate = useNavigate()

    function otpDisplay(){
        return(
            <div className="forgot-form-group">
                <label>OTP</label>
                <input type="number" className="forgot-input" onChange={(e) =>{setVerifyOtp(e.target.value)}}/>
                <input type="button" value="Verify OTP" className="forgot-input" onClick={otpverification}/>
            </div>
        )
    }

    const mailverification = (email) => {
        axios.post('http://localhost:6969/api/admin/forgot-password', {email:email}).then((res) => {
            console.log(res)
            if(res.data.message === "Valid"){
                const OTP = Math.floor(Math.random() * 9000 + 1000);
                console.log(OTP);
                setOtp(OTP);
                axios.post('http://localhost:6969/api/admin/send-otp', {email:email, otp:OTP}).then((res) => {
                    console.log(res)
                    if(res.data.message === "Email sent successfully"){
                        setotpdisplay(true)
                    }
                    else{
                        toast.error("Error in sending OTP", {
                        position: "top-right",
                        autoClose: 4000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                        setTimeout(() => {
                            
                        }, 5000);
                    }
                }
                ).catch((err) => {
                    console.log(err)
                }

                )
            }else if (res.data.message === "Invalid Email") {
            toast.warn("Enter a valid email address and try again", {
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
        }).catch((err) => {
            console.log(err)
        })
    }

    const otpverification = () => {
        if(otp == verfiyotp){
            resetnavigate('/reset', {state:{token:localStorage.getItem('token'),message:"Verified", email:email}})
        }
        else{
            toast.error("OTP not verified", {
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

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(email === ''){
            toast.error("Enter a valid email address", {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else if(!email.includes('@')){
            toast.error("Enter a valid email address", {
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
        else{
            mailverification(email)
        }
    }
return (
    <div className="forgot">
        <div className="forgot-wrapper">
            <div className="forgot-left">
                <div className="forgot-back">
                    <Link to='/' style={{textDecoration:'none'}}>
                        <ArrowBackIosSharpIcon className="forgot-back-icon"/>
                        <span className="forgot-back-text">Back</span>
                    </Link>
                </div>
                <h4 className="forgot-desc">
                    Forgot Password
                </h4>
                <div className="forgot-des">
                    Type In Your Email Address Below And We'll Send You An Email With Instructions On How To Create A New Password </div>
                    <div className="forgot-form-group">
                        <label>Email Address</label>
                        <input type="email" id='forgot-email' className="forgot-input" onChange={(e) => {setEmail(e.target.value)}}/>
                        <input classname='submit' type="button" value="Validate Email" onClick={handleSubmit}/>
                        {otpdisplay ? otpDisplay() : null}
                    </div>
            </div>
            <div className="forgot-right">
                <img src={Forget} alt="" className="forgot-img"/>
            </div>
        </div>
        <ToastContainer />
    </div>
)
}

export default Forgot