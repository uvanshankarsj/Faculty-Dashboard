const router = require('express').Router();
const {adminAuth} = require('../middleware/middleware')
const {adminLogin,ForgotPassword,resetPassword,verifyToken,getFacultyId,getAdminById,getAllAdmins} = require('../controllers/adminControllers')
const { getAllStudents,getStudentById,getStudentByEmail,groupStudentByDepartment,createStudent,updateStudent,deleteAllStudents,deleteStudent} = require('../controllers/studentControllers')
const {getAllFaculties,getFacultyById,createFaculty,updateFaculty,getFacultyByEmail,deleteAllFaculties,deleteFaculty,groupFacultyByDepartment,groupFacultyByDesignation,groupFacultyByDepartmentAndDesignation} = require('../controllers/facultyControllers')
const {getAllProjects,getProjectById,createProject,updateProject,deleteAllProjects,deleteProject,getProjectByMentorId,getProjectByTitle} = require('../controllers/projectControllers');
const { sendEmail } = require('../controllers/emailControllers');
const { getAllEvents, getEventById, createEvent, updateEvent, deleteEvent,getEventsByFacultyId,getstarredEventsByFacultyId} = require('../controllers/eventControllers');
const {uploadpaper,uploadMultiplepapers,deleteFile,getFile,getAllFiles}= require('../controllers/fileControllers');
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

// Event Routes
router.get('/api/events',getAllEvents)
router.get('/api/events/:id',getEventById)
router.post('/api/events',createEvent)
router.put('/api/events/:id',updateEvent)
router.delete('/api/events/:id',deleteEvent)
router.get('/api/events/faculty/:id',getEventsByFacultyId)
router.get('/api/events/starred/:id',getstarredEventsByFacultyId)


// Project Routes
router.get('/api/projects',getAllProjects)
router.get('/api/projects/:id',getProjectById)
router.post('/api/projects',createProject)
router.put('/api/projects/:id',updateProject)
router.delete('/api/projects/all',deleteAllProjects)
router.delete('/api/projects/:id',deleteProject)
router.get('/api/projects/mentor/:id',getProjectByMentorId)
router.get('/api/projects/title/:title',getProjectByTitle)



// Admin Routes
router.post('/api/admin/login',adminLogin)
router.post('/api/admin/forgot-password',ForgotPassword)
router.get('/api/admin/auth',adminAuth,(req,res)=>{
    res.json({
        success: true,
        message: "Admin Authenticated",
    })
}
)
router.post('/api/admin/send-otp',sendEmail)
router.post('/api/admin/reset-password',resetPassword)
router.post('/api/admin/verify-token',verifyToken)
router.get('/api/admin/faculty/',getFacultyId)
router.get('/api/admin/:id',getAdminById)
router.get('/api/admins',getAllAdmins)

router.post('/api/upload',uploadpaper)
router.post('/api/upload/multiple',uploadMultiplepapers)
router.delete('/api/delete/:filename',deleteFile)
router.get('/api/download/:filename',getFile)
router.get('/api/files',getAllFiles)


module.exports = router;