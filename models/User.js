import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import Category from "./Category.js";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your name"],
    maxlength: 20,
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
  },
  isEmailConfirmed: {
    type: Boolean,
    default: false
  },
  confirmString: {
    type: Boolean,
    select: false
  },
  password: {
    type: String,
    maxlength: 20,
    select: false,
    required: [true, "Please provie your password"],
  },
  photo: String,
  role: {
    type: String,
    enum: ["user", "moderator", "admin"],
    default: "user",
  },
  articles: [{ type: mongoose.Schema.Types.ObjectId, ref: "Article" }],
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
});

UserSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    return;
  }

  this.password = await bcrypt.hash(this.password, 10);
});

UserSchema.methods.comparePassword = async function (candidate, hashed) {
  return bcrypt.compare(candidate, hashed);
};

export default mongoose.model("User", UserSchema);
