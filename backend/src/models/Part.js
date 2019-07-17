import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    webpage: {
      type: String,
      required: true,
      unique: true
    },
    partName: {
      type: String,
      unique: true
    },
    priceLog: [
      {
        date: {
          type: Number,
        },
        price: {
          type: Number,
        } 
      }
    ]
  }
);

schema.methods.appendRecentPrice = function appendRecentPrice(newPriceLog){
  this.priceLog.unshift(newPriceLog);
}

module.exports = mongoose.model('Part', schema)



