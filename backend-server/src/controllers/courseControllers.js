const {models} = require('../db')

const getAllCourses = async (req, res) => {
    const courses = await models.course.findAll({})
    res.json(courses)
}

const getCourseById = async (req, res) => {
    const courseId = req.params.id
    const course = await models.course.findOne({
        where: {
            courseId: courseId
        }
    })
    res.json(course)
}

const createCourse = async (req, res) => {
    const {courseName, courseCode, courseDescription, courseDepartment, courseStartDate,courseEndDate,courseCredits,courseMode,courseType,courseStatus} = req.body
    const course = await models.course.create({
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
    })
    res.json(course)
}

const updateCourse = async (req, res) => {
    const courseId = req.params.id
    const {courseName, courseCode, courseDescription, courseDepartment, courseStartDate,courseEndDate,courseCredits,courseMode,courseType,courseStatus} = req.body
    const course = await models.course.update({
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
    }, {
        where: {
            courseId: courseId
        }
    })
    res.json(course)
}

const deleteCourse = async (req, res) => {
    const courseId = req.params.id
    const course = await models.course.destroy({
        where: {
            courseId: courseId
        }
    })
    res.json(course)
}

const getCourseByDepartment = async (req, res) => {
    const courseDepartment = req.params.department
    const course = await models.course.findAll({
        where: {
            courseDepartment: courseDepartment
        }
    })
    res.json(course)
}

const getCourseByMode = async (req, res) => {
    const courseMode = req.params.mode
    const course = await models.course.findAll({
        where: {
            courseMode: courseMode
        }
    })
    res.json(course)
}

const getCourseByType = async (req, res) => {
    const courseType = req.params.type
    const course = await models.course.findAll({
        where: {
            courseType: courseType
        }
    })
    res.json(course)
}

const getCourseByStatus = async (req, res) => {
    const courseStatus = req.params.status
    const course = await models.course.findAll({
        where: {
            courseStatus: courseStatus
        }
    })
    res.json(course)
}

module.exports = {
    getAllCourses,
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse,
    getCourseByDepartment,
    getCourseByMode,
    getCourseByType,
    getCourseByStatus
}
