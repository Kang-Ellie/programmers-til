// express 모듈
import express from "express";
import dotenv from "dotenv";

import usersRouter from "./routes/users.js";

const app = express();
dotenv.config();

app.use("/", usersRouter);

// dotenv 모듈
app.listen(process.env.PORT);
