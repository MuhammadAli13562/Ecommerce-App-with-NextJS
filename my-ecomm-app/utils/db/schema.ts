import mongoose, { Schema, model } from "mongoose";

const itemSchema = new Schema({
  itemName: String,
  itemid: String,
  itemQuantity: Number,
  itemImage: String,
});

const cartSchema = new Schema({
  userID: String,
  cartItems: [itemSchema],
});

const userSchema = new Schema({
  username: String,
  passwordHash: String,
  userID: String,
});

export default mongoose.models["items"] ?? mongoose.model("items", itemSchema);
