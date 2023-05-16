const {models} = require('../db');

const getAllStudents = async (req, res) => {
    const students = await models.student.findAll();
    res.json(students);
}

const getStudentById = async (req, res) => {
    try{
        const studentId = req.params.id;
        const student = await models.student.findOne({
            where: {
                studentId: studentId
            }
        });
        res.json(student);
    }catch(err){
        console.log(err);
    }
}

const getStudentByEmail = async (req, res) => {
    try{
        const email = req.params.email;
        const student = await models.student.findOne({
            where: {
                email: email
            }
        });
        res.json(student);
    }catch(err){
        console.log(err);
    }
}

const groupStudentByDepartment = async (req, res) => {
    try{
        const students = await models.student.findAll({});
        const groupedStudents = students.reduce((acc, student) => {
            if (!acc[student.department]) {
                acc[student.department] = [];
            }
            acc[student.department].push(student);
            return acc;
        }
        , {});
        const sortedStudents = Object.keys(groupedStudents).map((key) => {
            return {
                department: key,
                students: groupedStudents[key]
            };
        }
        );
        res.json(sortedStudents);
    }catch(err){
        console.log(err);
    }
}

const createStudent = async (req, res) => {
    try{
        const {name, email, department, year, rollNumber, phoneNumber,projectId,project} = req.body;
        const student = await models.student.create({
            name: name,
            email: email,
            department: department,
            year: year,
            rollNumber: rollNumber,
            phoneNumber: phoneNumber,
            projectId:projectId,
            project:project
        });
        res.json(student);
    }catch(err){
        console.log(err);
    }
}

const updateStudent = async (req, res) => {
    try{
        const studentId = req.params.id;
        const {name, email, department, year, rollNumber, phoneNumber,projectId,project} = req.body;
        const student = await models.student.update({
            name: name,
            email: email,
            department: department,
            year: year,
            rollNumber: rollNumber,
            phoneNumber: phoneNumber,
            projectId:projectId,
            project:project
        },
        {
            where: {
                studentId: studentId
            }
        });
        res.json(student);
    }catch(err){
        console.log(err);
    }
}

const deleteAllStudents = async (req, res) => {
    try{
        const students = await models.student.destroy({
            where: {},
            truncate: true
        });
        res.json(students);
    }catch(err){
        console.log(err);
    }
}

const deleteStudent = async (req, res) => {
    try{
        const studentId = req.params.id;
        const student = await models.student.destroy({
            where: {
                studentId: studentId
            }
        });
        res.json(student);
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    getAllStudents,
    getStudentById,
    getStudentByEmail,
    groupStudentByDepartment,
    createStudent,
    updateStudent,
    deleteAllStudents,
    deleteStudent
};
