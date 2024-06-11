import express, { Request } from "express";
import routes from "./routes";
import cors from "cors";
import dotenv from "dotenv";
import dbConfig from "./config/dbConfig";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
dbConfig();
app.use("/", routes);

app.listen(process.env.PORT, () => {
  console.log(`lisson: listening on port ${process.env.PORT}`);
});
