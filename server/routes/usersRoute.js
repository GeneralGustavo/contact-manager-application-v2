// import Profile from '../../client/src/components/Profile/Profile'
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

const isAuth = require('../middlewares/isAuth');

// @define:register user
// @route: /api/users/register
// @privacy: public
// @method :POST
usersRoute.post('/register', registerUser);

// @define:login user
// @route: /api/users/login
// @privacy: public
// @method :POST
usersRoute.post('/login', loginUser );

// @define: all users
// @route: /api/users
// @privacy: proected
// @method :GET
usersRoute.get('/', isAuth, getAllUser );

// @define: get single user Profile
// @route: /api/users/:id
// @privacy: proected
// @method :GET
usersRoute.get('/:id',isAuth, getSingleUser);

// @define: update single user
// @route: /api/users/:id
// @privacy: proected
// @method :PUT
usersRoute.put('/:id', isAuth, updateSingleUser);

// @define: delete single user
// @route: /api/users/:id
// @privacy: proected
// @method :DELETE
usersRoute.delete('/:id',isAuth, deleteSingleUser);


module.exports = usersRoute;