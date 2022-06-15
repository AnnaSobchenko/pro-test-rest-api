const { Schema, model } = require("mongoose");

const usersSchema = new Schema({
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  token: {
    type: String,
    default: null,
  },
  refreshToken: {
    type: String,
    default: null,
  },
  sid: {
    type: String,
    default: null,
  },
});

const Users = model("users", usersSchema);

module.exports = {
  Users,
};
