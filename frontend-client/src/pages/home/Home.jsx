import React from 'react'
import './home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'
import { ToastContainer, toast} from "react-toastify";
import AdminTable from '../../components/table/Table2'
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from 'react-router-dom'
const Home = () => {
    const location = useLocation()
    React.useEffect(() => {
        if(location.state){
            if (location.state.message === "Login successful") {
                toast.success(location.state.message,
                    {autoClose: 1000,});
            }
        }
    }, [location]);
    
    
return (
    <div className="home">
        <Sidebar/>
        <div className="homeContainer">
            <Navbar/>
            <div className="widgets">
                <Widget type="faculty" />
                <Widget type="courses" />
                <Widget type="classes" />
                <Widget type="attendance" />
            </div>
            <div className="charts">
                <Featured/>
                <Chart/>
            </div>
            <div className="listContainer">
                <div className="listTitle">Admin User List</div>
                <AdminTable/>
            </div>
        </div>
        <ToastContainer/>
    </div>
) 
}

export default Home