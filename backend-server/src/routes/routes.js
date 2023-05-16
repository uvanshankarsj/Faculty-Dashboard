const router = require('express').Router();
const {adminAuth} = require('../middleware/middleware')
const {adminLogin} = require('../controllers/adminControllers')
const { getAllStudents,getStudentById,getStudentByEmail,groupStudentByDepartment,createStudent,updateStudent,deleteAllStudents,deleteStudent} = require('../controllers/studentControllers')
const {getAllFaculties,getFacultyById,createFaculty,updateFaculty,getFacultyByEmail,deleteAllFaculties,deleteFaculty,groupFacultyByDepartment,groupFacultyByDesignation,groupFacultyByDepartmentAndDesignation} = require('../controllers/facultyControllers')
const {getAllProjects,getProjectById,createProject,updateProject,deleteAllProjects,deleteProject} = require('../controllers/projectControllers')

// Student Routes
router.get('/api/students',getAllStudents)
router.get('/api/students/:id',getStudentById)
router.get('/api/students/email/:email',getStudentByEmail)
router.get('/api/students/group/department',groupStudentByDepartment)
router.post('/api/students',adminAuth,createStudent)
router.put('/api/students/:id',adminAuth,updateStudent)
router.delete('/api/students/all',adminAuth,deleteAllStudents)
router.delete('/api/students/:id',adminAuth,deleteStudent)

// Faculty Routes
router.get('/api/faculties',getAllFaculties)
router.get('/api/faculties/:id',adminAuth,getFacultyById)
router.get('/api/faculties/email/:email',getFacultyByEmail)
router.get('/api/faculties/group/department',groupFacultyByDepartment)
router.get('/api/faculties/group/designation',groupFacultyByDesignation)
router.get('/api/faculties/group/department/designation',groupFacultyByDepartmentAndDesignation)
router.post('/api/faculties',adminAuth,createFaculty)
router.put('/api/faculties/:id',adminAuth,updateFaculty)
router.delete('/api/faculties/all',adminAuth,deleteAllFaculties)
router.delete('/api/faculties/:id',adminAuth,deleteFaculty)

// Project Routes
router.get('/api/projects',getAllProjects)
router.get('/api/projects/:id',getProjectById)
router.post('/api/projects',createProject)
router.put('/api/projects/:id',updateProject)
router.delete('/api/projects/all',deleteAllProjects)
router.delete('/api/projects/:id',deleteProject)

// Admin Routes
router.get('/api/admin/login',adminLogin)
router.get('/api/admin/auth',adminAuth,(req,res)=>{
    res.json({
        success: true,
        message: "Admin Authenticated"
    })
}
)

module.exports = router;