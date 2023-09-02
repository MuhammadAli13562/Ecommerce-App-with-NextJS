// database.ts
import mongoose from "mongoose";
import { item_model, cart_model } from "./schema";

async function connectToDB() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/ecommdb");
    console.log("Connected to DB");
  } catch (error: any) {
    throw new Error(`Error Connecting to DB : ${error.message}`);
  }
}

async function FindInDB(
  document: typeof item_model | typeof cart_model,
  findQuery: Object,
  selectQuery: string
) {
  try {
    await connectToDB();
    const query = document.find(findQuery);
    query.select(selectQuery);
    const items = await query.exec();
    return items;
  } catch (error) {
    console.log("error querying:", error);
    return undefined;
  }
}

export { FindInDB, connectToDB };
