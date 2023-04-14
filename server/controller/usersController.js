const UserModel = require('../models/userModel');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// @define:register user
// @route: /api/users/register
// @privacy: public
const registerUser = async(req, res) => {
    const { first_name, last_name, email, phone, password} = req.body;

    try {
        // check if email already exists
        const foundUser = await UserModel.findOne({ email: email.toLowerCase() });

        // if user found, 
        if (foundUser) {
            res.status(400).send({message: "User already exsist"});
            return;
        }

        // if not found, create a new user

        // create a salt
        const salt = await bcrypt.genSalt(10);

        // hash password
        const hashedPassword = await bcrypt.hash(password, salt);
        // console.log(hashedPassword);

        // create new user
        const newUser = await UserModel.create({
            first_name: first_name,
            last_name: last_name,
            email: email.toLowerCase(),
            phone: phone,
            password: hashedPassword,
        });


     // if user was not created successfully
     if (!newUser) {
        res.status(400);
        throw new Error("Unable to create User");
        return;
     } 

     // send confirmation email to user

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
        // check if email or password empty
        if (!email || !password) {
            res.status(400).send({message: "All Field Required!"});
            return;
        }
        // check if email exist
        const foundEmail = await UserModel.findOne({ email: email.toLowerCase() });
        // console.log(foundEmail);


        //check if password match
        if( !foundEmail || !(await bcrypt.compare(password, foundEmail.password))) {
            res.status(400).json({ message:"Invalid credentials"});
            return;
        }

        // if loggin details are correct

        // create a token
        const token = jwt.sign({id: foundEmail._id}, process.env.LOGIN_SECRET, {
             expiresIn: "1d",
        });
        req.session.save ((err) =>{
            if(err) {
                res.status(500).send({ message: err.message });
            return;
            } else {
                // sending token to back-end
                res.status(200).send({token: token});
            }
        });

        // res.json({message: "User loggedIn!"});
    } catch (error) {
        res.status(500).json({ message: error.message });
        return;
    }
};

// @define: get single user
// @route: /api/users/:id
// @privacy: proected
const getSingleUser = async(req, res) => {
    //destructure or get id from params
    const { id } = req.params;
    try {
        // fetch single user from database
        const singleUser = await UserModel.findById(id);

        // return single user to frontend
        res.send(singleUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
        return;
    }

    
}

// @define: all users
// @route: /api/users
// @privacy: proected
const getAllUser = async(req, res) => {
    try{
        // if req.user.id is absent, return
        if(!req.user.id) {
            res.status(401).send({ message: "Unauthorized Access"});
            return;
        }

        // fetch all users from DB
        const allUsers = await UserModel.find();
        
        // send data to front end
        res.send(allUsers);
    } catch (error) {
        res.status(500).json({ message: error.message });
        return;
    }
    
}

// @define: update single user
// @route: /api/users/:id
// @privacy: proected
const updateSingleUser = async(req, res) => {
    //destructure or get id from params
    const { id } = req.params;
    const { first_name, last_name, phone } = req.body;

    try {
        // check if user exist 
        const userExist = await UserModel.findById(id);

        // if user dosent exist
        if ( !userExist) {
            res.status(404).send( "User not found");
            return;
        }

        // console.log(`the value is : ${req.body?.first_name}`);

        // update user details
        const updatedUser = await UserModel.findByIdAndUpdate( id, {
            first_name: req.body?.first_name,
            last_name: req.body?.last_name,
            phone: req.body?.phone,
        }, { new: true }
        );

        // return updated user to frontend
        res.send(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
        return;
    }
};

// @define: delete single user
// @route: /api/users/:id
// @privacy: proected
const deleteSingleUser = async(req, res) => {
    // get id from params
    const { id } = req.params;

    try {
        // check if user exist 
        const userExist = await UserModel.findById(id);

        // if user dosent exist
        if ( !userExist) {
            res.status(404).send( "User not found");
            return;
        }


        // delete user here
        const deletedUser = await UserModel.findByIdAndDelete(id);
       

        // return delete user to frontend
        res.send(deletedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
        return;
    }
};

module.exports = { 
    registerUser, 
    loginUser,
    getSingleUser,
    getAllUser,
    updateSingleUser,
    deleteSingleUser 
};