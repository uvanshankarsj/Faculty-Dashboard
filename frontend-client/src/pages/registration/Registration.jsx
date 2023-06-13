import React from 'react'
import './registration.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
const Registration = () => {
return (
    <div className="registration">
        <Sidebar/>
        <div className="regContainer">
            <Navbar/>
        </div>
    </div>
)
}

export default Registration