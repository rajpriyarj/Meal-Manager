const {to} = require('await-to-js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()

const database = require('../src/lib/models/adminModel')
const logger = require('./../src/lib/logger/winston')
const adminValue = require('../src/lib/Payload/validation')

const loginAdmin = async (req, res) => {
    try {
        let err, result

        [err, result] = await to(adminValue.adminLogin.validateAsync(req.body))
        if(err){
            throw new Error(err.message)
        }

        [err, result] = await to(database.adminModel.findAll({
            where: {
                email: req.body.email
            }
        }))
        if (err) {
            throw new Error(err.message)
        }

        if (!result[0]) {
            throw new Error('no admin with this email exists!')
        }

        let admin = result[0]['dataValues'];

        [err, result] = await to(bcrypt.compare(req.body.password.toString(), admin.encryptedPassword))
        if (err) {
            throw new Error(err.message)
        }
        if (result) {
            admin = {email: req.body.email, encryptedPassword: admin.encryptedPassword}
            // const token = jwt.sign(student, process.env.SECRET_KEY, {expiresIn: '50m'})
            req.user = admin
            return res.json({
                'data': {
                    'message': 'logged in successfully !',
                    'your Access Token': generateToken(admin)
                },
                'error': null
            })
        } else {
            throw new Error('Invalid Password!')
        }
    } catch (err) {
        logger.error(err.message)
        return res.json({
            'data': null,
            'error': {
                'message': err.message
            }
        })
    }
}

const generateToken  = (userData) => {
    let token = jwt.sign(userData, process.env.SECRET_Key, {
        expiresIn: 172800000,
    });
    return token;
};

module.exports = { 
    loginAdmin
}