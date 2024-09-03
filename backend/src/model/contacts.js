import mongoose, { Schema } from "mongoose";

const constactSchema = new Schema({
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
    required: true,
  },
  message: {
    type: String,
    required: true,
    minLength: [2, "fullname must contain at leat 2 characters"],
    maxLength: [10000, "fullname must contain at leat 10000 characters"],
  },
});

export const contact = mongoose.model("contact", constactSchema);
