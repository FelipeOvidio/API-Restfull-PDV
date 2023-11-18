const joi = require('joi')

const verifyUser = joi.object({
    nome: joi.string().required().messages({
        'any.required': 'Campo nome é obrigatório'
    }),
    email: joi.string().email().required().messages({
        'any.required': 'Campo email é obrigatório'
    }),
    senha: joi.string().required().messages({
        'any.required': 'Campo senha é obrigatório'
    })
})

module.exports = {
    verifyUser
}