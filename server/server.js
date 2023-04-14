const dotenv = require("dotenv").config();
const express = require('express');
const usersRoute = require("./routes/usersRoute");
const contactsRoute = require("./routes/contactsRoute");
const db_connection = require("./config/dbConnect");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const app = express();
db_connection();

const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(session({
    secret: process.env.LOGIN_SECRET,
    resave: true,
    saveUninitialized: true,
    store: MongoDBStore({
        uri:process.env.MONGO_URI
    })
}))

app.use('/api/users', usersRoute);
app.use('/api/contacts', contactsRoute);

// building defult route
app.get('/',(req,res)=>{

    res.send('home page')
})

app.listen(PORT, () =>{
    console.log(`Server listening on port ${PORT}!`);
});