import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import crypto from "crypto";

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "fullname is required"],
      minLength: [2, "fullname must contain at leat 3 characters"],
      maxLength: [60, "fullname must contain at leat 60 characters"],
      trime: true,
    },
    lastName: {
      type: String,
      trime: true,
    },
    email: {
      type: String,
      // required: true,
      unique: true,
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
    },
    DOB: {
      type: Date,
      default: Date.now,
      required: [true, "please provide DOB"],
    },
    password: {
      type: String,
      required: true,
      minLength: [2, "password must contain at leat 2 characters"],
      maxLength: [101, "password must contain at leat 101 characters"],
    },
    role: {
      type: String,
      enum: ["User", "Admin"],
      default: "user",
      required: true,
    },
    forgotpasswordToken: String,
    forgotpasswordExpiry: Date,
  },

  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.correctPassword = async function (enterpassword) {
  return await bcrypt.compare(enterpassword, this.password);
};

userSchema.methods.generatePasswordtoken = async function () {
  const resetToken = await crypto.randomBytes(20).toString("hex");
  this.forgotpasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.forgotpasswordExpiry = Date.now() + 15 * 6 * 1000;
  return resetToken;
};

export const User = mongoose.model("User", userSchema);
