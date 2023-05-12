const {models} = require('../db')

const getAllUsers = async (req, res) => {
    const users = await models.user.findAll()
    res.json(users)
}

const getUserById = async (req, res) => {

    try{
        const userId = req.params.id
    const user = await models.user.findOne({
        where: {
            userId: userId
        }
    })
    res.json(user)
}catch(err){
    console.log(err)
}
}

const createUser = async (req, res) => {
    const {name, email, password, avatar, hasAnokhaPassport} = req.body
    try{
        const user = await models.user.create({
        name: name,
        email: email,
        password: password,
        avatar: avatar,
        hasAnokhaPassport: hasAnokhaPassport
    })
    res.json(user)
    }catch(err){
        console.log(err)
    }
}

const updateUser = async (req, res) => {
    const userId = req.params.id
    const {name, email, password, avatar, hasAnokhaPassport} = req.body
    try{
        const user = await models.user.update({
        name: name,
        email: email,
        password: password,
        avatar: avatar,
        hasAnokhaPassport: hasAnokhaPassport
    },{
        where:{
            userId: userId
        }
    })
    res.json(user)
    }catch(err){
        console.log(err)
    }
}

const deleteUser = async (req, res) => {
    const userId = req.params.id
    try{
        const user = await models.user.destroy({
        where:{
            userId: userId
        }
    })
    res.message("User deleted")
    }catch(err){
        console.log(err)
    }
}

const getuserbyemail = async (req, res) => {
    const email = req.params.email
    try{
        const user = await models.user.findOne({
        where:{
            email: email
        }
    })
    if (user){
        const validuser =
        {
            user : user,
        }
        res.json(validuser)
    }else{
        res.json({message: "User not found"})
    }
    }catch(err){
        console.log(err)
    }
}

const starredeventsbyuser = async (req, res) => {
    const userId = req.params.id
    try{
        const user = await models.user.findOne({
        where:{
            userId: userId
        }
    })
    if (user){
        const events = await models.starredevents.findAll({
            where:{
                userId: userId
            }
        })
        if (events){
            const validevents =
            {
                user : user,
                events : events
            }
            res.json(validevents)
        }else{
            res.json({message: "No events found for user"})
        }
    }else{
        res.json({message: "User not found"})

    }
    }catch(err){
        console.log(err)
    }
}

const addstarrdeventbyuser = async (req, res) => {
    const {userId, eventId} = req.body;
    try{
        const validuser = await models.user.findOne({
            where:{
                userId: userId
            }
        })
        const validevent = await models.event.findOne({
            where:{
                eventId: eventId
            }
        })
        if (validuser && validevent){
            const event = await models.starredevents.create({
                userId: userId,
                eventId: eventId
            })
            res.message("Event added")
        }else{
            res.json({message: "User or event not found"})
        }
    }catch(err){
        console.log(err)
    }
}

const  deletestarrdeventbyuser = async (req, res) => {
    const {userId, eventId} = req.body;
    try{
        const validuser = await models.user.findOne({
            where:{
                userId: userId
            }
        })
        const validevent = await models.event.findOne({
            where:{
                eventId: eventId
            }
        })
        if (validuser && validevent){
            const event = await models.starredevents.destroy({
                where:{
                    userId: userId,
                    eventId: eventId
                }
            })
            res.message("Event deleted")
        }else{
            res.json({message: "User or event not found"})
        }
    }catch(err){
        console.log(err)
    }
}

    
module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getuserbyemail,
    starredeventsbyuser,
    addstarrdeventbyuser,
    deletestarrdeventbyuser
}