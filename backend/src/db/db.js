import mongoose from "mongoose";

const DBNAME = "e_commerce";
const dbConnection = async () => {
  try {
    const connectionMongodb = await mongoose.connect(
      `${process.env.MONGODB_URL}`
    );
    console.log(
      "mongodb connection sucessfully",
      connectionMongodb.connection.host
    );
  } catch (error) {
    console.log("mongodb connection failed", error);
  }
};
export default dbConnection;
