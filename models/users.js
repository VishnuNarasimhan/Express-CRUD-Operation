const mongoose = require("mongoose");

//Schema is created...
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  isPromoted: {
    type: Boolean,
    default: null
  },
});
//---------------------------------------------

//Model is created...
const User = mongoose.model("User", userSchema);
//---------------------------------------------

module.exports = User;
