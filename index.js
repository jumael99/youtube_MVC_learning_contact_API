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

