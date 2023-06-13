const {models} = require('../db')

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

const deleteEvent = async (req, res) => {
    const eventId = req.params.id
    try{const event = await models.events.destroy({
        where: {
            eventId: eventId
        }
    })
    res.json(event)
} catch(err){
    console.log(err)
}

}

const createEvent = async (req, res) => {
    const {facultyId, name, date, startTime, endTime, isStarred} = req.body
    try{
    const event = await models.events.create({
        facultyId: facultyId,
        name: name,
        date: date,
        startTime: startTime,
        endTime: endTime,
        isStarred: isStarred
    })
    res.json(event)
} catch(err){
    console.log(err)
}
}

const updateEvent = async (req, res) => {
    const eventId = req.params.id
    const {facultyId, name, date, startTime, endTime, isStarred} = req.body
    try{
    const event = await models.events.update({
        facultyId: facultyId,
        name: name,
        date: date,
        startTime: startTime,
        endTime: endTime,
        isStarred: isStarred
    }, {
        where: {
            eventId: eventId
        }
    })
    res.json(event)
} catch(err){
    console.log(err)
}
}

const getEventsByFacultyId = async (req, res) => {
    const facultyId = req.params.id
    const events = await models.events.findAll({
        where: {
            facultyId: facultyId
        }
    })
    res.json(events)
}
const getEventsByFacultyEmail = async (req, res) => {
    const facultyEmail = req.params.email
    const faculty = await models.faculty.findOne({
        where: {
            email: facultyEmail
        }
    })
    const facultyId = faculty.facultyId
    const events = await models.events.findAll({
        where: {
            facultyId: facultyId
        }
    })
    res.json(
        {
            events : events,
            facultyId : facultyId
        }
    )
}

const getstarredEventsByFacultyId = async (req, res) => {
    const facultyId = req.params.id
    const events = await models.events.findAll({
        where: {
            facultyId: facultyId
        }
    })
    const starredEvents = events.filter(event => event.isStarred === true)
    const nonstarredEvents = events.filter(event => event.isStarred === false)

    const sortedEvents = {
        starredEvents: starredEvents,
        nonstarredEvents: nonstarredEvents
    }
    res.json(sortedEvents)
}


module.exports = {
    getAllEvents,
    getEventById,
    getstarredEvents,
    deleteEvent,
    createEvent,
    updateEvent,
    getEventsByFacultyId,
    getstarredEventsByFacultyId,
    getEventsByFacultyEmail
}

