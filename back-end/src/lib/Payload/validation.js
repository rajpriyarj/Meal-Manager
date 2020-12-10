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

const breakfast = Joi.object({
    breakfast: Joi.boolean().required()
})

const lunch = Joi.object({
    lunch: Joi.boolean().required()
})

const snacks = Joi.object({
    snacks: Joi.boolean().required()
})

const dinner = Joi.object({
    dinner: Joi.boolean().required()
})

const menu = Joi.object({
    day: Joi.string().required(),
    breakfast: Joi.string().required(),
    lunch: Joi.string().required(),
    snacks: Joi.string().required(),
    dinner: Joi.string().required()

})

const menuBreakfast = Joi.object({
    breakfast: Joi.string().required()
})

const menuLunch = Joi.object({
    lunch: Joi.string().required()
})

const menuSnacks = Joi.object({
    snacks: Joi.string().required()
})

const menuDinner = Joi.object({
    dinner: Joi.string().required()
})

module.exports = {
    newStudent, 
    loginStudent, 
    mealsSelection, 
    breakfast, 
    lunch, 
    snacks, 
    dinner, 
    menu,
    menuBreakfast, 
    menuLunch, 
    menuSnacks, 
    menuDinner
}