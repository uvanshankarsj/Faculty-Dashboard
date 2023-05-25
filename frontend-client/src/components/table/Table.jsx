import React from 'react'
import './table.scss'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import axios from "axios";

const FacultyTable = () => {
    const [rows, setRows] = useState([])

    useEffect(() => {
        const getRows = async () => {
            try {
                const res = await axios.get("http://localhost:6969/api/faculties");
                console.log(res.data)
                setRows(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        getRows()
    }, [])

    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="tableCell">Faculty ID</TableCell>
                        <TableCell className="tableCell">Faculty Name</TableCell>
                        <TableCell className="tableCell">Email</TableCell>
                        <TableCell className="tableCell">Department</TableCell>
                        <TableCell className="tableCell">Designation</TableCell>
                        <TableCell className="tableCell">Phone Number</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.facultyId}>
                            <TableCell className="tableCell">{row.facultyId}</TableCell>
                            <TableCell className="tableCell">
                                <div className="cellWrapper">
                                    {row.name}
                                </div>
                            </TableCell>
                            <TableCell className="tableCell">{row.email}</TableCell>
                            <TableCell className="tableCell">{row.department}</TableCell>
                            <TableCell className="tableCell">{row.designation}</TableCell>
                            <TableCell className="tableCell">{row.phoneNumber}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default FacultyTable