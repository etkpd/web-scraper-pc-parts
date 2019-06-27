import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import uniqueValidator from "mongoose-unique-validator";
const Schema = mongoose.Schema;

const schema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      index: true,
      unique: true
    },
    username: {
      type: String,
      required: true,
      lowercase: true,
      index: true,
      unique: true
    },
    passwordHash: { 
      type: String, 
    },
    confirmed: { 
      type: Boolean, 
      default: false 
    },
    confirmationToken: { 
      type: String, 
      default: "" 
    },
    partsList: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Part'
      }
    ]
  },
  { 
    timestamps: true 
  }
);

schema.methods.isValidPassword = function isValidPassword(password) {
  return bcrypt.compareSync(password, this.passwordHash);
};

schema.methods.setPassword = function setPassword(password) {
  this.passwordHash = bcrypt.hashSync(password, 10);
};

schema.methods.setConfirmationToken = function setConfirmationToken() {
  this.confirmationToken = this.generateJWT();
};

schema.methods.generateConfirmationUrl = function generateConfirmationUrl() {
  return `${process.env.HOST}/confirmation/${this.confirmationToken}`;
};

schema.methods.generateResetPasswordLink = function generateResetPasswordLink() {
  return `${process.env.HOST}/reset_password/${this.generateResetPasswordToken()}`;
};

schema.methods.generateJWT = function generateJWT() {
  return jwt.sign(
    {
      user: {
        id: this._id
      }
    },
    process.env.JWT_SECRET,
    { expiresIn: 360000 }
  );
};

schema.methods.generateResetPasswordToken = function generateResetPasswordToken() {
  return jwt.sign(
    {
      _id: this._id
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
};

schema.methods.toAuthJSON = function toAuthJSON() {
  return {
    username: this.username,
    confirmed: this.confirmed,
    payload: { 
      user: {
        id: this._id
      }
    },
    token: this.generateJWT()
  };
};

schema.methods.userDetails = function userDetails() {
  return {
    confirmed: this.confirmed,
    partsssList: this.partsList,
    emailooh: this.email,
    username: this.username
  };
};
schema.plugin(uniqueValidator, { message: "This email is already taken" });

module.exports = mongoose.model('Users', schema)

