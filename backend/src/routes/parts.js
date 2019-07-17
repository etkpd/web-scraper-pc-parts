const express = require('express');
const Part = require('../models/Part');
const parseErrors = require('../utils/parseErrors');
const auth = require('../middleware/auth');

const router = express.Router();

// @route    POST api/parts/pricelog/:date
// @desc     Add most recent price to Part's priceLog array. Used by web scraper. 
// @access   Public
router.post('/pricelog/:date', (req, res) => {
  const { id, priceLog : {date , priceByBrand } } = req.body;
  const price = priceByBrand.reduce((prev, curr)=>prev.price < curr.price ? prev : curr).price;
  const part = Part.findById(id);
  
  part
    .then( part =>{
      const newPriceLog = {date, price};
      part.appendRecentPrice(newPriceLog);
      part.save();
      res.json({part})     
    })
    .catch(err => res.status(400).json({ errors: parseErrors(err.errors) })) 
});

// @route    POST api/parts
// @desc     test
// @access   Public
router.post("/", (req, res) => {
  /* const { webpage, partName, priceLog } = req.body;
  res.json({priceLog});  */



  const { webpage, partName, priceLog } = req.body;
  const part = new Part({ webpage, partName, priceLog });
  part
    .save()
    .then( partRecord => {
      res.json({partRecord})
    })
    .catch(err => res.status(400).json({ errors: parseErrors(err.errors) }))  
   
});

// @route    POST api/parts/link
// @desc     Create a new Part document from submitted link, also add reference to Part document in user's partsList array
// @access   Public
router.post('/link', auth, (req, res) => {
  const user = req.user.id;
  const webpage = req.body.webpage;
  const part = new Part({ webpage })
   
   part
    .save()
    .then( partRecord => {
      res.json({partRecord})
    })
    .catch(err => res.status(400).json({ errors: parseErrors(err.errors) })) 

});


module.exports = router;