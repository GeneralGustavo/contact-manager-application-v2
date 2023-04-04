const express = require("express");
const usersRoute = express.Router();

// importing usersController
const { 
    registerUser,
    loginUser,
    getSingleUser,
    getAllUser,
    updateSingleUser,
    deleteSingleUser 
} = require('../controller/usersController');

// @define:register user
// @route: /api/users/register
// @privacy: public
usersRoute.post('/register', registerUser);

// @define:login user
// @route: /api/users/login
// @privacy: public
usersRoute.post('/login', loginUser );

// @define: all users
// @route: /api/users
// @privacy: proected
usersRoute.get('/', getAllUser );

// @define: get single user
// @route: /api/users/:id
// @privacy: proected
usersRoute.get('/:id', getSingleUser);

// @define: update single user
// @route: /api/users/:id
// @privacy: proected
usersRoute.put('/:id', updateSingleUser);

// @define: delete single user
// @route: /api/users/:id
// @privacy: proected
usersRoute.delete('/:id', deleteSingleUser);


module.exports = usersRoute;