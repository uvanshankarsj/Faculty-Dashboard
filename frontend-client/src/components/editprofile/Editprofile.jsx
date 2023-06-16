import {React,useState} from 'react'
import './editprofile.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import axios from 'axios'
import CloudUploadSharpIcon from "@mui/icons-material/CloudUploadSharp";
import {toast,ToastContainer} from 'react-toastify'

const Editprofile = () => {
    const userInputs = [
        {
            id: 1,
            label: "Name",
            type: "text",
            placeholder: "Pranav Deepak",
            field : "name"
        },
        {
            id: 2,
            label: "Faculty ID",
            type: "number",
            placeholder: "-",
            field : "facultyId"
        },
        {
            id: 3,
            label: "Email",
            type: "mail",
            placeholder: "pranavdeepak13@gmail.com",
            field : "email"
        },
        {
            id: 4,
            label: "Phone",
            type: "text",
            placeholder: "+1 234 567 89",
            field : "phoneNumber"
        },
        {
            id: 5,
            label: "Password",
            type: "password",
            placeholder: "********",
            field : "password"
        },
        {
            id: 6,
            label: "Designation",
            type: "text",
            placeholder: "Assistant Professor",
            field : "designation"
        },
        {
            id: 7,
            label: "Department",
            type: "text",
            placeholder: "CSE",
            field : "department"
        },
    ];
    const FacultyID = localStorage.getItem("user")? JSON.parse(localStorage.getItem("user")).facultyId: "";
    const [file, setFile] = useState(null);
    const [user, setUser] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        designation: "",
        department: "",
    });

    const editprofile = (e) => {
        e.preventDefault();
        console.log(user);
        try{
            axios.put(`http://localhost:6969/api/faculties/${FacultyID}`,user, {
                headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
                },}).then((res) => {
                console.log(res.data);});
                setUser({
                    name: "",
                    email: "",
                    phoneNumber: "",
                    designation: "",
                    department: "",
                });
                toast.success("Profile Updated Successfully");
        }catch(err){
            console.log(err);
        }
    };


    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>Edit Profile</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img
                            src={file? URL.createObjectURL(file): "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}alt=""/>
                    </div>
                    <div className="right">
                        <form>
                            <div className="formInput">
                                <label htmlFor="file">
                                    Image: <CloudUploadSharpIcon className="uploadIcon"/>
                                </label>
                                <input type="file"id="file"onChange={(e) => setFile(e.target.files[0])}style={{ display: "none" }}/>
                            </div>
                            {userInputs.map((input,index) => (
                                <div className="formInput" key={index}>
                                    <label htmlFor={input.id}>{input.label}</label>
                                    {input.type === "number" || input.type ==='password' ? <input type={input.type} placeholder={input.placeholder} id={input.id} disabled/>:
                                    <input type={input.type} placeholder={input.placeholder} id={input.id} onChange={
                                        (e) => setUser({...user,[input.field]: e.target.value})
                                    } />}
                                </div>
                            ))}
                            <button onClick={editprofile}> Edit </button>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
}

export default Editprofile