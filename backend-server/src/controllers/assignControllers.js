const {models} = require('../db')

const getAllAssigns = async (req, res) => {
    const assigns = await models.assign.findAll({})
    res.json(assigns)
}

const getAssignedByFacultyId = async (req, res) => {
    const facultyId = req.params.id
    const assigns = await models.assign.findAll({
        where: {
            facultyId: facultyId
        }
    })
    res.json(assigns)
}

const getAssignedByCourseId = async (req, res) => {
    const courseId = req.params.id
    const assigns = await models.assign.findAll({
        where: {
            courseId: courseId
        }
    })
    res.json(assigns)
}

const createAssign = async (req, res) => {
    const {facultyId, courseId,semester,section,year,facultyname,coursename,coursemode,coursetype,coursestatus,department} = req.body
    const assign = await models.assign.create({
        facultyId: facultyId,
        courseId: courseId,
        semester: semester,
        section: section,
        year: year,
        facultyName: facultyname,
        department: department,
        courseName: coursename,
        courseMode: coursemode,
        courseType: coursetype,
        courseStatus: coursestatus
    })
    res.json(assign)
}

const updateAssign = async (req, res) => {
    const facultyID = req.params.id
    const {facultyId, courseId,semester,section,year,facultyname,coursename,coursemode,coursetype,coursestatus,department} = req.body
    const assign = await models.assign.update({
        facultyId: facultyId,
        courseId: courseId,
        semester: semester,
        section: section,
        year: year,
        facultyName: facultyname,
        department: department,
        courseName: coursename,
        courseMode: coursemode,
        courseType: coursetype,
        courseStatus: coursestatus
    }, {
        where: {
            facultyId: facultyID
        }
    })
    res.json(assign)
}

const deleteAssignByFacultyId = async (req, res) => {
    const facultyId = req.params.id
    const assign = await models.assign.destroy({
        where: {
            facultyId: facultyId
        }
    })
    res.json(assign)
}

const deleteAssignByCourseId = async (req, res) => {
    const courseId = req.params.id
    const assign = await models.assign.destroy({
        where: {
            courseId: courseId
        }
    })
    res.json(assign)
}

module.exports = {
    getAllAssigns,
    getAssignedByFacultyId,
    getAssignedByCourseId,
    createAssign,
    updateAssign,
    deleteAssignByCourseId,
    deleteAssignByFacultyId
}
