import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRouter from "./routes/ProductRouter.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

//api of products
app.use("/api", productRouter);

app.listen(process.env.EXPRESS_PORT, () => {
  console.log(`running...`);
});
