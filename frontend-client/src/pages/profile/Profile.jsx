import {React,useEffect,useState} from 'react'
import './profile.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import ProfilePic from '../../assets/images/woman.jpg'
import Assignlist from '../../components/assignedlist/Assignlist'
import { Link } from 'react-router-dom'
const Profile = () => {
    const [user,setUser] = useState({})
    useEffect(() => {
        localStorage.getItem('user') && setUser(JSON.parse(localStorage.getItem('user')))
    },[])

return (
    <div className="single">
        <Sidebar />
        <div className="singleContainer">
            <Navbar />
            <div className="top">
                <div className="left">
                    <Link to="/editprofile" style={{textDecoration:"none"}}>
                    <div className="editButton">Edit</div>
                    </Link>
                    <h1 className="title">Information</h1>
                    <div className="item">
                        <img
                            src={ProfilePic}
                            alt=""
                            className="itemImg"
                        />
                        <div className="details">
                            <h1 className="itemTitle">{user.name}</h1>
                            <div className="detailItem">
                                <span className="itemKey">Email : </span>
                                <span className="itemValue">{user.email}</span>
                            </div>
                            <div className="detailItem">
                                <span className="itemKey">Phone : </span>
                                <span className="itemValue">{user.phoneNumber}</span>
                            </div>
                            <div className="detailItem">
                                <span className="itemKey">Department : </span>
                                <span className="itemValue">
                                    {user.department}
                                </span>
                            </div>
                            <div className="detailItem">
                                <span className="itemKey">Designation : </span>
                                <span className="itemValue">{user.designation}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                </div>
            </div>
            <div className="bottom">
                <Assignlist />
            </div>
        </div>
    </div>
);
}

export default Profile