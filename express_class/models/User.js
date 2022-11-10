const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, " no username found "],
    minLength: 3,
  },
  email: {
    type: String,
    required: [true, "no email found"],
  },
  password: {
    type: String,
    required: [true, "no password found"],
  },
});

module.exports = mongoose.model("User", UserSchema);
