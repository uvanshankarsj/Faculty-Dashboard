
const {models} = require('../db')
const jwt = require('jsonwebtoken')
const {comparePassword} = require('../utils/utils')

const adminLogin = async (req, res) => {
    const {email, password} = req.body
    const admin = await models.admin.findOne({
        where: {
            email: email,
        }
    }).then(async (admin) => {
        console.log("admin: ", admin)
        if (admin) {
            const isValid = await comparePassword(password, admin.dataValues.password)
            if (isValid) {
                return admin
            } else {
                return null
            }
        } else {
            return null
        }
    })
    if (admin) {
        //send jwt
        const token = jwt.sign({id: admin.adminId}, process.env.JWT_SECRET, {expiresIn: '7d'})
        res.json({token})
    } else {
        res.status(401).send({error: 'Invalid username or password'})
    }
}


module.exports = {
    adminLogin
}