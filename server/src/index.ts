import express, { Request } from "express";
import routes from "./routes";

const app = express();

app.use("/", routes);

app.listen(3000, () => {
  console.log("Example app listening at http://localhost:3000");
});
