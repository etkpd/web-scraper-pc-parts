const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');


const Users = require('../models/User');

// @route    GET api/auth
// @desc     Test route
// @access   Public
router.get('/', auth,  (req, res) => {
  try {
    Users.findById(req.user.id).then(user=> {      
      res.json({userDetails: user.userDetails()})
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST api/auth
// @desc     Authenticate user & get token
// @access   Public
router.post('/',  (req, res) => {
  const { username, password } = req.body.user;
  //Users.findOne({username}).then(user => res.json({user}));
   Users.findOne({username}).then(user => {
    if(user && user.isValidPassword(password)){
      res.json({ token: user.generateJWT() });
    } else {
      res.status(400).json({ errors: [ {msg: 'Invalid Credentials'} ] });
    }
  });
});

module.exports = router;
