const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    webpage: {
      type: String,
      required: true
    },
    partName: {
      type: String,
      default: ""
    },
    priceLog: [
      {
        _id: false,
        date: {
          type: Number
        },
        price: {
          type: Number
        } 
      }
    ],
    numberOfReferences: {
      type: Number,
      default: 1
    }
  }
);

schema.methods.appendRecentPrice = function appendRecentPrice(newPriceLog){
  this.priceLog.push(newPriceLog);
}

schema.methods.saveInitialValues = function saveInitialValues(initialValues){
  this.priceLog.push(initialValues.priceLog);
  this.partName = initialValues.partName;
}


module.exports = mongoose.model('Part', schema)