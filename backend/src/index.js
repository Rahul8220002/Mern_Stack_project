import dbConnection from "./db/db.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookiesparser from "cookie-parser";
import userRouter from "./Routers/userRouter.js";
import productRouter from "./Routers/productRouter.js";

dotenv.config({
  path: ".env",
});
const app = express();
app.use(express.json());
app.use(
  cors({
    origin:[process.env.CORS_ORIGIN],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello from the server");
});

app.post("/add", (req, res) => {
  console.log("hello");
});

app.use(cookiesparser());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use(userRouter);
app.use(productRouter);

dbConnection();

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
