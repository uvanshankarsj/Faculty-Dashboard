import { DataGrid } from "@mui/x-data-grid";
import { React, useState, useEffect } from "react";
import axios from "axios";
import "./assignlist.scss";
const Assignlist = () => {
    const [data, setData] = useState([]);
    const [user, setUser] = useState({});

    useEffect(() => {
        localStorage.getItem("user") &&
            setUser(JSON.parse(localStorage.getItem("user")));  
        const getData = async () => {
            try {
                const res = await axios.get("http://localhost:6969/api/assigns");
                setData(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getData();
    }, []);


    const userColumns = [
        { field: "courseID", headerName: "Course ID", width: 90 },
        {
            field: "courseName",
            headerName: "Course Name",
            width: 120,
            renderCell: (params) => {
                return <div className="userCell">{params.row.courseName}</div>;
            },
        },
        {
            field: "semester",
            headerName: "Semester",
            width: 100,
        },
        {
            field: "year",
            headerName: "Year",
            width: 100,
        },
        {
            field: "section",
            headerName: "Section",
            width: 100,
        },
        {
            field: "department",
            headerName: "Department",
            width: 120,
        },
        {
            field: "courseType",
            headerName: "Type",
            width: 120,
        },
        {
            field: "courseMode",
            headerName: "Mode",
            width: 120,
        },
        {
            field: "courseStatus",
            headerName: "Status",
            width: 120,
        },
    ];

return (
    <div className="datatable">
            <div className="datatableTitle">
                Courses Assigned
            </div>
            <DataGrid
                className="datagrid"
                rows={data.filter((item) => item.facultyID === user.facultyId)}
                columns={userColumns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                getRowId={(row) => row.courseID}
            />
        </div>
);
};

export default Assignlist;
