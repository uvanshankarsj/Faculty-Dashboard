import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Datatable = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get("http://localhost:6969/api/faculties");
                setData(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getData();
    }, []);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.facultyId !== id));
        axios.delete(`http://localhost:6969/api/faculties/${id}`
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
        { field: "facultyId", headerName: "ID", width: 90 },
        {
            field: "user",
            headerName: "User",
            width: 100,
            renderCell: (params) => {
                return (
                    <div className="userCell">
                        {params.row.name}
                    </div>
                );
            },
        },
        {
            field: "email",
            headerName: "Email",
            width: 150,
        },
        {
            field: "department",
            headerName: "Status",
            width: 120,
        },
        {
            field: "designation",
            headerName: "Transaction Volume",
            width: 160,
        },
        {
            field: "phoneNumber",
            headerName: "Phone Number",
            width: 150,
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
                            onClick={() => handleDelete(params.row.facultyId)}
                        >
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
                Add New User
                <Link to="/users/new" className="link">
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
                getRowId={(row) => row.facultyId}
            />
        </div>
    );
};

export default Datatable;
