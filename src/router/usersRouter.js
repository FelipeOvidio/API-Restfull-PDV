const express = require('express');
const { listUsersAll } = require('../controller/userController');

const user = express();

user.get('/usuarios', listUsersAll)


module.exports = user