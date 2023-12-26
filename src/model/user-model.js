import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    require: true,
  },
  created: Date,
  updated: Date,
});

const User = mongoose.model("Users", UserSchema);

export default User;
