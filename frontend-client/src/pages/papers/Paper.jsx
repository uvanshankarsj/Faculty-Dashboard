import React from 'react'
import './paper.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'

const Paper = () => {
return (
    <div className="paper">
        <Sidebar/>
        <div className="paperContainer">
            <Navbar/>
            <div className="paperWrapper">

            </div>
        </div>
    </div>
)
}

export default Paper