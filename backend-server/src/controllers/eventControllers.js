const {models} = require('../db')
const {Op} = require('sequelize')

const getAllEvents = async (req, res) => {
    const events = await models.events.findAll()
    res.json(events)
}

const getEventById = async (req, res) => {
    const eventId = req.params.id
    const event = await models.events.findOne({
        where: {
            eventId: eventId
        }
    })
    res.json(event)
}

const createEvent = async (req, res) => {
    const {eventId,name,description,date,type,venue,startTime,endTime,department,isStarred} = req.body
    const dateObject = new Date(date)
    const startTimeObject = new Date(dateObject.getFullYear(), dateObject.getMonth(), dateObject.getDate(), startTime.split(':')[0], startTime.split(':')[1])
    const endTimeObject = new Date(dateObject.getFullYear(), dateObject.getMonth(), dateObject.getDate(), endTime.split(':')[0], endTime.split(':')[1])
    try{
        const event = await models.events.create({
        eventId: eventId,
        name: name,
        description: description,
        date: dateObject,
        type: type,
        venue: venue,
        startTime: startTimeObject,
        endTime: endTimeObject,
        department: department,
        isStarred: isStarred
        })
        res.json(event)
    }catch(err){
        console.log(err)
    }
    
}

const updateEvent = async (req, res) => {
    const eventId = req.params.id
    const {name,description,date,type,venue,startTime,endTime,department,isStarred} = req.body
    const dateObject = new Date(date)
    const startTimeObject = new Date(dateObject.getFullYear(), dateObject.getMonth(), dateObject.getDate(), startTime.split(':')[0], startTime.split(':')[1])
    const endTimeObject = new Date(dateObject.getFullYear(), dateObject.getMonth(), dateObject.getDate(), endTime.split(':')[0], endTime.split(':')[1])
    try{
        const event = await models.events.update({
        name: name,
        description: description,
        date: date,
        type: type,
        venue: venue,
        startTime: startTimeObject,
        endTime: endTimeObject,
        department: department,
        isStarred: isStarred
    },{
        where:{
            eventId: eventId
        }
    })
    res.json(event)
} catch(err){
    console.log(err)
}
}

const deleteEvent = async (req, res) => {
    const eventId = req.params.id
    try{const event = await models.events.destroy({
        where: {
            eventId: eventId
        }
    })
    res.message("Event deleted")
} catch(err){
    console.log(err)
}
}

const getEventsByDepartment = async (req, res) => {
    const department = req.params.department
    try{
        const events = await models.events.findAll({
        where: {
            department: department
        }
    })
    res.json(events)
}
    catch(err){
        console.log(err)
    }
}

const getEventsByType = async (req, res) => {
    const type = req.params.type
    try{
    const events = await models.events.findAll({
        where: {
            type: type
        }
    })
    res.json(events)
}
catch(err){
    console.log(err)
}
}

const getstarredEvents = async (req, res) => {
    try{
    const events = await models.events.findAll({
        })
        const starredEvents = events.filter(event => event.isStarred === true)
        const nonstarredEvents = events.filter(event => event.isStarred === false)

        const sortedEvents = {
            starredEvents: starredEvents,
            nonstarredEvents: nonstarredEvents
        }
        res.json(sortedEvents)
}
catch(err){
    console.log(err)
}
}

const groupEventsByDate = async (req, res) => {
    try{
        const events = await models.events.findAll({})
        const groupedEvents = events.reduce((acc, event) => {
            const date = event.date
            if(!acc[date]){
                acc[date] = []
            }
            acc[date].push(event)
            return acc
        }
        , {})
        const sortedEvents = Object.keys(groupedEvents).map(key => {
            return {
                date: key,
                events: groupedEvents[key]
            }
        }
        )
        res.json(sortedEvents) 
    }catch(err){
        console.log(err)
    }
}

const groupEventsByDepartment = async (req, res) => {
    try{
        const events = await models.events.findAll({
        })
        const groupedEvents = events.reduce((acc, event) => {   
            const department = event.department
            if(!acc[department]){
                acc[department] = []
            }
            acc[department].push(event)
            return acc
        }, {})
        const sortedEvents = Object.keys(groupedEvents).map(key => {
            return {
                department: key,
                events: groupedEvents[key]
            }
        }
        )
        res.json(sortedEvents)
    }catch(err){
        console.log(err)
    }
}
const groupEventsByType = async (req, res) => {
    try{
        const events = await models.events.findAll({
        })
        const groupedEvents = events.reduce((acc, event) => {
            const type = event.type
            if(!acc[type]){
                acc[type] = []
            }
            acc[type].push(event)
            return acc
        }, {})
        const sortedEvents = Object.keys(groupedEvents).map(key => {
            return {
                type: key,
                events: groupedEvents[key]
            }
        }
        )
        res.json(sortedEvents)
    }catch(err){
        console.log(err)
    }
}

const groupEventsbyDay = async (req, res) => {
    try{
        const events = await models.events.findAll({
        })
        const groupedEvents = events.reduce((acc, event) => {
            const day = event.day
            if(!acc[day]){  
                acc[day] = []
            }
            acc[day].push(event)
            return acc
        }, {})
        const sortedEvents = Object.keys(groupedEvents).map(key => {
            return {
                day: key,
                events: groupedEvents[key]
            }
        }
        )
        res.json(sortedEvents)
    }catch(err){
        console.log(err)
    }
}

module.exports = {getAllEvents,createEvent,updateEvent,deleteEvent,getEventById,getEventsByDepartment,getEventsByType,getstarredEvents,groupEventsByDate,groupEventsByDepartment,groupEventsByType,groupEventsbyDay}