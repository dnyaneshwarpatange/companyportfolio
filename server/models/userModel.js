const mongoose = require("mongoose")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const userScheme = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default: false,
    },
})

userScheme.pre("save", async function (next) {
    const user = this;
    if (!user.isModified("password")) {
      next();
    }
    try {
      const saltRound = 10;
      const hashed_pass = await bcrypt.hash(user.password, saltRound);
      user.password = hashed_pass;
    } catch (error) {
      next(error);
    }
  });

  userScheme.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,
        },
        process.env.JWT_SECRET,
        {
        expiresIn: "45d",
        }
    )
    } catch (error) {
        
    }
  }
const User = new mongoose.model("User",userScheme)
module.exports = User;