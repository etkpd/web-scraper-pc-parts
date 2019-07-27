const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');


const Users = require('../models/User');
const Part = require('../models/Part');

// @route    GET api/auth
// @desc     Test route
// @access   Public
router.get('/', auth,  async (req, res) => {
  try {
    const user =  await Users.findById(req.user.id);
    const partsList = user.partsList
    const partsIDs = [];
    for (let {partID: ID} of partsList) {
      partsIDs.push(ID);
    } 

    const partsListDetails = await Part.find({'_id': { $in: partsIDs}})

    res.json({userDetails: user.userDetails(), partsDetails: partsListDetails});
  } 
  catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST api/auth
// @desc     Authenticate user & get token
// @access   Public
router.post('/',  (req, res) => {
  const { username, password } = req.body.user;
  Users.findOne({username})
    .then(user => {
      if(user && user.isValidPassword(password)){
        res.json({ token: user.generateJWT() });
      } else {
        res.status(400).json({ errors: [ {msg: 'Invalid Credentials'} ] });
      }
    });
});

module.exports = router;
