const express = require('express');
const router = express.Router();

    const usersController= require('../controllers/user_controllers')
    console.log('router logged');
    router.get('/profile',usersController.profile)
    router.get('/contact',usersController.contact)

module.exports=router;
