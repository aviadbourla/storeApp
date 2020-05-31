
const validate = require('validator');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  fname: { type: String },
  lname: { type: String },
  userEmail: {
    type: String,
    unique: true,
    require: true
  },
  userPassword: {
    type: String, minlenght: 7, trim: true
  },
})


userSchema.statics.FindIfUserExists = async (email, password) => {

  const user = await User.findOne({ userEmail: email })
  const userpass = await User.findOne({ userPassword: password })
  if (!userpass || !user || user.userPassword != userpass.userPassword) {
    console.log("wronggggg password or email")
    return false
  }
  else {
    return user
  }
  return false
  // const isMatch = await bcrypt.compare(password, user.userPassword)
  // if (!isMatch) {
  //   throw new Error("UNABLE TO LOG IN")
  // }
}

// userSchema.pre('save', async function (next) {
//   const user = this
//   // user.userPassword = await bcrypt.hash(user.userPassword, 8)
//   next();
// })


const User = mongoose.model('User', userSchema)

module.exports = User