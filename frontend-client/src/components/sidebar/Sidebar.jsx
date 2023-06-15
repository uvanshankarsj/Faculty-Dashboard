import {React,useEffect,useState} from 'react'
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
import { Link } from 'react-router-dom';
const Sidebar = () => {
    const HandleLogout = () => {
        localStorage.clear()
        window.location.href = '/'
    }
    const [admin,isAdmin] = useState(true)
    useEffect(() => {
        if(localStorage.getItem('usertype') === 'admin'){
            isAdmin(false)
        }
    }, [])

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
                <Link to='/home' style={{textDecoration:"none"}}>
                <li>
                    <DashboardIcon className='icon'/>
                    <span>Dashboard</span>
                </li>
                </Link>
                <p className="title">
                    DATA
                </p>
                <Link to='/faculties' style={{textDecoration:"none"}}>
                <li>
                    <GroupIcon className='icon'/>
                    <span>Faculty</span>
                </li>
                </Link>
                <li>
                    <ClassIcon className='icon'/>
                    <span>Classes</span>
                </li>
                <Link to='/courses' style={{textDecoration:"none"}}>
                <li>
                    <MenuBookIcon className='icon'/>
                    <span>Courses</span>
                </li>  
                </Link>
                <Link to='/timetable' style={{textDecoration:"none"}}>
                <li>
                    <TodayIcon className='icon'/>
                    <span>Timetbales</span>
                </li> 
                </Link>
                <p className="title">
                    TOOLS
                </p>
                {admin && 
                <Link to='/calendar' style={{textDecoration:"none"}}>
                <li>
                    <EventNoteIcon className='icon'/>
                    <span>Work Log</span>
                </li> 
                </Link>
                }  
                <Link to='/registration' style={{textDecoration:"none"}}>
                <li>
                    <AppRegistrationIcon className='icon'/>
                    <span>Course Registrataion</span>
                </li> 
                </Link>
                <li>
                    <AnalyticsIcon className='icon'/>
                    <span>Statistics</span>
                </li> 
                <Link to='/papers' style={{textDecoration:"none"}}>
                <li>
                    <SummarizeIcon className='icon'/>
                    <span>Papers and Reports</span>
                </li> 
                </Link>
                <p className="title">
                    ACCOUNT
                </p>
                <Link to='/profile' style={{textDecoration:"none"}}>
                <li>
                    <PersonIcon className='icon'/>
                    <span>Profile</span>
                </li> 
                </Link>
                <li>
                    <SettingsIcon className='icon'/>
                    <span>Settings</span>
                </li>
                <Link onClick={HandleLogout} style={{textDecoration:"none"}}>
                <li>
                    <LogoutIcon className='icon'/>
                    <span>Logout</span>
                </li> 
                </Link>
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