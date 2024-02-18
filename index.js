const express = require('express')
const mongoose = require('mongoose')
const app = express()
const console = require("console");
const {
    connectDb,
} = require("./config/dbConnection");


require('dotenv').config()

connectDb();

app.use(express.json())
app.use('/', require('./routes/contactRoute'));
/*He added a errorhandler middleware*/

app.listen(process.env.PORT, ()=> {
    console.log(`connected with port: ${process.env.PORT}`);
})
