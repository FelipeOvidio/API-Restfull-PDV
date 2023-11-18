const express = require('express');
const { registerUser, listUsersAll } = require('../controller/userController');
const schema = require('../schema/schemaUser');
const { validate } = require('../middleware/validation');



const user = express();
user.post('/usuario', validate(schema.verifyUser), registerUser)
user.get('/usuarios', listUsersAll)


module.exports = user