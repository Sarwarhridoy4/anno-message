import mongoose from "mongoose";

type connectionObject = {
  isConnected?: number;
};

const connection: connectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection?.isConnected) {
    console.log("Connection already established.");
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGO_URI || "", {});
    connection.isConnected = db.connections[0].readyState;
    console.log("DB connected Successfully!");
  } catch (error) {
    console.log("Error connecting DB", error);
    process.exit(1);
  }
}

export default dbConnect;
