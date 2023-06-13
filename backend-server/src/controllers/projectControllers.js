const {models} = require('../db')

const getAllProjects = async (req, res) => {
    const projects = await models.project.findAll()
    res.json(projects)
}

const getProjectById = async (req, res) => {
    try{
        const projectId = req.params.id
    const project = await models.project.findOne({
        where: {
            projectId: projectId
        }
    })
    res.json(project)
}catch(err){
    console.log(err)
}
}

const getProjectByTitle = async (req, res) => {
    try{
        const projectTitle = req.params.title
    const project = await models.project.findOne({
        where: {
            projectTitle: projectTitle
        }
    })
    res.json(project)
}catch(err){
    console.log(err)
}
}

const groupProjectByDepartment = async (req, res) => {
    try{
        const projects = await models.project.findAll({})
        const groupedProjects = projects.reduce((acc, project) => {
            if (!acc[project.department]) {
                acc[project.department] = []
            }
            acc[project.department].push(project)
            return acc
        }
        , {})
        const sortedProjects = Object.keys(groupedProjects).map((key) => {
            return {
                department: key,
                projects: groupedProjects[key]
            }
        }
        )
        res.json(sortedProjects)
    }catch(err){
        console.log(err)
    }
}

const createProject = async (req, res) => {
    try{
        const {projectid,title, description, domain, startDate, endDate, type, status, mentorId, mentorName} = req.body
        const startdateobj = new Date(startDate).toISOString().split('T')[0]
        const enddateobj = new Date(endDate).toISOString().split('T')[0]
        const project = await models.project.create({
            projectId: projectid,
            projectTitle: title,
            projectDescription: description,
            projectDomain: domain,
            projectStartDate: startdateobj,
            projectEndDate: enddateobj,
            projectType: type,
            projectStatus: status,
            MentorId: mentorId,
            MentorName: mentorName
        })
    res.json(project)
}catch(err){
    console.log(err)
}
}

const updateProject = async (req, res) => {
    try{
        const projectId = req.params.id
    const project = await models.project.findOne({
        where: {
            projectId: projectId
        }
    })
    if (project) {
        await project.update(req.body)
        res.json(project)
    } else {
        res.status(404).json({error: 'Project not found'})
    }
}catch(err){
    console.log(err)
}
}

const deleteProject = async (req, res) => {
    try{
        const projectId = req.params.id
    const project = await models.project.findOne({
        where: {
            projectId: projectId
        }
    })
    if (project) {
        await project.destroy()
        res.json({message: 'Project deleted'})
    } else {
        res.status(404).json({error: 'Project not found'})
    }
}catch(err){
    console.log(err)
}
}

const deleteAllProjects = async (req, res) => {
    try{
        const projects = await models.project.findAll({})
    projects.forEach(async (project) => {
        await project.destroy()
    }
    )
    res.json({message: 'All projects deleted'})
}catch(err){
    console.log(err)
}
}

const getProjectByMentorId = async (req, res) => {
    try{
        const mentorId = req.params.id
    const projects = await models.project.findAll({
        where: {
            MentorId: mentorId
        }
    })
    res.json(
        {
            mentorId: mentorId,
            projects: projects
        }
    )
}catch(err){
    console.log(err)
}
}



module.exports = {
    getAllProjects,
    getProjectById,
    getProjectByTitle,
    groupProjectByDepartment,
    createProject,
    updateProject,
    deleteProject,
    deleteAllProjects,
    getProjectByMentorId
}
