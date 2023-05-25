const {models} = require('../db')
const jwt = require('jsonwebtoken')
const {hashPassword, comparePassword} = require('../utils/utils')
const getAllAdmins = async (req, res) => {
    const admins = await models.admin.findAll()
    res.json(admins)
}
const getAdminById = async (req, res) => {
    const adminId = req.params.id
    const admin = await models.admin.findOne({
        where: {
            adminId: adminId
        }
    })
    res.json(admin)
}

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

    const faculty = await models.faculty.findOne({
        where: {
            email: email,
        }
    }).then(async (faculty) => {
        console.log("faculty: ", faculty)
        if (faculty) {
            const isValid = await comparePassword(password, faculty.dataValues.password)
            if (isValid) {
                return faculty
            } else {
                return null
            }
        } else {
            return null
        }
    })
    
    switch (true) {
        case !!faculty:
            //send jwt
            const token = jwt.sign({id: faculty.facultyId}, process.env.JWT_SECRET, {expiresIn: '7d'})
            res.status(200).send({message: 'Valid', 'token': token,user:faculty,userType:'faculty'})
            break
        case !!admin:
            //send jwt
            const token1 = jwt.sign({id: admin.adminId}, process.env.JWT_SECRET, {expiresIn: '7d'})
            res.status(200).send({message: 'Valid', 'token': token1,user:admin,userType:'admin'})
            break
        default:
            res.status(401).send({message: 'Invalid'})
    }
}
const ForgotPassword = async (req, res) => {
    const {email} = req.body
    const admin = await models.admin.findOne({
        where: {
            email: email,
        }
    }).then(async (admin) => {
        console.log("admin: ", admin)
        if (admin) {
            return admin
        } else {
            return null
        }
    })
    
    const faculty = await models.faculty.findOne({
        where: {
            email: email,
        }
    }).then(async (faculty) => {
        console.log("faculty: ", faculty)
        if (faculty) {
            return faculty
        } else {
            return null
        }
    })
    
    switch (true) {
        case !!faculty:
            //send jwt
            const token = jwt.sign({id: faculty.facultyId}, process.env.JWT_SECRET, {expiresIn: '7d'})
            res.status(200).send({message: 'Valid', 'token': token})
            break
        case !!admin:
            //send jwt
            const token1 = jwt.sign({id: admin.adminId}, process.env.JWT_SECRET, {expiresIn: '7d'})
            res.status(200).send({message: 'Valid', 'token': token1})
            break
        default:
            res.status(401).send({error: 'Invalid Email or Password',message:'Invalid Email'})
    }

}

const resetPassword = async (req, res) => {
    const {password, token} = req.body
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const faculty = await models.faculty.findOne({
        where: {
            facultyId: decoded.id,
        }
    }).then(async (faculty) => {
        console.log("faculty: ", faculty)
        if (faculty) {
            return faculty
        } else {
            return null
        }
    })
    const admin = await models.admin.findOne({
        where: {
            adminId: decoded.id,
        }
    }).then(async (admin) => {
        console.log("admin: ", admin)
        if (admin) {
            return admin
        } else {
            return null

        }
    })
    switch (true) {
        case !!faculty:
            //send jwt
            const hashedPassword = await hashPassword(password)
            await models.faculty.update({
                password: hashedPassword
            }, {
                where: {
                    facultyId: decoded.id
                }
            })
            res.status(200).send({message: 'Password Updated'})
            break
        case !!admin:
            //send jwt
            const hashedPassword1 = await hashPassword(password)
            await models.admin.update({
                password: hashedPassword1
            }, {
                where: {
                    adminId: decoded.id
                }
            })
            res.status(200).send({message: 'Password Updated'})
            break
        default:
            res.status(401).send({error: 'Invalid Email or Password'})
    }
}

const verifyToken = async (req, res) => {
    const {token} = req.body
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const faculty = await models.faculty.findOne({
        where: {
            facultyId: decoded.id,
        }
    }).then(async (faculty) => {
        console.log("faculty: ", faculty)
        if (faculty) {
            return faculty
        } else {
            return null
        }
    })
    const admin = await models.admin.findOne({
        where: {
            adminId: decoded.id,
        }
    }).then(async (admin) => {
        console.log("admin: ", admin)
        if (admin) {
            return admin
        } else {
            return null
        }
    })
    switch (true) {
        case !!faculty:
            //send jwt
            res.status(200).send({message: 'Valid'})
            break
        case !!admin:
            //send jwt
            res.status(200).send({message: 'Valid'})
            break
        default:
            res.status(401).send({error: 'Invalid Email or Password'})
    }
}

module.exports = {
    adminLogin,
    ForgotPassword,
    resetPassword,
    verifyToken,
    getAdminById,
    getAllAdmins
}