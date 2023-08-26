// database.ts
import mongoose from "mongoose";
import item_doc from "./schema";

async function connectToDB() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/ecommdb");
    console.log("Connected to DB");
  } catch (error) {
    console.log("Error Connecting to DB:", error);
    throw new Error("Error Connecting to DB");
  }
}

async function querytoDB(findQuery: Object, selectQuery: string) {
  try {
    const query = item_doc.find(findQuery);
    query.select(selectQuery);
    const items = await query.exec();
    console.log("query result:", items);
    return items;
  } catch (error) {
    console.log("error querying:", error);
    return undefined;
  }
}

export { querytoDB, connectToDB };
