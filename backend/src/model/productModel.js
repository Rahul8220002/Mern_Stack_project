import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"],
    },
    descriptions: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 20,
    },
    category: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
      required: true,
    },
    ratings: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    createdAt: {
      type: Date,
    },
    create_By: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
