import express, { json } from "express";
import "express-async-errors";
import cors from "cors";
import dotenv from 'dotenv';
import errorHandlingMiddleware from "@/middlewares/error.middleware";
import router from "@/routes/index.routes";

const app = express();

dotenv.config();

app.use(json());
app.use(cors());
app.use(router);
app.use(errorHandlingMiddleware);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server is up and running")
})