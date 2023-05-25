import React from 'react'
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const CourseList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get("http://localhost:6969/api/courses");
                setData(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getData();
    }, []);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.courseId !== id));
        axios.delete(`http://localhost:6969/api/courses/${id}`
        ,{
            headers: {
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${localStorage.getItem("token")}`,
            },
        }).then((res) => {
            console.log(res);
        }
        );
    };

    const userColumns = [
        { field: "courseId", headerName: "Course ID", width: 90 },
        {
            field: "courseName",
            headerName: "Course Name",
            width: 120,
            renderCell: (params) => {
                return <div className="userCell">{params.row.courseName}</div>;
            },
        },
        {
            field: "courseCode",
            headerName: "Course Code",
            width: 100,
        },
        {
            field: "courseDepartment",
            headerName: "Department",
            width: 120,
        },
        {
            field: "courseType",
            headerName: "Type",
            width: 120,
        },
        {
            field: "courseCredits",
            headerName: "Credits",
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

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to="/users/view" style={{ textDecoration: "none" }}>
                            <div className="viewButton">View</div>
                        </Link>
                        <div
                            className="deleteButton"
                            onClick={() => handleDelete(params.row.courseId)}>
                            Delete
                        </div>
                    </div>
                );
            },
        },
    ];
            
return (
        <div className="datatable">
            <div className="datatableTitle">
                Add New Course
                <Link to="/courses/new" className="link">
                    Add New
                </Link>
            </div>
            <DataGrid
                className="datagrid"
                rows={data}
                columns={userColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
                getRowId={(row) => row.courseId}
            />
        </div>
);
}

export default CourseList