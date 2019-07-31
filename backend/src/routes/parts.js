const express = require('express');
const Part = require('../models/Part');
const User = require('../models/User')
const parseErrors = require('../utils/parseErrors');
const auth = require('../middleware/auth');
const { scrapInitialValues } = require('../lib/scraper');

const router = express.Router();

// @route    POST api/parts/pricelog/:date
// @desc     Test - Add most recent price to Part's priceLog array. Used by web scraper. 
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
// @desc     TEST TEST TEST
// @access   Public
router.post("/", (req, res) => {
  /* const { webpage, partName, priceLog } = req.body;
  res.json({priceLog});  */

  Part.find({}).then((parts)=>{
    res.json(parts[1].webpage)
  })
   
});

// @route    POST api/parts/link
// @desc     Create a new Part document from submitted link, if needed. Also, add reference to Part document in user's partsList array
// @access   Private
router.post('/link', auth, async (req, res) => {
  const user_id = req.user.id;
  const webpage = req.body.webpage;
  let part_id = null;
  
  const entry = await Part.findOne({webpage}); 
  
  if (entry === null){
    //create a new Part document
    const part = new Part({webpage});
    //Scrap initial price and partName
    const date = new Date;
    const {price, partName} =  await scrapInitialValues(webpage);
    //Save initial price and partName to database
    const initialValues = {priceLog: {date, price}, partName };
    await part.saveInitialValues(initialValues);
    await part.save();
    
    //save part_id for newly created Part
    part_id = part._id;
  } else {
    //save part_id for an existing Part
    part_id = entry._id
    //+1 to reference counter
    await Part.updateOne({_id: entry._id},{$inc: {numberOfReferences: 1}});
  }  
  
  //Add Part to User's partsList
  const user = await User.findOne({_id: user_id}); 
  await user.addPartToFavorites(part_id);
  await user.save();
  
  const part = await Part.findById(part_id, '-numberOfReferences');
  
  //Send price and partName as a response to frontend
  res.json({newPart: part});

})


// @route    Delete api/parts/partsList/:part_id
// @desc     Remove Part from User's partsList array. Remove Part from database if it no longer is being referenced.
// @access   Private
router.delete('/partsList/:part_id', auth, async (req, res) => {
  const user_id = req.user.id;
  const part_id = req.params.part_id

  await User.findByIdAndUpdate(
    { _id: user_id },
    { $pull: { partsList: { partID: part_id} } },
    { new: true }
  )  

  const part = await Part.findByIdAndUpdate(
    { _id: part_id},
    { $inc: {numberOfReferences: -1}},
    { new: true }
  ) 
  if(part.numberOfReferences === 0) part.remove();

  res.json('all done');
})

module.exports = router;