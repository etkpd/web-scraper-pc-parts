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
      required: true,
      unique: true
    },
    priceLog: [
      {
        date: {
          type: Number,
          required: true
        },
        priceByBrand: [
          {
            brand: {
              type: String,
              required: true
            },
            price: {
              type: Number,
              required: true
            }
          }
        ]
      }
    ]
  }
);

export default mongoose.model('Part', schema);


