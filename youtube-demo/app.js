import express from "express";
const app = express();

// user-demo 소환
// CommonJS 방식
// const usersRouter = require("./routes/user-demo");
import usersRouter from "./routes/users.js";
// channel-demo 소환
import channelRouter from "./routes/channels.js";

app.use("/", usersRouter);
app.use("/channels", channelRouter);

app.listen(7777, () => {
  console.log("Server is running on http://localhost:7777");
});
