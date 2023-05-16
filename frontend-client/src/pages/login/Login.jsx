import React from 'react'
import './login.scss' 
import Background from '../../assets/images/backgroundesign.jpg'
import Dashboard from '../../assets/images/dashboard.webp'
const Login = () => {
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
                    <input type="text" className="userinput" />
                    <span className="password">Password</span>
                    <input type="password" className="passinput" />
                </div>
                <div className="forgot">Forgot Password ?</div>
                <div className="termscond">
                    <input type="checkbox" className="checkbox" />
                    &nbsp;
                    <span className="remember">I agree to </span>
                    &nbsp;
                    <span className="terms"> terms & conditions</span>
                </div>
                <input classname='submit' type="button" value="Sign In" />
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
    </div>

)
}

export default Login