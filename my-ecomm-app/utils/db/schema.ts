import mongoose, { Schema, model } from "mongoose";

export type itemType = {
  itemName: String;
  itemID: String;
  itemQuantity: Number;
  itemImage: String;
};

export const itemSchema = new Schema<itemType>({
  itemName: String,
  itemID: String,
  itemQuantity: Number,
  itemImage: String,
});

export type cartType = {
  userID: String;
  cartItems: [typeof itemSchema];
};

export const cartSchema = new Schema<cartType>({
  userID: String,
  cartItems: [itemSchema],
});

export const userSchema = new Schema({
  username: String,
  passwordHash: String,
  userID: String,
});

const item_model =
  mongoose.models["items"] ?? mongoose.model("items", itemSchema);

const cart_model =
  mongoose.models["carts"] ?? mongoose.model("carts", cartSchema);

const user_model =
  mongoose.models["users"] ?? mongoose.model("users", userSchema);

export { item_model, cart_model, user_model };
