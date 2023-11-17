require('dotenv').config();
const express = require('express')
const app = express();

app.use(express.json())

app.listen(process.env.PORT, () => {
    return console.log('Start Serv Port 3000');
})