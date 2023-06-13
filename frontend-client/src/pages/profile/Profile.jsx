import React from 'react'
import './profile.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
const Profile = () => {
return (
    <div className="profile">
        <Sidebar/>
        <div className="profileWrapper">
            <Navbar/>
            Profile
        </div>
    </div>
)
}

export default Profile