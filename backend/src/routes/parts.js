import express from "express";
import Part from "../models/Part";

const router = express.Router();

router.post("/", (req, res) => {
  const { webpage, date, price } = req.body;
  const part = new Part({ webpage, date, price });

  part
    .save()
    .then( partRecord => {
      res.json({partRecord})
    })
    .catch(err => res.status(400).json({text: "Code Red"}))
   
});

export default router;