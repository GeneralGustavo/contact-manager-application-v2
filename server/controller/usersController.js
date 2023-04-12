const userModel = require('../models/userModel');
const UserModel = require('../models/userModel');
const bcrypt = require("bcrypt");

// @define:register user
// @route: /api/users/register
// @privacy: public
const registerUser = async(req, res) => {
    const { first_name, last_name, email, phone, password} = req.body;

    try {
        // check if email already exists
        const foundUser = await UserModel.find({email:email});

        // if user found, 
        if (!foundUser) {
            res.status(400).json({message: "User already exsist"});
            return;
        }

        // if not found, create a new user

        // create a salt
        const salt = 10;

        // hash password
        const hashedPassword = await bcrypt.hash(password, salt);
        // console.log(hashedPassword);

        // create new user
        const newUser = await UserModel.create({
            first_name: first_name,
            last_name: last_name,
            email: email,
            phone: phone,
            password: hashedPassword,
        });


     // if user was not created successfully
     if (!newUser) {
        res.status(400);
        throw new Error("Unable to create User");
     } 

     // response to front-end
     res.status(201).json({
        message: "User created!",
        data: newUser,
    });

    } catch (error) {
        res.status(500)
        throw new Error(`Internal server error:${error}`);
    }

    // res.json({
    //     message: "User created!",
    //     data: req.body,
    // });
};

// @define:login user
// @route: /api/users/login
// @privacy: public
const loginUser = async(req, res) => {
    // destructure email and password from req body
    const { email, password } = req.body;

    try{
        // check if email exist
        const foundEmail = await userModel.find({email:email });
        // console.log(foundEmail);

        const checkPassword = await bcrypt.compare( password, foundEmail.password );
        console.log(checkPassword);

        //check if password match
        // if( foundEmail && (await bcrypt.compare(password, foundEmail.password))) {
        //     res.status(400).json({ message:"Invalid credentials"});
        // }

        // if loggin details are correct
        res.json({
            message: "User loggedIn",
            data: foundEmail
        });

        // res.json({message: "User loggedIn!"});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
}

// @define: get single user
// @route: /api/users/:id
// @privacy: proected
const getSingleUser = async(req, res) => {
    res.json({message: "get single user!"});
}

// @define: all users
// @route: /api/users
// @privacy: proected
const getAllUser = async(req, res) => {
    res.json({message: "get All users!"});
}

// @define: update single user
// @route: /api/users/:id
// @privacy: proected
const updateSingleUser = async(req, res) => {
    res.json({message: "update single user!"});
}

// @define: delete single user
// @route: /api/users/:id
// @privacy: proected
const deleteSingleUser = async(req, res) => {
    res.json({message: "delete single user!"});
};

module.exports = { 
    registerUser, 
    loginUser,
    getSingleUser,
    getAllUser,
    updateSingleUser,
    deleteSingleUser 
};