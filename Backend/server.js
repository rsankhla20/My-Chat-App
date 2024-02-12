import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";
import { userInfo } from "os";

const app = express();
const PORT = process.env.PORT || 8000;

dotenv.config();
app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser()); // to get cookie data from browser

app.use("/api/auth", authRoutes);

app.use("/api/message", messageRoutes);

app.use("/api/users", userRoutes);

// app.get("/", (req, res) => {
//   res.send("hello world !");
// });

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server is running on port : ${PORT} !`);
});
