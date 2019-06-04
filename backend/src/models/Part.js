import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    webpage: {
      type: String,
      required: true,
      unique: true
    },
    date: { 
      type: Number,
      required: true 
    },
    price: { 
      type: Number, 
      required: true
    }
  }
);

export default mongoose.model('Part', schema);
