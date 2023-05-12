import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ClassIcon from '@mui/icons-material/Class';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import TodayIcon from '@mui/icons-material/Today';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SummarizeIcon from '@mui/icons-material/Summarize';
import GroupIcon from '@mui/icons-material/Group';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
const Sidebar = () => {
return (
    <div className="sidebar">
        <div className="top">
            <span className="logo">
                Faculty Dashboard 
            </span>
        </div>
        <hr/>
        <div className="center">
            <ul>
                <p className="title">
                    MAIN
                </p>
                <li>
                    <DashboardIcon className='icon'/>
                    <span>Dashboard</span>
                </li>
                <p className="title">
                    DATA
                </p>
                <li>
                    <GroupIcon className='icon'/>
                    <span>Faculty</span>
                </li>
                <li>
                    <ClassIcon className='icon'/>
                    <span>Classes</span>
                </li>
                <li>
                    <MenuBookIcon className='icon'/>
                    <span>Courses</span>
                </li>  
                <li>
                    <TodayIcon className='icon'/>
                    <span>Timetbales</span>
                </li> 
                <p className="title">
                    TOOLS
                </p>
                <li>
                    <EventNoteIcon className='icon'/>
                    <span>Work Log</span>
                </li> 
                <li>
                    <AppRegistrationIcon className='icon'/>
                    <span>Course Registrataion</span>
                </li> 
                <li>
                    <AnalyticsIcon className='icon'/>
                    <span>Statistics</span>
                </li> 
                <li>
                    <SummarizeIcon className='icon'/>
                    <span>Papers and Reports</span>
                </li> 
                <p className="title">
                    ACCOUNT
                </p>
                <li>
                    <PersonIcon className='icon'/>
                    <span>Profile</span>
                </li> 
                <li>
                    <SettingsIcon className='icon'/>
                    <span>Settings</span>
                </li>
                <li>
                    <LogoutIcon className='icon'/>
                    <span>Logout</span>
                </li> 
            </ul>
        </div>
        <div className="bottom"> 
        <p className="title">
            MODES
        </p>
            <div className="colorOption">

            </div>
            <div className="colorOption">

            </div>
        </div>
    </div>
)
}

export default Sidebar