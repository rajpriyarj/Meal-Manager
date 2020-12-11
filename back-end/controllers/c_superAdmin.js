const {to} = require('await-to-js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()

const database = require('../src/lib/models/superAdminModel')
const logger = require('./../src/lib/logger/winston')
const superAdminValue = require('./../src/lib/Payload/validation')
const adminValue = require('../src/lib/Payload/validation')

const postSuperAdmin = async (req, res) => {
    try {
        let err, result

        [err, result] = await to(superAdminValue.superAdmin.validateAsync(req.body))
        if(err){
            throw new Error(err.message)
        }

        let encryptedPassword = await passwordHash(req.body.password.toString());
        delete req.body.password;
        req.body.encryptedPassword = encryptedPassword;

        [err, result] = await to(database.superAdminModel.findAll({
            where: {
                email: req.body.email
            }
        }))
        if (err) {
            throw new Error(err.message)
        }
        if (result[0]) {
            throw new Error(' This Admin already exists !')
        }

        [err, result] = await to(database.superAdminModel.create(req.body))
        if (err) {
            throw new Error(err.message)
        }
        //
        let superAdmin = {email: req.body.email, encryptedPassword: req.body.encryptedPassword};
        // const token = jwt.sign(student, process.env.SECRET_KEY, {expiresIn: '50m'})

        return res.json({
            'data': {
                'message': 'Signed up successfully!',
                'your Access Token': generateToken(superAdmin)
            },
            'error': null
        })
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

const loginSuperAdmin = async (req, res) => {
    try {
        let err, result

        [err, result] = await to(superAdminValue.loginSuperAdmin.validateAsync(req.body))
        if(err){
            throw new Error(err.message)
        }

        [err, result] = await to(database.superAdminModel.findAll({
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

        let superAdmin = result[0]['dataValues'];

        [err, result] = await to(bcrypt.compare(req.body.password.toString(), superAdmin.encryptedPassword))
        if (err) {
            throw new Error(err.message)
        }
        if (result) {
            superAdmin = {email: req.body.email, encryptedPassword: superAdmin.encryptedPassword}
            // const token = jwt.sign(student, process.env.SECRET_KEY, {expiresIn: '50m'})
            req.user = superAdmin
            return res.json({
                'data': {
                    'message': 'logged in successfully !',
                    'your Access Token': generateToken(superAdmin)
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

const postAdmin = async (req, res) => {
    try {
        let err, result

        [err, result] = await to(adminValue.admin.validateAsync(req.body))
        if(err){
            throw new Error(err.message)
        }

        let encryptedPassword = await passwordHash(req.body.password.toString());
        delete req.body.password;
        req.body.encryptedPassword = encryptedPassword;

        [err, result] = await to(database.adminModel.findAll({
            where: {
                email: req.body.email
            }
        }))
        if (err) {
            throw new Error(err.message)
        }
        if (result[0]) {
            throw new Error(' This Admin already exists !')
        }

        [err, result] = await to(database.adminModel.create(req.body))
        if (err) {
            throw new Error(err.message)
        }
        //
        let admin = {email: req.body.email, encryptedPassword: req.body.encryptedPassword};
        // const token = jwt.sign(student, process.env.SECRET_KEY, {expiresIn: '50m'})

        return res.json({
            'data': {
                'message': 'Signed up successfully!',
                'your Access Token': generateToken(admin)
            },
            'error': null
        })
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

const passwordHash = async (password) => {
    const saltRounds = 12;
    let [err, passwordHash] = await to(bcrypt.hash(password, saltRounds));
    try{
        if (err) {
            //logger.error('Error while generating password hash', { error: err });
            throw Error('Error while generating password hash');
        }
    } catch (e) {
        console.log(e.message)
    }

    return passwordHash;
};

const generateToken  = (userData) => {
    let token = jwt.sign(userData, process.env.SECRET_Key, {
        expiresIn: 172800000,
    });
    return token;
};

module.exports = {
    postSuperAdmin, 
    loginSuperAdmin,
    postAdmin
}