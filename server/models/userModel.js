import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    profilePic: String,
    coverPic: String,
    about: String,
    livesIn: String,
    worksAt: String,
    relationship: String,
    followers: [],
    following: [],
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("Users", UserSchema);
export default UserModel;
