require('dotenv').config();
const express = require('express');
const user = require('./router/usersRote');
const app = express();

app.use(express.json())
app.use(user)

app.listen(process.env.PORT, () => {
    return console.log('Start Serv Port 3000');
})