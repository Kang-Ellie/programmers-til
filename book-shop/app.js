// express 모듈
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import userRouter from "./routes/users.js";
import bookRouter from "./routes/books.js";
import categoryRouter from "./routes/category.js";
import likeRouter from "./routes/likes.js";
import cartRouter from "./routes/carts.js";
import orderRouter from "./routes/orders.js";

const app = express();

const PORT = process.env.PORT || 9999;
dotenv.config();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);

app.use(express.json());

app.use("/users", userRouter);
app.use("/books", bookRouter);
app.use("/category", categoryRouter);
app.use("/likes", likeRouter);
app.use("/carts", cartRouter);
app.use("/orders", orderRouter);

// dotenv 모듈
app.listen(PORT, () => {
  console.log("서버 실행 중 👉 http://localhost:9999");
});
