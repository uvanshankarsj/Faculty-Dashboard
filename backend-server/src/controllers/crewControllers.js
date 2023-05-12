const {models} = require('../db')

const getAllCrews = async (req, res) => {
    const crew = await models.crew.findAll()
    res.json(crew)
}

const getCrewById = async (req, res) => {
    
        try{
            const crewId = req.params.id
        const crew = await models.crew.findOne({
            where: {
                crewId: crewId
            }
        })
        res.json(crew)
    }catch(err){
        console.log(err)
    }
}

const createCrew = async (req, res) => {
    const {name, department, role} = req.body
    try{
        const crew = await models.crew.create({
        name: name,
        department: department,
        role: role
    })
    res.json(crew)
    }catch(err){
        console.log(err)
    }
}

const updateCrew = async (req, res) => {
    const crewId = req.params.id
    const {name, department, role} = req.body
    try{
        const crew = await models.crew.update({
        name: name,
        department: department,
        role: role
    },{
        where:{
            crewId: crewId
        }
    })
    res.json(crew)
    }catch(err){
        console.log(err)
    }
}

const deleteCrew = async (req, res) => {
    const crewId = req.params.id
    try{
        const crew = await models.crew.destroy({
            where:{
                crewId: crewId
            }
        })
        res.json(crew)
    }catch(err){
        console.log(err)
    }
}

const getCrewByDepartment = async (req, res) => {
    const department = req.params.department
    try{
        const crew = await models.crew.findAll({
            where:{
                department: department
            }
        })
        res.json(crew)
    }catch(err){
        console.log(err)
    }
}

const getCrewByRole = async (req, res) => {
    const role = req.params.role
    try{
        const crew = await models.crew.findAll({
            where:{
                role: role
            }
        })
        res.json(crew)
    }catch(err){
        console.log(err)
    }
}

const groupCrewByDepartment = async (req, res) => {
    try{
        const crews = await models.crew.findAll({})
        const groupedCrews = crews.reduce((acc, crews) => {
            const {department} = crews
            if(!acc[department]){
                acc[department] = []
            }
            acc[department].push(crews)
            return acc
        }
        ,{})
        const sortedCrews = Object.keys(groupedCrews).sort((a, b) => {
            return a - b
        }
        ).map(key => {
            return {
                department: key,
                crews: groupedCrews[key]
            }
        }
        )
        res.json(sortedCrews)
    }catch(err){
        console.log(err)
    }
}

const groupCrewByRole = async (req, res) => {
    try{
        const crews = await models.crew.findAll({})
        const groupedCrews = crews.reduce((acc, crews) => {
            const {role} = crews
            if(!acc[role]){
                acc[role] = []
            }
            acc[role].push(crews)
            return acc
        }
        ,{})
        const sortedCrews = Object.keys(groupedCrews).sort((a, b) => {
            return a - b
        }
        ).map(key => {
            return {
                role: key,
                crews: groupedCrews[key]
            }
        }
        )
        res.json(sortedCrews)
    }catch(err){
        console.log(err)
    }
}


module.exports = {
    getAllCrews,
    getCrewById,
    createCrew,
    updateCrew,
    deleteCrew,
    getCrewByDepartment,
    getCrewByRole,
    groupCrewByDepartment,
    groupCrewByRole
}
