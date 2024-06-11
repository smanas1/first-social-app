import mongoose from "mongoose";
export default function dbConfig() {
  mongoose
    .connect(process.env.MONGO_URI!)
    .then(() => console.log("DB Connected"))
    .catch(() => console.log("DB Connected failed"));
}
