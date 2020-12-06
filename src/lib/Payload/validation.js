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

const mealsSelection = Joi.object({
    breakfast: Joi.boolean().required(),
    lunch: Joi.boolean().required(),
    snacks: Joi.boolean().required(),
    dinner: Joi.boolean().required()
})

module.exports = {
    newStudent, loginStudent, mealsSelection
}