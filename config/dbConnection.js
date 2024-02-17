const mongoose = require('mongoose')
require('dotenv').config()

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI);
        console.log(
            "Database connected successfully",
            connect.connection.host,
            connect.connection.port,
            connect.connection.name
        );
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
};


module.exports = {
    connectDb,
};