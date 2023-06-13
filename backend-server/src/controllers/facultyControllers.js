const {models} = require('../db')
const bcrypt = require("bcrypt");


const getAllFaculties = async (req, res) => {
    const faculties = await models.faculty.findAll()
    res.json(faculties)
}

const getFacultyById = async (req, res) => {
    
        try{
            const facultyId = req.params.id
        const faculty = await models.faculty.findOne({
            where: {
                facultyId: facultyId
            }
        })
        res.json(faculty)
    }catch(err){
        console.log(err)
    }
}

const getFacultyByEmail = async (req, res) => {

    try{
        const email = req.params.email
    const faculty = await models.faculty.findOne({
        where: {
            email: email
        }
    })
    res.json(faculty)
}catch(err){
    console.log(err)
}
}

const groupFacultyByDepartment = async (req, res) => {
    try{
        const faculties = await models.faculty.findAll({})
        const groupedFaculties = faculties.reduce((acc, faculty) => {
            if (!acc[faculty.department]) {
                acc[faculty.department] = []
            }
            acc[faculty.department].push(faculty)
            return acc
        }
        , {})
        const sortedfaculties = Object.keys(groupedFaculties).map((key) => {
            return {
                department: key,
                faculties: groupedFaculties[key]
            }
        }
        )
        res.json(sortedfaculties)
    }catch(err){
        console.log(err)
    }
}

const groupFacultyByDesignation = async (req, res) => {
    try{
        const faculties = await models.faculty.findAll({})
        const groupedFaculties = faculties.reduce((acc, faculty) => {
            if (!acc[faculty.designation]) {
                acc[faculty.designation] = []
            }
            acc[faculty.designation].push(faculty)
            return acc
        }
        , {})
        const sortedfaculties = Object.keys(groupedFaculties).map((key) => {
            return {
                designation: key,
                faculties: groupedFaculties[key]
            }
        }
        )
        res.json(sortedfaculties)
    }catch(err){
        console.log(err)
    }
}

const  groupFacultyByDepartmentAndDesignation = async (req, res) => {
    try{
        const faculties = await models.faculty.findAll({})
        const groupedFaculties = faculties.reduce((acc, faculty) => {
            if (!acc[faculty.department]) {
                acc[faculty.department] = {}
            }
            if (!acc[faculty.department][faculty.designation]) {
                acc[faculty.department][faculty.designation] = []
            }
            acc[faculty.department][faculty.designation].push(faculty)
            return acc
        }
        , {})
        res.json(groupedFaculties)
    }catch(err){
        console.log(err)
    }
}

const createFaculty = async (req, res) => {
    const {name, email, password, department, designation, phoneNumber,papers,publications,citations,projects} = req.body
    try{
        const faculty = await models.faculty.create({
        name: name,
        email: email,
        password: await bcrypt.hash(password, 10),
        department: department,
        designation: designation,
        phoneNumber: phoneNumber,
        papers: papers,
        publications: publications,
        citations: citations,
        projects: projects
    })
    res.json(faculty)
    }catch(err){
        console.log(err)
    }
}

const updateFaculty = async (req, res) => {
    const facultyId = req.params.id
    const {name, email, password, department, designation, phoneNumber,papers,publications,citations,projects} = req.body
    try{
        const faculty = await models.faculty.update({
        name: name,
        email: email,
        password: password,
        department: department,
        designation: designation,
        phoneNumber: phoneNumber,
        papers: papers,
        publications: publications,
        citations: citations,
        projects: projects
    },{
        where:{
            facultyId: facultyId
        }
    })
    res.json(faculty)
    }catch(err){
        console.log(err)
    }
}

const deleteFaculty = async (req, res) => {
    const facultyId = req.params.id
    try{
        const faculty = await models.faculty.destroy({
        where:{
            facultyId: facultyId
        }
    })
    res.json(faculty)
    }catch(err){
        console.log(err)
    }
}

const deleteAllFaculties = async (req, res) => {
    try{
        const faculty = await models.faculty.destroy({
        where:{}
    })
    res.json(faculty)
    }catch(err){
        console.log(err)
    }
}
const getFacultyIdbyEmail = async (req,res)=>{
    try{
        const email = req.params.email
        const faculty = await models.faculty.findOne({
            where:
            {
                email:email
            }
        })
        res.json({
            facultyId:faculty.facultyId
        })
    }catch(err){
        console.log(err)
    }
    
}
module.exports = {
    getAllFaculties,
    getFacultyById,
    getFacultyByEmail,
    groupFacultyByDepartment,
    groupFacultyByDesignation,
    groupFacultyByDepartmentAndDesignation,
    createFaculty,
    updateFaculty,
    deleteFaculty,
    deleteAllFaculties,
    getFacultyIdbyEmail
}
