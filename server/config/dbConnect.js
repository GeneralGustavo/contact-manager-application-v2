const mongoose = require('mongoose');


const db_connection = async() => {

    mongoose.Promise = global.Promise;

    const MONGO_URI = process.env.MONGO_URI;

    // Connect MongoDB at default port 27017.
    // await mongoose.connect(
    //     MONGO_URI, (err) => {
    //     if (!err) {
    //         console.log('MongoDB Connection Successful.')
    //     } else {
    //         console.log('Error in DB connection: ' + err)
    //     }
    // });

    try {
        const res = await mongoose.connect(MONGO_URI );
        if(res) {
            console.log("connection to DB Successful");
        }
    } catch (error) {
        console.log('Error in DB connection: ' + error);
    }
};

module.exports = db_connection;