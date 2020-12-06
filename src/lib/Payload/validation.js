const Joi = require("joi");

const newStudent = Joi.object({
    libraryId: Joi.string().required(),
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.required(),
    hostel: Joi.string().required()
})

const loginStudent = Joi.object({
    libraryId: Joi.string().required(),
    password: Joi.required(),
})

module.exports = {
    newStudent, loginStudent
}