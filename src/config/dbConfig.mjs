import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function connectDB() {
  try {
    console.log(process.env);
    
    await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log("Conexión exitosa a MongoDB");
  } catch (error) {
    console.error("Error al conectar a MongoDB", error);
  }
}

