import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import axios from "axios";
import "./coursenew.scss";
const CourseNew = () => {
    const departmentchoice  = ['CSE', 'ECE', 'EEE', 'MEE', 'AEE', 'CIE', 'CHE', 'ARE', 'AIE', 'CYB','MTH','PHY','HSS','MBA','CCE'];
    const courseTypechoice = ["Core", "Elective", "Lab", "Other"];
    const courseStatuschoice = ["Ongoing", "Completed", "Dropped"];
    const courseModechoice = ["Online", "Offline", "Dual"];
    const [courseName, setCourseName] = useState("");
    const [courseCode, setCourseCode] = useState("");
    const [courseDescription, setCourseDescription] = useState("");
    const [courseDepartment, setCourseDepartment] = useState("");
    const [courseStartDate, setCourseStartDate] = useState("");
    const [courseEndDate, setCourseEndDate] = useState("");
    const [courseCredits, setCourseCredits] = useState(0);
    const [courseMode, setCourseMode] = useState("");
    const [courseType, setCourseType] = useState("");
    const [courseStatus, setCourseStatus] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const course = {
            courseName: courseName,
            courseCode: courseCode,
            courseDescription: courseDescription,
            courseDepartment: courseDepartment,
            courseStartDate: courseStartDate,
            courseEndDate: courseEndDate,
            courseCredits: courseCredits,
            courseMode: courseMode,
            courseType: courseType,
            courseStatus: courseStatus
        };
        console.log(course);
        axios.post("http://localhost:6969/api/courses",course,{
            headers: {
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${localStorage.getItem("token")}`,
            },
        }).then((res) => {
            console.log(res);
        }
        ).catch((err) => {
            console.log(err);
        }
        );
    setCourseName('');
    setCourseCode('');
    setCourseDescription('');
    setCourseDepartment('');
    setCourseStartDate('');
    setCourseEndDate('');
    setCourseCredits(0);
    setCourseMode('');
    setCourseType('');
    setCourseStatus('');
    };      

return  <div className="new">
            <Sidebar />
    <div className="container">
        <Navbar />
        <p> Add New Course</p>
        <form>
            <div>
                <label>
                    Course Name: &nbsp;
                    <input type="text" value={courseName} onChange={(e) => setCourseName(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Course Code: &nbsp;
                    <input type="text" value={courseCode} onChange={(e) => setCourseCode(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Course Description: &nbsp;
                    <textarea value={courseDescription} onChange={(e) => setCourseDescription(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Course Department: &nbsp;
                    <select value={courseDepartment} onChange={(e) => setCourseDepartment(e.target.value)}>
                        <option> Select </option>
                        {departmentchoice.map((department) => (
                            <option value={department}>{department}</option>
                        ))}
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Course Start Date: &nbsp;
                    <input type="date" id='startDate' value={courseStartDate} onChange={(e) => setCourseStartDate(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Course End Date: &nbsp;
                    <input type="date" id='endDate' value={courseEndDate} onChange={(e) => setCourseEndDate(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Course Credits: &nbsp;
                    <input type="number" value={courseCredits} onChange={(e) => setCourseCredits((e.target.value))} />
                </label>
            </div>
            <div>
                <label>
                    Course Mode: &nbsp;
                    <select value={courseMode} onChange={(e) => setCourseMode(e.target.value)}>
                        <option> Select </option>
                        {courseModechoice.map((courseMode) => (
                            <option value={courseMode}>{courseMode}</option>
                        ))}
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Course Type: &nbsp;
                    <select value={courseType} onChange={(e) => setCourseType(e.target.value)}>
                        <option> Select </option>
                        {courseTypechoice.map((courseType) => (
                            <option value={courseType}>{courseType}</option>
                        ))}
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Course Status: &nbsp;
                    <select value={courseStatus} onChange={(e) => setCourseStatus(e.target.value)}>
                        <option> Select </option>
                        {courseStatuschoice.map((courseStatus) => (
                            <option value={courseStatus}>{courseStatus}</option>
                        ))}
                    </select>
                </label>
            </div>
            <div>
                <button type="submit" onClick={handleSubmit}>Add Course</button>
            </div>
        </form>
            </div>
        </div>;
};

export default CourseNew;
