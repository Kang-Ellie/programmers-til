// express 모듈
import express from "express";
import dotenv from "dotenv";

import userRouter from "./routes/users.js";
import bookRouter from "./routes/books.js";
import likeRouter from "./routes/likes.js";
import cartRouter from "./routes/carts.js";
import orderRouter from "./routes/orders.js";

const app = express();
const PORT = process.env.PORT || 9999;
dotenv.config();

app.use("/users", userRouter);
app.use("/books", bookRouter);
app.use("/likes", likeRouter);
app.use("/carts", cartRouter);
app.use("/orders", orderRouter);

// dotenv 모듈
app.listen(PORT, () => {
  console.log("서버 실행 중 👉 http://localhost:9999");
});
