const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../models/User');

// @route    GET api/auth
// @desc     Test route
// @access   Public
router.get('/', (req, res) => {
  try {
    const user = Users.findById(req.user.id).select('-password');
    res.json(user);
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
    if (!user) {
      return res
      .status(400)
      .json({ errors: [{ msg: 'Invalid Credentials' }] });
    }
    bcrypt.compare(password, user.passwordHash).then(isMatch => {
      if(user && isMatch){
        const payload = {
          user: {
            id: user.id
          }
        };

        jwt.sign(
          payload,
          process.env.JWT_SECRET,
          { expiresIn: 360000 },
          (err, token) => {
            if (err) throw err;
            res.json({ token });
          }
        );
      } else{
        res.status(400).json({ errors: { global: "Invalid credentials" } });
      }
    });
  });
});

module.exports = router;
