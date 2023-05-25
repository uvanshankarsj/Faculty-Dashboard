import React from 'react'
import './courses.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import CourseList from '../../components/courseslist/CourseList'

const Courses = () => {
return (
    <div className="courses">
        <Sidebar/>
        <div className="coursesContainer">
            <Navbar/>
            <CourseList/>
        </div>
    </div>
)
}

export default Courses