const {to} = require('await-to-js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()

const database = require('../src/lib/models/studentModel')
const logger = require('./../src/lib/logger/winston')
const studentValue = require('./../src/lib/Payload/validation')

const postStudent = async (req, res) => {
    try {
        let err, result

        [err, result] = await to(studentValue.newStudent.validateAsync(req.body))
        if(err){
            throw new Error(err.message)
        }

        let encryptedPassword = await passwordHash(req.body.password.toString());
        delete req.body.password;
        req.body.encryptedPassword = encryptedPassword;

        [err, result] = await to(database.studentModel.findAll({
            where: {
                name: req.body.name
            }
        }))
        if (err) {
            throw new Error(err.message)
        }
        if (result[0]) {
            throw new Error(' A student with this username already exists !')
        }

        [err, result] = await to(database.studentModel.create(req.body))
        if (err) {
            throw new Error(err.message)
        }
        //
        let student = {name: req.body.name, encryptedPassword: req.body.encryptedPassword};
        // const token = jwt.sign(student, process.env.SECRET_KEY, {expiresIn: '50m'})

        return res.json({
            'data': {
                'message': 'Signed up successfully!',
                'your Access Token': generateToken(student)
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

const loginStudent = async (req, res) => {
    try {
        let err, result

        [err, result] = await to(studentValue.loginStudent.validateAsync(req.body))
        if(err){
            throw new Error(err.message)
        }

        [err, result] = await to(database.studentModel.findAll({
            where: {
                libraryId: req.body.libraryId
            }
        }))
        if (err) {
            throw new Error(err.message)
        }

        if (!result[0]) {
            throw new Error('no student with this libraryId exists!')
        }

        let student = result[0]['dataValues'];

        [err, result] = await to(bcrypt.compare(req.body.password.toString(), student.encryptedPassword))
        if (err) {
            throw new Error(err.message)
        }
        if (result) {
            student = {libraryId: req.body.libraryId, encryptedPassword: student.encryptedPassword}
            // const token = jwt.sign(student, process.env.SECRET_KEY, {expiresIn: '50m'})
            return res.json({
                'data': {
                    'message': 'logged in successfully !',
                    'your Access Token': generateToken(student)
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

module.exports = {postStudent, loginStudent, getStudent, updateAddress, updateCreditCard}