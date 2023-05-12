import React from 'react'
import './login.scss'
const Login = () => {
return (
    <div className="login">
        <div className="right">
            <div className="wrapper">
                <h1 className="title">Faculty Dashboard</h1>
                <form className="form">
                    <input type="text" placeholder="Username" className="input"/>
                    <input type="password" placeholder="Password" className="input"/>
                    <button className="button">Login</button>
                </form>
            </div>
        </div>
        <div className="left">
            <div className="wrapper">
                <h1 className="title">Faculty Dashboard</h1>
                <p className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptatum.
                </p>
            </div>
        </div>
    </div>

)
}

export default Login