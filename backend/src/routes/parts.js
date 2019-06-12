import express from "express";
import Part from "../models/Part";
import parseErrors from "../utils/parseErrors";

const router = express.Router();

// @route    POST api/parts/pricelog/:date
// @desc     Append recent price log to part 
// @access   Private
router.post('/pricelog/:date', 
  async (req, res) => {
  /*    const { webpage, partName, priceLog } = req.body;
     const { date, priceByBrand } = priceLog;
    res.json(priceByBrand[2]);   */


    /* const user = await User.findById(req.user.id);
    const post = await Post.findById(req.params.id);

    const newComment = {
      text: req.body.text,
      name: user.name,
      avatar: user.avatar,
      user: req.user.id
    };

    post.comments.unshift(newComment);

    await post.save();

    res.json(post.comments); */




     //New New New
     const { webpage, partName, priceLog : {date , priceByBrand } } = req.body;

    const part = await Part.findById("5cf91032798dab252485322f");

    const newPriceLog = {
      date, priceByBrand
    };

    part.priceLog.unshift(newPriceLog);

    await part.save();

    res.json(part.priceLog);  





    /* const { webpage, partName, priceLog } = req.body;
    const part = new Part({ webpage, partName, priceLog });
    part
      .save()
      .then( partRecord => {
        res.json({partRecord})
      })
      .catch(err => res.status(400).json({ errors: parseErrors(err.errors) }))   */
   
  }
);


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



export default router;