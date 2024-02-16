const express = require('express')
const mongoose = require('mongoose')
const app = express()

require('dotenv').config()

app.use(express.json())

/*Known as middleware*/
app.use('/', require('./routes/userRoute'));
app.use('/api/contacts', require('./routes/contactRoute'));

const mongoURI = process.env.MONGODB_URI
const port = process.env.PORT || 3001

mongoose.connect(mongoURI)
    .then(()=>{
        //first connected to database then server
        console.log('connected to mongodb');
        app.listen(port, ()=> {
            console.log('on port 3000');
        })
    })
    .catch((err)=>{
        console.log(err);
    })


