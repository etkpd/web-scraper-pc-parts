import express from "express";
import Part from "../models/Part";
import parseErrors from "../utils/parseErrors";

const router = express.Router();

router.post("/", (req, res) => {
  /* const { webpage, partName, priceLog } = req.body;
  res.json({priceLog}); */

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