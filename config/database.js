import mongoose from "mongoose";

let connected = false;

const connectedDB = async () => {
  mongoose.set("strictQuery", true);

  //    if database already connected, don't connect again
  if (connected) {
    console.log("Database already connected");
    return;
  }

  //   connect to database
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
  } catch (error) {
    console.error("Error connecting to database", error);
  }
};

export default connectedDB;
